/**
 * Created by AharonVishinsky on 02/03/2017.
 */

const hour = document.querySelector('.hand.hour-hand');
const min = document.querySelector('.hand.min-hand');
const second = document.querySelector('.hand.second-hand');
const clock = document.querySelector('.clock');

setInterval(function(){
    var date = new Date();
    second.style.transform = `rotate(${(date.getSeconds()*6)+90}deg)`;
    min.style.transform = `rotate(${(date.getMinutes()*6)+90}deg)`;
    hour.style.transform = `rotate(${(date.getHours()*30)+90}deg)`;
    clock.style.display = 'block';

}.bind(this), 1000);
