/**
 * Created by aharon on 3/10/17.
 */
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

let li;
let input;
let label;
let checked;

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
       checked = item.done;
       li = document.createElement("li");
       input = document.createElement("input");
       label = document.createElement("label");
       label.textContent = item.txt;
       li.appendChild(setAttributes(input,{'type':"checkbox", 'data-index':`${i}`, 'id':'item'+i ,'checked':checked }));
       li.appendChild(setAttributes(label,{'for':'item'+i,'textContent':"aharon"}));
       itemsList.appendChild(li);
   });
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        if (key == "checked" && attrs[key] == false) {
           continue;
        }
        el.setAttribute(key, attrs[key]);
    }
        return el;
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    addToList(items);
}

addToList(items);

addItems.addEventListener('submit', submitForm);
itemsList.addEventListener('click', toggleDone);
