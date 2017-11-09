window.addEventListener('load', init, false);

function init() {

    //var cusu = new Animal('Batido', 1, 2, 10, 'mediana', 10, 5, 5, 'ninguna', 'ninguno');
    //cusu.comer();
    //cusu.caminar();
    //cusu.beber();

    var animals = [];

    var cusu = new Gato('Batido', 1, 2, 10, 'mediana', 4, 2, 2, 'ninguna', 'ninguno');
    cusu.color = 'gray';
    animals.push(cusu);

    var coco = new Perro('Lucas', 1, 2, 10, 'mediano', 4, 2, 2, 'ninguna', 'ninguno');
    coco.color = 'white';
    animals.push(coco);

    var bojack = new Caballo('BoJack', 1, 2, 10, 'grande', 10, 5, 5, 'ninguna', 'ninguno');
    bojack.color = 'brown';
    animals.push(bojack);

    var marinette = new Gallina('Marinette', 1, 2, 10, 'pequeña', 2, 1, 1, 1, 'huevo');
    marinette.color = 'white';
    animals.push(marinette);

    var adrien = new Gallina('Adrien', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    adrien.color = 'white';
    animals.push(adrien);

    var donald = new Pato('Donald', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    donald.color = 'white';
    animals.push(donald);

    var daisy = new Pato('Daisy', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    daisy.color = 'white';
    animals.push(daisy);

    var waddles = new Cerdo('Waddles', 1, 2, 10, 'mediano', 4, 2, 2, 3, 'tocino');
    waddles.color = 'pink';
    animals.push(waddles);

    var millie = new Vaca('Millie', 1, 2, 10, 'grande', 10, 5, 5, 5, 'leche');
    millie.color = 'brown';
    animals.push(millie);

    var inventario = new Granero(10, 20, 30, 40, 50, 60, 70);

    var farmContainer = document.getElementById('farmContainer');

    var datosInventario = inventario.reportarInventario();

    var datosGranja = document.createAttribute('p');
    datosGranja.innerHTML = datosInventario;

    //farmContainer.appendChild(datosGranja);
   

    var animalsContainer = document.getElementById('animalsContainer');

    for (var i = 0; i < animals.length; i++) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = animals[i].nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h5');
        title.innerHTML = animals[i].nombre;
        title.classList.add('nombreAnimal');
        animal.appendChild(title);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function onAnimalCardClick(event) {
        console.log(event);
        var animal = getAnimalByName(event.target.id);
        console.log(animal);
        // event.target.style.background = animal.color;
        var animalContainer = document.getElementById('animalContainer');
        //var datosAnimal = document.createElement('p');
        var datosAnimal = document.getElementById('datosAnimal');
        datosAnimal.style.fontFamily = 'verdana';
        datosAnimal.style.color = 'white';
        datosAnimal.style.padding = '20px';
        datosAnimal.style.lineHeight = '25px';
        datosAnimal.innerHTML = '<strong>Nombre: </strong>' + animal.nombre + '<br>' + '<strong>Edad: </strong>' + animal.edad + '<br>' + '<strong>Altura: </strong>' + animal.altura + '<br>' + '<strong>Peso: </strong>' + animal.peso + '<br>' + '<strong>Tamaño: </strong>' + animal.tamanno + '<br>' + '<strong>Capacidad Estómago: </strong>' + animal.capacidadEstomago + '<br>' + '<strong>Capacidad Consumo de Agua: </strong>' + animal.capacidadConsumoAgua + '<br>' + '<strong>Capacidad Consumo de Alimento: </strong>' + animal.capacidadConsumoAlimento + '<br>' + '<strong>Capacidad de Producción: </strong>' + animal.capacidadProduccion + '<br>' + '<strong>Tipo de Producción: </strong>' + animal.tipoDeProduccion;
        animalContainer.appendChild(datosAnimal);



        
    }

    function getAnimalByName(nombre) {
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === nombre) {
                return animals[i];
            }
        }
        return null;
    }

}
