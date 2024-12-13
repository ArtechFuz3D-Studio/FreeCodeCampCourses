const ctx = myCanvas.getContext("2d");
let analyser = null;
window.addEventListener("click", beep);

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

function beep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();

  osc.frequency.setValueAtTime(100, 0);
  osc.connect(envelope);
  osc.start();

  envelope.gain.value = 0.5;
  envelope.connect(audioCtx.destination);

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2 ** 7;
  envelope.connect(analyser);
}
