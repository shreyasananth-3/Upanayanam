// Synthesized Temple Bell using Web Audio API
export class TempleAudio {
  constructor() {
    this.audioContext = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.audioContext;
  }

  playBell(duration = 2) {
    if (this.isPlaying) return;

    const ctx = this.init();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    this.isPlaying = true;

    // Create nodes
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Connect graph
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Bell characteristics - fundamental frequency
    const baseFreq = 329.63; // E4 note
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);

    // Add harmonic richness with frequency modulation
    osc.frequency.exponentialRampToValueAtTime(
      baseFreq * 0.6,
      ctx.currentTime + duration
    );

    // Filter to create warm tone
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);

    // Envelope - quick attack, long sustain
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    // Start and stop
    osc.type = 'sine';
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);

    // Schedule the end
    setTimeout(() => {
      this.isPlaying = false;
    }, duration * 1000);
  }

  playBellSequence(count = 3, delay = 0.8) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        this.playBell(1.5);
      }, i * delay * 1000);
    }
  }

  playGayatriHum() {
    const ctx = this.init();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Low, resonant hum for Gayatri
    const freq = 110; // A2
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 3);

    osc.type = 'sine';
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 3);
  }
}

export const templeAudio = new TempleAudio();
