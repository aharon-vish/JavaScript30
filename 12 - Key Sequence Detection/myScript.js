/**
 * Created by AharonVishinsky on 09/03/2017.
 */
const pressed = [];
const secretName = "aharon";
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.length === 6 &&
    pressed.join('').includes(secretName) ?
        alert('fuck me') : pressed.length === 6 ? pressed.splice(0, pressed.length): null;
    console.log(pressed);
});