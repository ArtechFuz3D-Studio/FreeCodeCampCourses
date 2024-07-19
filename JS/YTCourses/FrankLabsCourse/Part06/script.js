document.getElementById('hamburger').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('open');
});

document.addEventListener('load', function(e){
    const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 800


// Main game class, handles all game update and draw calls
class Game {
    constructor(){
        this.enemies = []
    }
    update(){

    }
    draw(){

    }
    #addNewEnemy(){

    }
}

// enemy class, handles all enemy movement, sounds, size etc and update & draw calls
class Enemy {
    constructor(){

    }
    update(){

    }
    draw(){}
}

// Animation loop
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //  requestAnimationFrame(animate) this creates the loop. animate^ will run its code, then call itself again
    requestAnimationFrame(animate)
}
})