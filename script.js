window.onload = btn()

function btn(){
    let btngoogle = document.querySelector('#btn0')
    btngoogle.addEventListener('click',capturarcorreo)
    data = []
}


function capturarcorreo(){
    let correo = document.querySelector('.inp-correo').value
    localStorage.setItem('.inp-correo')
}
