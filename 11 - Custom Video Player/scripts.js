const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function handelToggle() {
    video[video.paused ? 'play' : 'pause']();
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skipBtnHandler() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeBtnHandler() {
    console.log(this);
    video[this.name] = this.value
}

function handelProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

toggle.addEventListener('click', handelToggle);
video.addEventListener('click', handelToggle);
video.addEventListener('timeupdate', handelProgress);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipBtnHandler));
ranges.forEach(rangeBtn => rangeBtn.addEventListener('change', rangeBtnHandler));
progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);