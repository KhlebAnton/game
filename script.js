document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
  document.body.style.height = window.innerHeight + 'px';
});



const player = document.getElementById('player');
const danger = document.getElementById('danger');
const gift = document.getElementById('gift');
const score = document.getElementById('score');
const menu = document.getElementById('game_menu');
const game_win = document.getElementById('game_win');
const game = document.getElementById('game');



function jump() {
    if(!player.classList.contains('jump')) {
        player.classList.add ("jump");
        setTimeout( function() {
            player.classList.remove ("jump")
        },800) 
    }
    
}



function goCoin(){
    if(!gift.classList.contains('go_coin')) {
        gift.classList.add ("go_coin");
        setTimeout( function() {
            gift.classList.remove ("go_coin")
        },2000) 
    }
}

function goDangerLite() {
    if(!danger.classList.contains('lite')) {
        danger.classList.add ("lite");
        setTimeout( function() {
            danger.classList.remove ("lite")
        },2000) 
    }
}


function gameStart() {
    menu.classList.add('hidden')
    player.classList.add('go');
    setInterval(() => {
        goDangerLite();
    }, 500);
    setInterval(() => {
        goCoin();
    }, 4210);

    
    
    
    setInterval(() => {

        if(danger.offsetLeft <= (player.offsetWidth - 50) && danger.offsetLeft > 20 && player.offsetTop > 120)  {
            
            alert('game over');
            location.reload()
        }
        if(gift.offsetLeft <= (player.offsetWidth - 100) && gift.offsetLeft > 50 && player.offsetTop < 120)  {
            
            score.textContent++;
            gift.classList.remove('go_coin')
            if(score.textContent == 2) {
                game_win.classList.remove('hidden')
                game.classList.add('hidden')
            }
            
        }
        
    }, 20);

    setTimeout(() => {
        document.addEventListener('keydown' ,() => {
            jump()
        }) 
        document.addEventListener('click' ,() => {
            jump();
        })  
    }, 500);
    
}