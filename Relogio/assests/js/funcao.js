const ho = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

const relogio = setInterval (function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
 
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    ho.textContent = hr;
    min.textContent = min;
    seg.textContent = s;
})