import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG = `
  precision mediump float;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 c = vUv - 0.5;
    float dist = length(c);

    float ringR = 0.24;
    float rd = abs(dist - ringR);

    // thin luminous core
    float core = smoothstep(0.005, 0.0, rd);

    // soft glow
    float glow = exp(-rd * rd * 350.0) * 0.38;

    // wide atmospheric haze
    float haze = exp(-rd * rd * 28.0) * 0.055;

    // one faintly brighter arc — organic, not mechanical
    float angle = atan(c.y, c.x);
    float arc = 0.88 + 0.12 * sin(angle + 0.4);

    // breathing — barely perceptible
    float breath = 1.0 + sin(uTime * 0.15) * 0.02;

    float a = (core * 0.4 + glow + haze) * arc * breath;

    vec3 warm  = vec3(0.94, 0.78, 0.33);
    vec3 deep  = vec3(0.68, 0.48, 0.12);
    vec3 color = mix(deep, warm, core / max(a, 0.001));

    gl_FragColor = vec4(color, a);
  }
`;

function GlowRing({ reducedMotion }) {
  const mat = useRef();
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((state) => {
    if (mat.current && !reducedMotion) {
      mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[6, 6]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        vertexShader={VERT}
        fragmentShader={FRAG}
      />
    </mesh>
  );
}

function Motes({ reducedMotion }) {
  const count = 14;

  const [geo] = useState(() => {
    const g = new THREE.BufferGeometry();
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3]     = (Math.random() - 0.5) * 5;
      p[i * 3 + 1] = Math.random() * 5 - 2.5;
      p[i * 3 + 2] = (Math.random() - 0.5) * 2 - 1;
    }
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    return g;
  });

  useFrame((_, dt) => {
    if (!reducedMotion) {
      const a = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        a[i * 3 + 1] += dt * 0.06;
        if (a[i * 3 + 1] > 2.5) {
          a[i * 3 + 1] = -2.5;
          a[i * 3] = (Math.random() - 0.5) * 5;
        }
      }
      geo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points geometry={geo}>
      <pointsMaterial
        size={0.015}
        color="#c9912a"
        transparent
        opacity={0.14}
        sizeAttenuation
      />
    </points>
  );
}

export default function SacredGlowScene({ reducedMotion = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <GlowRing reducedMotion={reducedMotion} />
      <Motes reducedMotion={reducedMotion} />
    </Canvas>
  );
}
