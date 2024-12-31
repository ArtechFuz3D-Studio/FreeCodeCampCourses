const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//  let gradient = ctx.createLinearGradient(0,canvas.width, canvas.height,0) // remove let inside this function, at the top level use let
let gradient = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 100, canvas.width * 0.5, canvas.height*0.5, canvas.width * 0.5)
// gradient.addColorStop(0, 'red')
// gradient.addColorStop(0.2, 'yellow')
// gradient.addColorStop(0.4, 'green')
// gradient.addColorStop(0.6, 'cyan')
// gradient.addColorStop(0.8, 'blue')
// gradient.addColorStop(1, 'magenta')
gradient.addColorStop(0, '#013300');        // Deep black background, mimicking the void.
gradient.addColorStop(0.2, '#003300');   // Dark green, representing the base tone.
gradient.addColorStop(0.4, '#006600');   // Rich green, for the primary glow effect.
gradient.addColorStop(0.6, '#00cc00');   // Bright neon green, mimicking the glowing Matrix code.
gradient.addColorStop(0.8, '#003300');   // Lighter green, hinting at highlights or fading elements.
gradient.addColorStop(1, '#00ffff');  

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    // this.characters = 'ᚨ ᛚ ᛚ ᚨᛁ  ᛗ ᚨ ᚾ ᚾ ᚨ ᚠ ᚱ ᛖ ᛁ ᚺ ᚨ ᛚᛋ ᛃ ᚨ ᚺ ᛋ ᚨ ᛗ ᚨ ᛚ ᛖ ᛁ ᚲ ᛟ ᛁ ᚾ ᚹ ᚨ ᛁ ᚱ ᚦ ᛁ ᛞ ᚨ ᛁ ᛃ ᚨ ᚺ ᚱ ᚨ ᛁ ᚺ ᛏ ᛖ ᛁ ᛋ ᚹ ᚨ ᚢ ᚱ ᚦ ᚨ ᚾ ᛋ . ᚠ ᚱ ᚨ ᚦ ᛖ ᛁ ᛃ ᚨ ᚺ ᛗ ᛁ ᚦ ᚹ ᛁ ᛋ ᛋ ᛖ ᛁ ᚷ ᛁ ᛒ ᚾ ᚨ ᚾ ᛋ ᛃ ᚨ ᚺ ᛚ ᛁ ᛒ ᚨ ᚾ ᛞ ᚨ ᚢ ᛋ ᚹ ᛇ ᛒ ᚱ ᛟ ᚦ ᚱ ᛃ ᚢ ᛋ ⰲ ⱐ ⱄ ⰻ ⰱ ⱁ ⰾ ⱓ ⰴ ⰻ ⰵ ⱃ ⱁ ⰴ ⱔ ⱅ ⱏ ⱄ ⱔ ⱄ ⰲ ⱁ ⰱ ⱁ ⰴ ⱐ ⱀ ⰻ ⰻ ⱃ ⰰ ⰲ ⱐ ⱀ ⰻ ⰲ ⱏ ⰴ ⱁ ⱄ ⱅ ⱁ ⰻ ⱀ ⱐ ⱄ ⱅ ⰲ ⱑ ⰻ ⰸ ⰰ ⰽ ⱁ ⱀ ⱑ ·'
    this.characters =
      "ᚨᛚᛚᚨᛁᛗᚨᚾᚾᚨᚠᚱᛖᛁᚺᚨᛚᛋᛃᚨᚺᛋᚨᛗᚨᛚᛖᛁᚲᛟᛁᚾᚹᚨᛁᚱᚦᛁᛞᚨᛁᛃᚨᚺᚱᚨᛁᚺᛏᛖᛁᛋᚹᚨᚢᚱᚦᚨᚾᛋ.ᚠᚱᚨᚦᛖᛁᛃᚨᚺᛗᛁᚦᚹᛁᛋᛋᛖᛁᚷᛁᛒᚾᚨᚾᛋᛃᚨᚺᛚᛁᛒᚨᚾᛞᚨᚢᛋᚹᛇᛒᚱᛟᚦᚱᛃᚢᛋⰲⱐⱄⰻⰱⱁⰾⱓⰴⰻⰵⱃⱁⰴⱔⱅⱏⱄⱔⱄⰲⱁⰱⱁⰴⱐⱀⰻⰻⱃⰰⰲⱐⱀⰻⰲⱏⰴⱁⱄⱅⱁⰻⱀⱐⱄⱅⰲⱑⰻⰸⰰⰽⱁⱀⱑ·";

    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );

    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.975) {
      this.y = 0;
      
    } else {
      this.y += 1;
      
    }
    
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialise();
    // console.log(this.symbols)
  }
  #initialise() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialise();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 16;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
    // ctx.clearRect(0,0, canvas.width, canvas.height)

  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {

    ctx.fillStyle = "rgba(10,10, 0, 0.05)";
    ctx.textAlign = "center";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = gradient;
    ctx.font = effect.fontSize + "px monospace";
    effect.symbols.forEach((symbol) => symbol.draw(ctx));
    timer = 0;
  } else {
    timer += deltaTime;

  }

  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
//   gradient = ctx.createLinearGradient(0,canvas.width, canvas.height,0) // remove let inside this function, at the top level use let
gradient = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 100, canvas.width * 0.5, canvas.height*0.5, canvas.width * 0.5)
// gradient.addColorStop(0, 'red')
// gradient.addColorStop(0.2, 'yellow')
// gradient.addColorStop(0.4, 'green')
// gradient.addColorStop(0.6, 'cyan')
// gradient.addColorStop(0.8, 'blue')
// gradient.addColorStop(1, 'magenta')
gradient.addColorStop(0, '#101000');        // Deep black background, mimicking the void.
gradient.addColorStop(0.2, '#003300');   // Dark green, representing the base tone.
gradient.addColorStop(0.4, '#006600');   // Rich green, for the primary glow effect.
gradient.addColorStop(0.6, '#00cc00');   // Bright neon green, mimicking the glowing Matrix code.
gradient.addColorStop(0.8, '#003300');   // Lighter green, hinting at highlights or fading elements.
gradient.addColorStop(1, '#00ffff');     // Cyan for a subtle futuristic accent.

});
