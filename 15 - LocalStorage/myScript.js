/**
 * Created by aharon on 3/10/17.
 */
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

let li ;
let input ;
let label ;

function submitForm(e) {
    e.preventDefault();
    const txt = this.querySelector('[name=item]').value;
    const item = {
        txt,
        done: false
    };
    items.push(item);
    addToList(items);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function addToList(items = []) {
    itemsList.innerHTML = '';
   items.forEach((item,i) => {
       console.log(i);
       li = document.createElement("li");
       input = document.createElement("input");
       label = document.createElement("label");
       label.textContent = item.txt;
       li.appendChild(setAttributes(input,{'type':"checkbox", 'data-index':`${i}`, 'id':'item'+i}));
       li.appendChild(setAttributes(label,{'for':'item'+i,'textContent':"aharon"}));
       itemsList.appendChild(li);
   });
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    return el;
}

function toggleDone(e) {
debugger;
}

addItems.addEventListener('submit',submitForm);
itemsList.addEventListener('click', toggleDone);
