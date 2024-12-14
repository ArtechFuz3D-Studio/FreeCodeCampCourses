// const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// function playSound(frequency = 440, duration = 0.5) {
//     const osc = audioCtx.createOscillator()
//     const envelope = audioCtx.createGain()
//     osc.connect(envelope)
//     envelope.connect(audioCtx.destination)

//     envelope.gain.setValueAtTime(0, audioCtx.currentTime)
//     //attack
//     envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.02)
//     //release
//     envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)

//     osc.type = "sawtooth"
//     osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)

//     osc.start()
//     osc.stop(audioCtx.currentTime + duration)
// }

// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// function playSound(frequency = 445, duration = 0.5) {
//     const osc = audioCtx.createOscillator();
//     const envelope = audioCtx.createGain();
//     const distortion = audioCtx.createWaveShaper();
//     const filter = audioCtx.createBiquadFilter();

//     // Oscillator
//     osc.type = "square"; // Creates a richer, instrument-like tone
//     osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

//     envelope.gain.setValueAtTime(0, audioCtx.currentTime)
//     //attack
//     envelope.gain.linearRampToValueAtTime(0.09, audioCtx.currentTime + 0.05)
//     //release
//     envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)
//     // Sustain (Hold for the duration)
//     // envelope.gain.setValueAtTime(0.2, audioCtx.currentTime + duration - 0.2);
//     // Release
//     // envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

//     // Distortion
//     distortion.curve = makeDistortionCurve(10);
//     distortion.oversample = "4x";

//     // Filter
//     filter.type = "lowpass"; // Smoothens the sound
//     filter.frequency.setValueAtTime(1300, audioCtx.currentTime); // Cutoff frequency

//     // Connect nodes
//     osc.connect(filter);
//     filter.connect(distortion);
//     distortion.connect(envelope);
//     envelope.connect(audioCtx.destination);

//     // Start and stop oscillator
//     osc.start();
//     osc.stop(audioCtx.currentTime + duration);
// }

// // Helper function to create a distortion curve
// function makeDistortionCurve(amount) {
//     const n_samples = 44100;
//     const curve = new Float32Array(n_samples);
//     const deg = Math.PI / 180;
//     for (let i = 0; i < n_samples; i++) {
//         const x = (i * 2) / n_samples - 1;
//         curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
//     }
//     return curve;
// }

// Test the function
// playSound(240, 0.02); // Plays a sound at 440 Hz for 1 second

//
//
//

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export function playSound(frequency = 445, duration = 0.5) {
    const osc = audioCtx.createOscillator();
    const envelope = audioCtx.createGain();
    const distortion = audioCtx.createWaveShaper();
    const filter = audioCtx.createBiquadFilter();
    const reverb = audioCtx.createConvolver(); // Reverb node

    // Oscillator
    osc.type = "square"; // Creates a richer, instrument-like tone
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    envelope.gain.setValueAtTime(0, audioCtx.currentTime);
    // Attack
    envelope.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 0.15);
    // Release
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

    // Distortion
    distortion.curve = makeDistortionCurve(400);
    distortion.oversample = "2x";

    // Filter
    filter.type = "lowpass"; // Smoothens the sound
    filter.frequency.setValueAtTime(1300, audioCtx.currentTime); // Cutoff frequency

    // Reverb
    reverb.buffer = createReverbBuffer(audioCtx); // Use helper function to create an impulse response

    // Connect nodes
    osc.connect(filter);
    filter.connect(distortion);
    distortion.connect(envelope);
    envelope.connect(reverb); // Connect envelope to reverb
    reverb.connect(audioCtx.destination); // Connect reverb to output

    // Start and stop oscillator
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// Helper function to create a distortion curve
function makeDistortionCurve(amount) {
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; i++) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
}

// Helper function to create a reverb buffer
function createReverbBuffer(audioCtx) {
    const sampleRate = audioCtx.sampleRate;
    const length = sampleRate * 2; // 3 seconds reverb
    const impulse = audioCtx.createBuffer(2, length, sampleRate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
        // Decay function
        const decay = Math.pow(1 - i / length, 3);
        left[i] = (Math.random() * 2 - 1) * decay;
        right[i] = (Math.random() * 2 - 1) * decay;
    }

    return impulse;
}
