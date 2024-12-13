const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

function playSound(frequency = 445, duration =0.5) {
    const osc = audioCtx.createOscillator()
    const envelope = audioCtx.createGain()
    osc.connect(envelope)
    envelope.connect(audioCtx.destination)

    envelope.gain.setValueAtTime(0, audioCtx.currentTime)
    //attack
    envelope.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.01)
    //release
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)

    osc.start()
    osc.stop(audioCtx.currentTime + duration)
}