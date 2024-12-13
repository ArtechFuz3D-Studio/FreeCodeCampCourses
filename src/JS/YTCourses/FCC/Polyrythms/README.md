```md
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Polyrythm</title>
  </head>
  <body>
    <canvas
      id="myCanvas"
      style="background-color: black"
      style="filter: blur(4px) contrast(10)"
    >
      <script src="./sound.js"></script>
      <script src="./track.js"></script>
      <script src="./ball.js"></script>
      <script>
        const size = 1000;
        myCanvas.width = size;
        myCanvas.height = size * 0.5;

        const trackCenter = { x: size * 0.5, y: size * 0.5 };
        // const trackRadius = 100
        const trackMinRadius = 100;
        const trackStep = 20;
        const ballRadius = 35;
        // const ballMinSpeed = 0.01
        // const ballSpeedStep = -0.0001
        // const ballMinSpeed = 0.5
        const ballMinSpeed = 0.0314;
        const ballSpeedStep = -0.000314;

        const mongolianMelody = [
          329.63, // E4
          440.0, // A4
          523.25, // C5
          392.0, // G4
          587.33, // D5
          440.0, // A4
          659.25, // E5
          523.25, // C5
          698.46, // G5
          587.33, // D5
          440.0, // A4
          329.63, // E4
          523.25, // C5
          392.0, // G4
          659.25, // E5
          698.46, // G5
          587.33, // D5
          440.0, // A4
          523.25, // C5
          329.63, // E4
        ];

        // console.log(mongolianMelody);

        const arabicMusicScale = [
          // Maqam Rast (Existing)
          1760, // A4
          1648, // G#4 - Quarter tone
          1567.98, // G4
          1396.91, // F#4
          1318.51, // E4
          1224, // D quarter flat
          1174.66, // D4
          1046.5, // C4
          987.77, // B3
          930, // B quarter flat
          880, // A3
          783.99, // G3
          698.46, // F3
          659.25, // E3
          610, // D quarter flat
          587.33, // D3
          523.25, // C3
          440, // A2
          392, // G2

          // Maqam Hijaz
          //   1046.5, // C4
          //   987.77, // B3
          //   932, // Bb - Quarter tone
          //   783.99, // G3
          //   698.46, // F3
          //   622, // E quarter flat
          //   587.33, // D3
          //   523.25, // C3

          // Maqam Nahawand
          //   1046.5, // C4
          //   987.77, // B3
          //   880, // A3
          //   783.99, // G3
          //   698.46, // F3
          //   659.25, // E3
          //   587.33, // D3
          //   523.25, // C3
        ];
        //             const arabicMusicScale = [
        //     { frequency: 1760, note: "A4" },
        //     { frequency: 1567.98, note: "G4" },
        //     { frequency: 1396.91, note: "F#4" },
        //     { frequency: 1318.51, note: "E4" },
        //     { frequency: 1174.66, note: "D4" },
        //     { frequency: 1046.5, note: "C4" },
        //     { frequency: 987.77, note: "B3" },
        //     { frequency: 880, note: "A3" },
        //     { frequency: 783.99, note: "G3" },
        //     { frequency: 698.46, note: "F3" },
        //     { frequency: 659.25, note: "E3" },
        //     { frequency: 587.33, note: "D3" },
        //     { frequency: 523.25, note: "C3" },
        //     { frequency: 493.88, note: "B2" },
        //     { frequency: 340, note: "Approx. Rast" },
        //     { frequency: 292, note: "Approx. Hijaz" },
        //     { frequency: 249.23, note: "Approx. Nahawand" },
        //     { frequency: 229.63, note: "Approx. Kurd" },
        //     { frequency: 193.66, note: "Lower Rast" },
        //     { frequency: 161.63, note: "Lower Bayati" }
        // ];

        // console.log(arabicMusicScale);

        // const soundFrequencies = [
        // // 2760, 2567.98, 2396.91, 2318.51, 2174.66, 2046.5, 987.77, 880,
        // // 783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 440, 392, 149.23,
        // // 129.63, 193.66, 161.63, 130, 110, 100, 90
        // 1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880,
        // 783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 340, 292, 249.23,
        // 229.63, 193.66, 161.63
        // ]

        //         const indianRagaScales = {
        //     "Yaman": [
        //         440,    // Sa (A)
        //         493.88, // Re (B)
        //         554.37, // Ga (C#)
        //         659.25, // Ma (F#)
        //         739.99, // Pa (G)
        //         830.61, // Dha (A)
        //         987.77, // Ni (B)
        //         1046.5  // Sa (C#)
        //     ],
        //     "Bhairav": [
        //         440,    // Sa (A)
        //         466.16, // Komal Re (A#)
        //         554.37, // Ga (C#)
        //         587.33, // Ma (D)
        //         659.25, // Pa (E)
        //         698.46, // Komal Dha (F)
        //         830.61, // Komal Ni (G#)
        //         880     // Sa (A)
        //     ],
        //     "Todi": [
        //         440,    // Sa (A)
        //         466.16, // Komal Re (A#)
        //         554.37, // Komal Ga (C)
        //         622.25, // Teevra Ma (F)
        //         659.25, // Pa (E)
        //         739.99, // Komal Dha (G)
        //         830.61, // Komal Ni (G#)
        //         880     // Sa (A)
        //     ]
        // };

        // // console.log(indianRagaScales);

        // const westernTibetanMongolianScales = {
        // Phrygian Scale (Western - E)
        const Phrygian = [
          329.63, // E4
          349.23, // F4
          392.0, // G4
          440.0, // A4
          493.88, // B4
          523.25, // C5
          587.33, // D5
          622.25, // D#5/Eb5
          659.25, // E5
          698.46, // F5
          739.99, // F#5/Gb5
          783.99, // G5
          830.61, // G#5/Ab5
          880.0, // A5
          932.33, // A#5/Bb5
          987.77, // B5
          1046.5, // C6
          1108.73, // C#6/Db6
          1174.66, // D6
          1244.51, // D#6/Eb6
        ];

        // Tibetan Pentatonic Scale (C)
        // Tibetan: [
        //     261.63,   // C4
        //     293.66,   // D4
        //     349.23,   // F4
        //     392.00,   // G4
        //     440.00,   // A4
        // ],

        // // Mongolian Pentatonic Scale (C)
        const Mongolian = [
          329.63, // E4
          349.23, // F4 (Note not used in Mongolian pentatonic scale)
          392.0, // G4
          440.0, // A4
          493.88, // B4 (Note not used in Mongolian pentatonic scale)
          523.25, // C5
          587.33, // D5
          622.25, // D#5/Eb5 (Note not used in Mongolian pentatonic scale)
          659.25, // E5
          698.46, // F5 (Note not used in Mongolian pentatonic scale)
          739.99, // F#5/Gb5 (Note not used in Mongolian pentatonic scale)
          783.99, // G5
          830.61, // G#5/Ab5 (Note not used in Mongolian pentatonic scale)
          880.0, // A5
          932.33, // A#5/Bb5 (Note not used in Mongolian pentatonic scale)
          987.77, // B5 (Note not used in Mongolian pentatonic scale)
          1046.5, // C6
          1108.73, // C#6/Db6 (Note not used in Mongolian pentatonic scale)
          1174.66, // D6
          1244.51, // D#6/Eb6 (Note not used in Mongolian pentatonic scale)
        ];

        // console.log(westernTibetanMongolianScales);

        // const fullSpectrum = [
        //     27.50,  // A0
        //     29.14,  // A#0/Bb0
        //     30.87,  // B0
        //     32.70,  // C1
        //     34.65,  // C#1/Db1
        //     36.71,  // D1
        //     38.89,  // D#1/Eb1
        //     41.20,  // E1
        //     43.65,  // F1
        //     46.25,  // F#1/Gb1
        //     49.00,  // G1
        //     51.91,  // G#1/Ab1
        //     55.00,  // A1
        //     58.27,  // A#1/Bb1
        //     61.74,  // B1
        //     65.41,  // C2
        //     69.30,  // C#2/Db2
        //     73.42,  // D2
        //     77.78,  // D#2/Eb2
        //     82.41,  // E2
        //     87.31,  // F2
        //     92.50,  // F#2/Gb2
        //     98.00,  // G2
        //     103.83, // G#2/Ab2
        //     110.00, // A2
        //     116.54, // A#2/Bb2
        //     123.47, // B2
        //     130.81, // C3
        //     138.59, // C#3/Db3
        //     146.83, // D3
        //     155.56, // D#3/Eb3
        //     164.81, // E3
        //     174.61, // F3
        //     185.00, // F#3/Gb3
        //     196.00, // G3
        //     207.65, // G#3/Ab3
        //     220.00, // A3
        //     233.08, // A#3/Bb3
        //     246.94, // B3
        //     261.63, // C4
        //     277.18, // C#4/Db4
        //     293.66, // D4
        //     311.13, // D#4/Eb4
        //     329.63, // E4
        //     349.23, // F4
        //     369.99, // F#4/Gb4
        //     392.00, // G4
        //     415.30, // G#4/Ab4
        //     440.00, // A4
        //     466.16, // A#4/Bb4
        //     493.88, // B4
        //     523.25, // C5
        //     554.37, // C#5/Db5
        //     587.33, // D5
        //     622.25, // D#5/Eb5
        //     659.25, // E5
        //     698.46, // F5
        //     739.99, // F#5/Gb5
        //     783.99, // G5
        //     830.61, // G#5/Ab5
        //     880.00, // A5
        //     932.33, // A#5/Bb5
        //     987.77, // B5
        //     1046.50, // C6
        //     1108.73, // C#6/Db6
        //     1174.66, // D6
        //     1244.51, // D#6/Eb6
        //     1318.51, // E6
        //     1396.91, // F6
        //     1479.98, // F#6/Gb6
        //     1567.98, // G6
        //     1661.22, // G#6/Ab6
        //     1760.00, // A6
        //     1864.66, // A#6/Bb6
        //     1975.53, // B6
        //     2093.00, // C7
        //     2217.46, // C#7/Db7
        //     2349.32, // D7
        //     2489.02, // D#7/Eb7
        //     2637.02, // E7
        //     2793.83, // F7
        //     2959.96, // F#7/Gb7
        //     3135.96, // G7
        //     3322.44, // G#7/Ab7
        //     3520.00, // A7
        //     3729.31, // A#7/Bb7
        //     3951.07, // B7
        //     4186.01, // C8
        // ];

        // console.log(fullSpectrum);

        const indianRagaYamanMelody = [
          261.63, // C4 (Sa)
          293.66, // D4 (Re)
          329.63, // E4 (Ga)
          370.0, // F#4 (Ma)
          392.0, // G4 (Pa)
          440.0, // A4 (Dha)
          493.88, // B4 (Ni)
          523.25, // C5 (Sa')
          440.0, // A4 (Dha)
          392.0, // G4 (Pa)
          329.63, // E4 (Ga)
          293.66, // D4 (Re)
          261.63, // C4 (Sa)
          440.0, // A4 (Dha)
          493.88, // B4 (Ni)
          523.25, // C5 (Sa')
          587.33, // D5 (Re)
          659.25, // E5 (Ga)
          698.46, // F#5 (Ma)
          739.99, // G5 (Pa)

          // 261.63,   // C4 (Sa)
          // 293.66,   // D4 (Re)
          // 329.63,   // E4 (Ga)
          // 370.00,   // F#4 (Ma)
          // 392.00,   // G4 (Pa)
          // 440.00,   // A4 (Dha)
          // 493.88,   // B4 (Ni)
          // 523.25,   // C5 (Sa')
          // 440.00,   // A4 (Dha)
          // 392.00,   // G4 (Pa)
          // 329.63,   // E4 (Ga)
          // 293.66,   // D4 (Re)
          // 261.63,   // C4 (Sa)
          // 440.00,   // A4 (Dha)
          // 493.88,   // B4 (Ni)
          // 523.25,   // C5 (Sa')
          // 587.33,   // D5 (Re')
          // 659.25,   // E5 (Ga')
          // 698.46,   // F#5 (Ma')
          // 739.99,   // G5 (Pa')
        ];

        // console.log(indianRagaYamanMelody);

        const tracks = [];
        const balls = [];
        const N = 20;

        for (let i = 0; i < N; i++) {
          const trackRadius = trackMinRadius + i * trackStep;
          const ballSpeed = ballMinSpeed + i * ballSpeedStep;
          //   const ballSoundFrequency = Phrygian[i];
          //   const ballSoundFrequency = Mongolian[i];
          const ballSoundFrequency = mongolianMelody[i];
          //   const ballSoundFrequency = indianRagaYamanMelody[i];

          const hue = (i * 360) / N;
          const track = new Track(trackCenter, trackRadius, hue);
          const ball = new Ball(
            track,
            ballRadius,
            ballSpeed,
            ballSoundFrequency,
            // ballSoundFrequency2,

            hue
          );
          tracks.push(track);
          balls.push(ball);
        }

        const ctx = myCanvas.getContext("2d");
        // const track = new Track(trackCenter, trackRadius)
        // const ball = new Ball(track, ballRadius, ballSpeed)

        animate();
        function animate() {
          ctx.clearRect(0, 0, size, size);
          // track.draw(ctx)
          // ball.move()
          // ball.draw(ctx)
          tracks.forEach((track) => track.draw(ctx));
          balls.forEach((ball) => ball.move());
          balls.forEach((ball) => ball.draw(ctx));
          requestAnimationFrame(animate);
        }
        track.draw(ctx);
        ball.draw(ctx);
      </script>
    </canvas>
  </body>
</html>
```