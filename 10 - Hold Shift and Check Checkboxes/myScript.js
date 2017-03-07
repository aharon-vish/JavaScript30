/**
 * Created by AharonVishinsky on 07/03/2017.
 */
const checkboxes = document.querySelectorAll('[type="checkbox"]');
let shiftKey = false;
let start;
let end;
let countClick = 0;
function changeHandler(e) {
    if (shiftKey) {
        countClick++;
        if (countClick == 2) {
            if (start > [].indexOf.call(checkboxes, e.currentTarget)) {
                end = start;
                start = [].indexOf.call(checkboxes, e.currentTarget);
            }else{
                end = [].indexOf.call(checkboxes, e.currentTarget);
            }
            for (var i = start; i < end; i++) {
                checkboxes[i].checked = true;
            }
            countClick = 0;
            return;
        }
        start = [].indexOf.call(checkboxes, e.currentTarget);
    }
}

function keyHandler(e) {
    shiftKey = e.key == 'Shift' && e.type == 'keydown' ? true : false;
    console.log(shiftKey);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', changeHandler));
document.addEventListener("keydown", keyHandler);
document.addEventListener("keyup", keyHandler);
