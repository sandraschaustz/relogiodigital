const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var data = new Date() ;
    var hr = data.getHours() ;
    var min = data.getMinutes() ;
    var seg = data.getSeconds() ;

    if (hr < 10) hr = `0` + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;

})