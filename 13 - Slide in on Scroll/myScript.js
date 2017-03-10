/**
 * Created by aharon on 3/10/17.
 */
const imgs = document.querySelectorAll('img');
document.addEventListener("scroll", function () {
    imgs.forEach(function (img) {
        if (0 < img.getBoundingClientRect().bottom && img.getBoundingClientRect().bottom < window.innerHeight) {
            img.classList.add('active');
        } else if (img.getBoundingClientRect().top > window.innerHeight ||
            (img.getBoundingClientRect().top + img.getBoundingClientRect().height) < 0) {
            img.classList.remove('active');
        }
    });
});

