window.addEventListener('load', init, false);

function init() {
 
    var cusu = new Animal('Batido', 1, 2, 10, 'mediana', 10, 5, 5, 'ninguna', 'ninguno');
    cusu.comer();
    cusu.caminar();
    cusu.beber();
    /*
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    */
}