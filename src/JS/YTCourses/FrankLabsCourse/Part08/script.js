import InputHandler from "./input";
import {drawStatusText} from "./utils"
import Player from "./player";

window.addEventListener("load", function () {
  const loading = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height)
  // console.log(player)

  const input = new InputHandler()

  function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    // console.log(input.lastKey)
    player.update(input.lastKey)
    player.draw(ctx)
    drawStatusText(ctx, input, player)
    requestAnimationFrame(animate)
  }
  animate()
});
