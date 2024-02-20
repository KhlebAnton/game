document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
  document.body.style.height = window.innerHeight + 'px';
});



const player = document.getElementById('player');
const danger = document.getElementById('danger');

document.addEventListener('keydown' ,() => {
    jump()
}) 
document.addEventListener('click' ,() => {
    jump();
    console.log(parseInt(player.offsetTop))
}) 

function jump() {
    if(player.classList.contains != 'jump') {
        player.classList.add ("jump")
    }
    setTimeout( function() {
        player.classList.remove ("jump")
    },800) 
}

setInterval(() => {

    if(danger.offsetLeft <= (player.offsetWidth - 50) && danger.offsetLeft > 20 && player.offsetTop > 120)  {
        
        alert('game over');
        location.reload()
    }
}, 20);