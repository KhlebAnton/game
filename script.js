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
const music = document.getElementById('music');
const soundCoin = document.getElementById('sound_coin');
const soundJump = document.getElementById('sound_jump');

function playMusic(){
    music.play()
}

function jump() {
    if(!player.classList.contains('jump')) {
        player.classList.add ("jump");
        soundJump.play();
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
function rand(min, max){
    return (max-min)*Math.random()+min
}
     

function goMenu() {
    location.reload()
}
function gameStart() {
    score.textContent = 0;
    menu.classList.add('hidden')
    
    player.classList.add('go');
    game.classList.add('animate_back')
    game.classList.remove('hidden')
    
    let goDangerInterval = setInterval(() => {
        goDangerLite();
    }, rand(2000,3000));
    let goCoinInterval = setInterval(() => {
        goCoin();
    }, rand(3000,10000))
    ;

    
    
    
    setInterval(() => {
        
       
        if(danger.offsetLeft <= (player.offsetWidth - 50) && danger.offsetLeft > 20 && player.offsetTop + player.offsetHeight > danger.offsetTop + 25)  {
            player.classList.remove('go');
            let answer = confirm('game over! Давай еще?');
            if (answer) {
                location.reload()
            } else {
                window.close()
            }
            
        }
        if(gift.offsetLeft <= (player.offsetWidth - 100) && gift.offsetLeft > 50 && player.offsetTop <= gift.offsetTop)  {
            soundCoin.play();
            score.textContent++;
            gift.classList.remove('go_coin')
            if(score.textContent == 2) {
                game_win.classList.remove('hidden');
                game.classList.add('hidden');
                
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