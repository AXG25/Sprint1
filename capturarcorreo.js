window.onload = btn()


function btn(){
    let btngoogle = document.querySelector('#btn')
    btngoogle.addEventListener('click',capturarcorreo)
    
}


function capturarcorreo(){
    let capCorreo = document.querySelector('.inp-correo').value
    localStorage.setItem('Guardar',(capCorreo));
    
}

function asignarcorreo(){
    let pinCorreo = document.querySelector('.correo').value;
    pinCorreo = localStorage.getItem('Guardar'); 
}
