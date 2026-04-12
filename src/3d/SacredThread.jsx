import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────
   Breakpoint detection (outside Canvas)
   desktop  ≥ 1024px
   tablet   640 – 1023px
   mobile   < 640px
───────────────────────────────────────── */

function getBreakpoint() {
	if (typeof window === 'undefined') return 'desktop';
	const w = window.innerWidth;
	return (
		w >= 1024 ? 'desktop'
		: w >= 640 ? 'tablet'
		: 'mobile'
	);
}

function useBreakpoint() {
	const [bp, setBp] = useState(getBreakpoint);
	useEffect(() => {
		const update = () => setBp(getBreakpoint());
		window.addEventListener('resize', update, { passive: true });
		return () => window.removeEventListener('resize', update);
	}, []);
	return bp;
}

/* ── Strand shaders ── */

const STRAND_V = `
attribute float aTubT;
varying float vT;
varying vec3 vNorm;
varying float vDepth;
void main(){
  vT = aTubT;
  vNorm = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}`;

const STRAND_F = `
precision mediump float;
uniform float uReveal, uTime, uStagger;
varying float vT, vDepth;
varying vec3 vNorm;
void main(){
  float rev = uReveal - uStagger;
  float mask = smoothstep(rev, rev - 0.04, vT);
  if(mask < 0.01) discard;
  float edge = smoothstep(0.06, 0.0, abs(vT - rev));
  float rim  = pow(1.0 - abs(dot(normalize(vNorm), vec3(0,0,1))), 2.2);
  vec3 base  = vec3(0.92, 0.88, 0.82);
  vec3 hot   = vec3(1.0, 0.97, 0.92);
  vec3 col   = mix(base, hot, edge * 0.6) + vec3(0.15,0.12,0.06) * rim * 0.3;
  float depF = smoothstep(3.5, 9.0, vDepth);
  col = mix(col, vec3(0.172,0.071,0.0), depF);
  float br = 0.72 + edge * 0.55 + rim * 0.18;
  float breath = 1.0 + sin(uTime * 0.3 + vT * 6.28) * 0.025;
  br *= (uReveal >= 0.98) ? breath : 1.0;
  gl_FragColor = vec4(col * br, mask * br * 0.88);
}`;

/* ── God-ray shader ── */

const RAY_F = `
precision mediump float;
uniform float uTime;
varying vec2 vUv;
void main(){
  vec2 c = vUv - 0.5;
  float fireY = c.y + 0.15;
  float fire = exp(-(c.x * c.x * 8.0 + fireY * fireY * 3.0)) * step(0.0, -c.y + 0.2);
  float i = fire * 0.05;
  gl_FragColor = vec4(vec3(0.92,0.68,0.22) * i, i);
}`;

/* ── Lotus background shader ── */

const YAN_F = `
precision mediump float;
uniform float uTime;
varying vec2 vUv;

float lotus(vec2 p, float r, float petals) {
  float a = atan(p.y, p.x);
  float d = length(p);
  float petal = abs(cos(a * petals * 0.5));
  float shape = smoothstep(r + 0.005, r, d / (0.6 + 0.4 * petal));
  float edge  = smoothstep(0.0, 0.012, abs(d / (0.6 + 0.4 * petal) - r));
  return (1.0 - edge) * shape * 0.6;
}

void main(){
  vec2 c = vUv - 0.5;
  float l1 = lotus(c, 0.18, 8.0)  * 0.012;
  float l2 = lotus(c, 0.30, 12.0) * 0.008;
  float l3 = lotus(c, 0.42, 16.0) * 0.005;
  float petals = (l1 + l2 + l3) * (0.8 + sin(uTime * 0.08) * 0.15);
  gl_FragColor = vec4(vec3(0.78, 0.58, 0.18), petals);
}`;

const SIMPLE_V = `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

/* ── Helpers ── */

function strandCurve(idx) {
	const pts = [];
	const R = 1.5;
	const spread = [0.12, 0, -0.12][idx];
	for (let i = 0; i <= 200; i++) {
		const t = (i / 200) * Math.PI * 2;
		pts.push(
			new THREE.Vector3(
				Math.cos(t) * R,
				spread * Math.sin(t / 2),
				Math.sin(t) * R,
			),
		);
	}
	return new THREE.CatmullRomCurve3(pts, true);
}

function addTubularAttr(geo, tubSegs, radSegs) {
	const n = geo.attributes.position.count;
	const a = new Float32Array(n);
	for (let i = 0; i <= tubSegs; i++)
		for (let j = 0; j <= radSegs; j++) {
			const idx = i * (radSegs + 1) + j;
			if (idx < n) a[idx] = i / tubSegs;
		}
	geo.setAttribute('aTubT', new THREE.BufferAttribute(a, 1));
}

/* ── Shared akshara data ── */

const ORBIT_AKSHARAS = [
	{ text: 'ॐ',          angle: 90  },
	{ text: 'भूः',        angle: 60  },
	{ text: 'भुवः',       angle: 30  },
	{ text: 'स्वः',       angle: 0   },
	{ text: 'तत्',        angle: 330 },
	{ text: 'सवितुर्',    angle: 300 },
	{ text: 'वरेण्यं',    angle: 270 },
	{ text: 'भर्गो',      angle: 240 },
	{ text: 'देवस्य',     angle: 210 },
	{ text: 'धीमहि',      angle: 180 },
	{ text: 'धियो',       angle: 150 },
	{ text: 'प्रचोदयात्', angle: 120 },
];

/* ── Per-breakpoint config ── */

const BP_CONFIG = {
	desktop: {
		scaleMax: 1,
		yOffset: 0,
		aksharaRadius: 2, // thread R=1.5, tube outer edge ~1.518
	},
	tablet: {
		scaleMax: 0.88,
		yOffset: 0.12,
		aksharaRadius: 2,
	},
	mobile: {
		scaleMax: 0.72,
		yOffset: 0.4,
		aksharaRadius: 2,
	},
};

/* ─────────────────────────────────────────
   3-D components
───────────────────────────────────────── */

function Strand({ index, revealRef }) {
	const mat = useRef();
	const TSEG = 150,
		RSEG = 8;

	const geo = useMemo(() => {
		const g = new THREE.TubeGeometry(
			strandCurve(index),
			TSEG,
			0.018,
			RSEG,
			true,
		);
		addTubularAttr(g, TSEG, RSEG);
		return g;
	}, [index]);

	const unis = useMemo(
		() => ({
			uReveal: { value: 0 },
			uTime: { value: 0 },
			uStagger: { value: index * 0.012 },
		}),
		[index],
	);

	useFrame((s) => {
		if (!mat.current) return;
		mat.current.uniforms.uReveal.value = revealRef.current;
		mat.current.uniforms.uTime.value = s.clock.elapsedTime;
	});

	return (
		<mesh geometry={geo}>
			<shaderMaterial
				ref={mat}
				transparent
				depthWrite={false}
				side={THREE.DoubleSide}
				uniforms={unis}
				vertexShader={STRAND_V}
				fragmentShader={STRAND_F}
			/>
		</mesh>
	);
}

function BrahmaGranthi({ revealRef }) {
	const ref = useRef();
	const glowRef = useRef();

	useFrame((s) => {
		if (!ref.current) return;
		if (revealRef.current < 1.0) {
			ref.current.visible = false;
			return;
		}
		ref.current.visible = true;
		if (!ref.current.userData.startTime)
			ref.current.userData.startTime = s.clock.elapsedTime;
		const elapsed = s.clock.elapsedTime - ref.current.userData.startTime;
		const appear = THREE.MathUtils.clamp(elapsed / 0.6, 0, 1);
		ref.current.scale.setScalar(appear < 1 ? appear * (2 - appear) * 1.15 : 1);
		if (glowRef.current) {
			const flash = Math.max(0, 1 - elapsed * 1.5) * 3;
			const pulse =
				appear >= 1 ? 1 + Math.sin(s.clock.elapsedTime * 1.2) * 0.08 : 1;
			glowRef.current.scale.setScalar(pulse + flash);
		}
	});

	return (
		<group ref={ref} position={[1.5, 0, 0]} scale={0}>
			<mesh rotation={[0, 0, 0]}>
				<torusGeometry args={[0.045, 0.012, 8, 16]} />
				<meshBasicMaterial color='#e0b850' transparent opacity={0.9} />
			</mesh>
			<mesh rotation={[Math.PI / 2, 0, 0]}>
				<torusGeometry args={[0.04, 0.011, 8, 16]} />
				<meshBasicMaterial color='#d4a840' transparent opacity={0.85} />
			</mesh>
			<mesh rotation={[0, 0, Math.PI / 2]}>
				<torusGeometry args={[0.042, 0.011, 8, 16]} />
				<meshBasicMaterial color='#dab048' transparent opacity={0.87} />
			</mesh>
			<mesh>
				<sphereGeometry args={[0.025, 12, 12]} />
				<meshBasicMaterial color='#f0c860' transparent opacity={0.95} />
			</mesh>
			<mesh ref={glowRef}>
				<sphereGeometry args={[0.09, 12, 12]} />
				<meshBasicMaterial
					color='#c09030'
					transparent
					opacity={0.18}
					blending={THREE.AdditiveBlending}
				/>
			</mesh>
		</group>
	);
}

function FireCore() {
	const ref = useRef();
	useFrame((s) => {
		if (!ref.current) return;
		ref.current.scale.setScalar(
			1 +
				Math.sin(s.clock.elapsedTime * 2.2) * 0.08 +
				Math.sin(s.clock.elapsedTime * 5.1) * 0.04,
		);
	});
	return (
		<group ref={ref}>
			<mesh>
				<sphereGeometry args={[0.06, 16, 16]} />
				<meshBasicMaterial color='#f0a030' transparent opacity={0.6} />
			</mesh>
			<mesh>
				<sphereGeometry args={[0.18, 16, 16]} />
				<meshBasicMaterial
					color='#c07020'
					transparent
					opacity={0.18}
					blending={THREE.AdditiveBlending}
				/>
			</mesh>
			<mesh>
				<sphereGeometry args={[0.5, 16, 16]} />
				<meshBasicMaterial
					color='#a06018'
					transparent
					opacity={0.06}
					blending={THREE.AdditiveBlending}
				/>
			</mesh>
		</group>
	);
}

function GodRays() {
	const mat = useRef();
	const unis = useMemo(() => ({ uTime: { value: 0 } }), []);
	useFrame((s) => {
		if (mat.current) mat.current.uniforms.uTime.value = s.clock.elapsedTime;
	});
	return (
		<mesh position={[0, 0, -0.3]}>
			<planeGeometry args={[5, 5]} />
			<shaderMaterial
				ref={mat}
				transparent
				depthWrite={false}
				uniforms={unis}
				vertexShader={SIMPLE_V}
				fragmentShader={RAY_F}
			/>
		</mesh>
	);
}

function YantraLines() {
	const mat = useRef();
	const unis = useMemo(() => ({ uTime: { value: 0 } }), []);
	useFrame((s) => {
		if (mat.current) mat.current.uniforms.uTime.value = s.clock.elapsedTime;
	});
	return (
		<mesh position={[0, 0, -2.5]}>
			<planeGeometry args={[12, 12]} />
			<shaderMaterial
				ref={mat}
				transparent
				depthWrite={false}
				uniforms={unis}
				vertexShader={SIMPLE_V}
				fragmentShader={YAN_F}
			/>
		</mesh>
	);
}

function Embers({ reducedMotion }) {
	const N = 22;
	const [geo] = useState(() => {
		const g = new THREE.BufferGeometry();
		const p = new Float32Array(N * 3);
		for (let i = 0; i < N; i++) {
			p[i * 3] = (Math.random() - 0.5) * 4;
			p[i * 3 + 1] = Math.random() * 4 - 2;
			p[i * 3 + 2] = (Math.random() - 0.5) * 3;
		}
		g.setAttribute('position', new THREE.BufferAttribute(p, 3));
		return g;
	});
	useFrame((_, dt) => {
		if (reducedMotion) return;
		const a = geo.attributes.position.array;
		for (let i = 0; i < N; i++) {
			a[i * 3 + 1] += dt * 0.07;
			a[i * 3] += Math.sin(a[i * 3 + 1] * 2.0) * dt * 0.015;
			if (a[i * 3 + 1] > 2.2) {
				a[i * 3 + 1] = -2.2;
				a[i * 3] = (Math.random() - 0.5) * 3;
				a[i * 3 + 2] = (Math.random() - 0.5) * 2;
			}
		}
		geo.attributes.position.needsUpdate = true;
	});
	return (
		<points geometry={geo}>
			<pointsMaterial
				size={0.012}
				color='#d4920a'
				transparent
				opacity={0.18}
				sizeAttenuation
				blending={THREE.AdditiveBlending}
				depthWrite={false}
			/>
		</points>
	);
}

/* ─────────────────────────────────────────
   Aksharas — desktop & tablet (Html)
   Perfectly reliable on large screens.
───────────────────────────────────────── */

function FloatingAksharasHtml({ reducedMotion, revealRef, radius }) {
	const groupRef = useRef();
	const startTime = useRef(null);

	useFrame((state) => {
		if (!groupRef.current || reducedMotion) return;
		const rev = revealRef.current;

		if (rev < 1 && !startTime.current) {
			document.querySelectorAll('.akshara-text').forEach((el) => { el.style.opacity = '0'; });
			return;
		}
		if (!startTime.current) startTime.current = state.clock.elapsedTime + 0.5;
		const elapsed = state.clock.elapsedTime - startTime.current;
		if (elapsed < 0) {
			document.querySelectorAll('.akshara-text').forEach((el) => { el.style.opacity = '0'; });
			return;
		}

		const spread = Math.min(elapsed / 1.0, 1);
		const eased = 1 - Math.pow(1 - spread, 4);
		groupRef.current.scale.setScalar(Math.max(eased, 0.01));
		document.querySelectorAll('.akshara-text').forEach((el) => {
			el.style.opacity = spread > 0 ? '1' : '0';
		});

		// Slide aksharas along the ring (don't rotate the group — keeps orbit plane locked to thread)
		const angleOffset = elapsed * 0.08;
		groupRef.current.children.forEach((child, i) => {
			if (i >= ORBIT_AKSHARAS.length) return;
			const baseRad = (ORBIT_AKSHARAS[i].angle * Math.PI) / 180;
			const rad = baseRad + angleOffset;
			child.position.set(Math.cos(rad) * radius, 0, Math.sin(rad) * radius);
		});
	});

	return (
		<group ref={groupRef} position={[0, 0, 0]} rotation={[0.61, 0, 0.14]}>
			{ORBIT_AKSHARAS.map((item, i) => {
				const rad = (item.angle * Math.PI) / 180;
				return (
					<group
						key={i}
						position={[Math.cos(rad) * radius, 0, Math.sin(rad) * radius]}
					>
						<Html
							center
							style={{ pointerEvents: 'none', userSelect: 'none' }}
						>
							<span
								className='akshara-text'
								style={{
									color: 'rgba(212,176,102,0.70)',
									fontSize: '22px',
									fontFamily: 'Playfair Display, serif',
									textShadow: '0 0 10px rgba(212,176,102,0.30)',
									whiteSpace: 'nowrap',
									opacity: 0,
									transition: 'opacity 0.3s',
								}}
							>
								{item.text}
							</span>
						</Html>
					</group>
				);
			})}
		</group>
	);
}

/* ─────────────────────────────────────────
   Aksharas — mobile (WebGL sprites)
   Html has z-index / overflow issues on
   mobile; CanvasTexture sprites are solid.
───────────────────────────────────────── */

function FloatingAksharasMobile({ reducedMotion, revealRef, radius }) {
	const groupRef = useRef();
	const matsRef = useRef([]);
	const startTime = useRef(null);
	const [textures, setTextures] = useState([]);

	useEffect(() => {
		const create = () => {
			const txts = ORBIT_AKSHARAS.map(({ text }) => {
				const canvas = document.createElement('canvas');
				canvas.width = 512;
				canvas.height = 192;
				const ctx = canvas.getContext('2d');
				ctx.clearRect(0, 0, 512, 192);
				ctx.font = "bold 80px 'Noto Sans Devanagari', Georgia, serif";
				ctx.fillStyle = 'rgba(212, 176, 102, 1.0)';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.shadowColor = 'rgba(212, 176, 102, 0.5)';
				ctx.shadowBlur = 12;
				ctx.fillText(text, 256, 96);
				const tex = new THREE.CanvasTexture(canvas);
				tex.minFilter = THREE.LinearFilter;
				tex.generateMipmaps = false;
				return tex;
			});
			setTextures(txts);
		};
		if (document.fonts?.ready) document.fonts.ready.then(create);
		else create();
		return () =>
			setTextures((prev) => {
				prev.forEach((t) => t.dispose());
				return [];
			});
	}, []);

	useFrame((state) => {
		if (!groupRef.current || reducedMotion) return;
		const rev = revealRef.current;

		if (rev < 1 && !startTime.current) {
			matsRef.current.forEach((m) => {
				if (m) m.opacity = 0;
			});
			return;
		}
		if (!startTime.current) startTime.current = state.clock.elapsedTime + 0.5;
		const elapsed = state.clock.elapsedTime - startTime.current;
		if (elapsed < 0) {
			matsRef.current.forEach((m) => {
				if (m) m.opacity = 0;
			});
			return;
		}

		const spread = Math.min(elapsed / 1.0, 1);
		const eased = 1 - Math.pow(1 - spread, 4);
		groupRef.current.scale.setScalar(Math.max(eased, 0.01));
		matsRef.current.forEach((m) => { if (m) m.opacity = spread * 0.7; });

		// Slide sprites along the ring (don't rotate the group)
		const angleOffset = elapsed * 0.08;
		groupRef.current.children.forEach((child, i) => {
			if (i >= ORBIT_AKSHARAS.length) return;
			const baseRad = (ORBIT_AKSHARAS[i].angle * Math.PI) / 180;
			const rad = baseRad + angleOffset;
			child.position.set(Math.cos(rad) * radius, 0, Math.sin(rad) * radius);
		});
	});

	if (textures.length === 0) return null;

	return (
		<group ref={groupRef} position={[0, 0, 0]} rotation={[0.61, 0, 0.14]}>
			{ORBIT_AKSHARAS.map((item, i) => {
				const rad = (item.angle * Math.PI) / 180;
				return (
					<sprite
						key={i}
						position={[Math.cos(rad) * radius, 0, Math.sin(rad) * radius]}
						scale={[0.9, 0.34, 1]}
					>
						<spriteMaterial
							ref={(m) => {
								matsRef.current[i] = m;
							}}
							map={textures[i] ?? null}
							transparent
							opacity={0}
							depthWrite={false}
						/>
					</sprite>
				);
			})}
		</group>
	);
}

/* ── Dispatcher ── */

function FloatingAksharas({ bp, reducedMotion, revealRef }) {
	const { aksharaRadius } = BP_CONFIG[bp];
	if (bp === 'mobile') {
		return (
			<FloatingAksharasMobile
				reducedMotion={reducedMotion}
				revealRef={revealRef}
				radius={aksharaRadius}
			/>
		);
	}
	return (
		<FloatingAksharasHtml
			reducedMotion={reducedMotion}
			revealRef={revealRef}
			radius={aksharaRadius}
		/>
	);
}

/* ─────────────────────────────────────────
   Scene layout — scales & aligns per bp
───────────────────────────────────────── */

function ResponsiveScene({ children, bp }) {
	const { viewport } = useThree();
	const { scaleMax, yOffset, aksharaRadius } = BP_CONFIG[bp];
	// Size to fit the outermost element (akshara orbit), not just the thread
	const span = aksharaRadius * 2;
	const fitW = viewport.width  / (span + 1.0);
	const fitH = viewport.height / (span + 1.5);
	const s = Math.min(scaleMax, fitW, fitH);
	return (
		<group scale={s} position={[0, yOffset, 0]}>
			{children}
		</group>
	);
}

function SceneContents({ reducedMotion, bp }) {
	const revealRef = useRef(0);
	const threadRef = useRef();

	useFrame((s, dt) => {
		if (reducedMotion) {
			revealRef.current = 1;
			return;
		}
		if (revealRef.current < 1)
			revealRef.current = Math.min(revealRef.current + dt / 3, 1);
		if (threadRef.current && revealRef.current >= 0.98)
			threadRef.current.scale.setScalar(
				1 + Math.sin(s.clock.elapsedTime * 0.28) * 0.008,
			);
	});

	return (
		<>
			<ambientLight intensity={0.08} color='#fff5e0' />
			<pointLight
				position={[0, 0, 0]}
				intensity={1.6}
				color='#d4920a'
				distance={8}
				decay={2}
			/>
			<pointLight
				position={[0, 3, 2]}
				intensity={0.25}
				color='#e0d8f0'
				distance={10}
				decay={2}
			/>

			<ResponsiveScene bp={bp}>
				<YantraLines />
				<GodRays />
				<group ref={threadRef} rotation={[0.61, 0, 0.14]}>
					<Strand index={0} revealRef={revealRef} />
					<Strand index={1} revealRef={revealRef} />
					<Strand index={2} revealRef={revealRef} />
					<BrahmaGranthi revealRef={revealRef} />
					<FireCore />
				</group>
				<Embers reducedMotion={reducedMotion} />
				<FloatingAksharas
					bp={bp}
					reducedMotion={reducedMotion}
					revealRef={revealRef}
				/>
			</ResponsiveScene>

			<fog attach='fog' args={['#2C1200', 4, 11]} />
		</>
	);
}

/* ── Entry point ── */

export default function SacredThreadScene({ reducedMotion = false }) {
	const bp = useBreakpoint();

	return (
		<Canvas
			camera={{ position: [0, 0.3, 6], fov: 55 }}
			dpr={[1, 2]}
			gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
			style={{ width: '100%', height: '100%' }}
		>
			<SceneContents reducedMotion={reducedMotion} bp={bp} />
		</Canvas>
	);
}
