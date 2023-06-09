let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

// handle play and pause
let video = document.getElementsByTagName('video')[0];
let play = document.getElementById('play');
play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        play.innerHTML = `Stop <i class="bi bi-pause-fill"></i>`
    } else {
        video.pause();
        play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`
    }
})


left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

let json_url = "movie.json";