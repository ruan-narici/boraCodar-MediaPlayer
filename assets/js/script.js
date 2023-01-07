//alert('#boraCodar;\nDesafio 1;\nDesenvolvido por Ruan Narici.');

const btnPlay = document.querySelectorAll('.button-play');
const btnPause = document.querySelectorAll('.button-pause');
const music = document.querySelector('#play-music');
const progressBar1 = document.querySelector('.bar-play-1');
const progressBar2 = document.querySelector('.bar-play-2');
const timeNumber = document.querySelectorAll('.time-start-player');


let statusPlay = "?";

playMusic = () => {
    for (let contador = 0; contador < btnPlay.length; contador ++) {
        btnPlay[contador].addEventListener('click', () => {
            let contador = 0;
            while (contador < btnPlay.length) {
                btnPlay[contador].classList.add('hide');
                btnPause[contador].classList.remove('hide');
                contador++;
            }
            music.play();
            statusPlay = "play";
        })
    }
}

pauseMusic = () => {
    for (let contador = 0; contador < btnPlay.length; contador ++) {
        btnPause[contador].addEventListener('click', () => {
            let contador = 0;
            while (contador < btnPause.length) {
                btnPause[contador].classList.add('hide');
                btnPlay[contador].classList.remove('hide');
                contador++;
            }
            music.pause();
            statusPlay = "pause";
        })
    }
}

progressBar = () => {
    let timeMusic = Math.floor(music.currentTime);
    let time = 0;
    let time2 = 0;
    setInterval(moveBar = () => {
        if (statusPlay == "play" && 
            time <= 220 &&
            time2 <= 350) {
        time += timeMusic + 2;
        progressBar1.style.width = time + 'px';
        time2 += timeMusic + 3.24;
        progressBar2.style.width = time2 + 'px';
    }
    else {
        console.log('pause');
    }
    },1000)
}

showTimeNumber = () => {
    let timeMusic = music.currentTime;
    let time = 0;
    setInterval(modifyNumber = () => {
        if (statusPlay == "play" && 
            time <= 200) {
        time += timeMusic;
        for (contador = 0; contador < timeNumber.length; contador++) {
            timeNumber[contador].innerHTML = Math.floor(music.currentTime).toString().padStart(4, '0' + ':');
        }
        }
    },1000)
}


//EXECUTE
playMusic();
pauseMusic();
progressBar();
showTimeNumber();
