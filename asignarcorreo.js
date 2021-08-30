window.onload = asignarcorreo()


function asignarcorreo(){
    let pinCorreo = localStorage.getItem('Guardar');
    document.querySelector('.correo').innerHTML = `${pinCorreo}` ;
}