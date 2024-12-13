const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

function playSound(frequency = 445, duration =0.5) {
    const osc = audioCtx.createOscillator()
    const envelope = audioCtx.createGain()
    osc.connect(envelope)
    envelope.connect(audioCtx.destination)

    envelope.gain.setValueAtTime(0, audioCtx.currentTime)
    //attack
    envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.02)
    //release
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)

    osc.start()
    osc.stop(audioCtx.currentTime + duration)
}

// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// function playSound(frequency = 445, duration = 0.5) {
//     const osc = audioCtx.createOscillator();
//     const envelope = audioCtx.createGain();
//     const distortion = audioCtx.createWaveShaper();
//     const filter = audioCtx.createBiquadFilter();

//     // Oscillator
//     osc.type = "sawtooth"; // Creates a richer, instrument-like tone
//     osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

//     envelope.gain.setValueAtTime(0, audioCtx.currentTime)
//     //attack
//     envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.02)
//     //release
//     envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)
//     // Sustain (Hold for the duration)
//     envelope.gain.setValueAtTime(0.2, audioCtx.currentTime + duration - 0.2);
//     // Release
//     envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

//     // Distortion
//     distortion.curve = makeDistortionCurve(800);
//     distortion.oversample = "4x";

//     // Filter
//     filter.type = "lowpass"; // Smoothens the sound
//     filter.frequency.setValueAtTime(700, audioCtx.currentTime); // Cutoff frequency

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
// playSound(440, 1); // Plays a sound at 440 Hz for 1 second
