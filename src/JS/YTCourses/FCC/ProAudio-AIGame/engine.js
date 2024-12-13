

export class Engine{
    constructor() {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)() ;

        const osc = audioCtx.createOscillator();
        const masterGain = audioCtx.createGain();
      
        osc.frequency.setValueAtTime(200, 0);
        osc.connect(masterGain);
        osc.start();
      
        masterGain.gain.value = 0.2;
        masterGain.connect(audioCtx.destination);
      
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2 ** 12;
        masterGain.connect(analyser);
    }
}