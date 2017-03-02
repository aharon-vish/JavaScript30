let el = document;
let handler = (e)=> {
    const sound = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
    const div = document.querySelectorAll(`div[data-key="${e.keyCode}"]`)[0];
    switch (e.type){
        case 'keydown':
            div.classList.add('playing');
            sound[0].play();
            break;
        case 'keyup':
            div.classList.remove('playing');
            break;
    }
};

['keydown', 'keyup'].forEach(event => el.addEventListener(event, handler));