const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function handelToggle(){
    video[video.paused ? 'play':'pause']();
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skipBtnHandler(){
    video.currentTime += parseFloat(this.dataset.skip);
}
//todo volume
function rangeBtnHandler(){
console.log(this);
    video.volume = parseFloat(this.value);
}
toggle.addEventListener('click',handelToggle);
video.addEventListener('click',handelToggle);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipBtnHandler));
ranges.forEach(rangeBtn => rangeBtn.addEventListener('change', rangeBtnHandler));