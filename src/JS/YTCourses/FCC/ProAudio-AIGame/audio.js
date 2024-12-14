const ctx = myCanvas.getContext("2d");
let analyser = null;
let engine = null

window.addEventListener("click", () => {
  engine = new Engine()



  // beep(400)
  // setTimeout(() => {
  //   beep(400)
  //   setTimeout(() => {
  //     beep(400)
  //     setTimeout(() => {
  //       beep(700)
  //     }, 600)
  //   }, 600)
  // }, 600)
});

animate();

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  if (analyser) {
    const data = new Uint8Array(analyser.fftSize);
    analyser.getByteTimeDomainData(data);

    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = myCanvas.width * i / data.length;
    //   const y =  data[i];
    const y = (data[i] / 255) * myCanvas.height; 
      if (i == 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
  requestAnimationFrame(animate);
}

function beep(frequency) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();

  osc.frequency.setValueAtTime(frequency, 0);
  osc.connect(envelope);
  osc.start();
  osc.stop(0.4)

  envelope.gain.value = 0;
  // envelope.gain.exponentialRampToValueAtTime(0.5, 0.1)
  // envelope.gain.exponentialRampToValueAtTime(0.01, 0.2) // this sounds percussive
  // envelope.gain.exponentialRampToValueAtTime(0.01, 0.4) // this sounds percussive
  envelope.gain.linearRampToValueAtTime(0.5, 0.1)
  envelope.gain.linearRampToValueAtTime(0, 0.4)
  envelope.connect(audioCtx.destination);

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2 ** 12;
  envelope.connect(analyser);
}



 class Engine{
  constructor() {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)() ;

      const osc = audioCtx.createOscillator();
      const masterGain = audioCtx.createGain();
    
      osc.frequency.setValueAtTime(200, 0);
      osc.connect(masterGain);
      osc.start();
    
      masterGain.gain.value = 0.2;
      masterGain.connect(audioCtx.destination);

      const lfo = audioCtx.createOscillator()
      lfo.frequency.setValueAtTime(30,0)
      const mod =  audioCtx.createGain()
      mod.gain.value = 80
      lfo.connect(mod)
      mod.connect(osc.frequency)
      lfo.start()

      this.volume = masterGain.gain
      this.frequency = osc.frequency

      // nice sound
      // const lfo = audioCtx.createOscillator()
      // lfo.frequency.setValueAtTime(300,0)
      // const mod =  audioCtx.createGain()
      // mod.gain.value = 80
      // lfo.connect(mod)
      // mod.connect(osc.frequency)
      // lfo.start()
    
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2 ** 12;
      masterGain.connect(analyser);
  }

  setVolume(percent) {
    this.volume.value = percent
  }

  setPitch(percent) {
    this.frequency.setValueAtTime(
      percent * 200 + 100, 0
    )
  }
}
