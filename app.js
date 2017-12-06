window.addEventListener('load', init, false);

function init() {

    var currentAnimal = null;
    var animals = [];
    var tarjetasAnimales = [];

    function fetchJSONFile(path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    if (callback) callback(data);
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
    }

    // this requests the file and executes a callback with the parsed result once
    //   it is available
    fetchJSONFile('./js/animales.json', function (data) {
        // do something with your data
        console.log(data);
        var objetoAnimal = data.animales;
        crearAnimales(objetoAnimal);
    });

    function crearAnimales(objetoAnimal) {
        for (var i = 0; i < objetoAnimal.length; i++) {
            switch (objetoAnimal[i].tipo) {
                case "vaca":
                    var nuevoAnimal = new Vaca(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, 50, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    console.log(nuevoAnimal);
                    break;
                case "gallina":
                    var nuevoAnimal = new Gallina(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, 50, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    break;
                case "pato":
                    var nuevoAnimal = new Pato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, 50, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    break;
                case "cerdo":
                    var nuevoAnimal = new Cerdo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, 50, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    break;
                case "caballo":
                    var nuevoAnimal = new Caballo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    break;
                case "perro":
                    var nuevoAnimal = new Perro(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, onAnimalCardClick);
                    animals.push(nuevoAnimal);
                    break;
                case "gato":
                    var nuevoAnimal = new Gato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadConsumoAlimento, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, onAnimalCardClick);
                    animals.push(nuevoAnimal);
            }
        }
    }


    /*     var cusu = new Gato('Batido', 1, 2, 10, 'mediana', 4, 2, 2, 'ninguna', 'ninguno', onAnimalCardClick);
        animals.push(cusu);

        var coco = new Perro('Lucas', 1, 2, 10, 'mediano', 4, 2, 2, 'ninguna', 'ninguno', onAnimalCardClick);
        coco.color = 'white';
        coco.tipo = 'perro';
        animals.push(coco);

        var jotaro = new Caballo('Jotaro', 1, 2, 10, 'grande', 10, 5, 5, 'ninguna', 'ninguno', onAnimalCardClick);
        jotaro.color = 'brown';
        jotaro.tipo = 'caballo';
        animals.push(jotaro);

        var marinette = new Gallina('Marinette', 1, 2, 10, 'pequenna', 2, 1, 1, 20, 'huevo', 50, onAnimalCardClick);
        marinette.color = 'white';
        animals.push(marinette);
        marinette.tipo = 'gallina';

        var adrien = new Gallina('Adrien', 1, 2, 10, 'pequenna', 2, 1, 1, 20, 'huevo', 100, onAnimalCardClick);
        adrien.color = 'white';
        animals.push(adrien);
        adrien.tipo = 'gallina';

        var donald = new Pato('Donald', 1, 2, 10, 'pequenno', 2, 1, 1, 20, 'huevo', 50, onAnimalCardClick);
        donald.color = 'white';
        animals.push(donald);
        donald.tipo = 'pato';

        var daisy = new Pato('Daisy', 1, 2, 10, 'pequenno', 2, 1, 1, 20, 'huevo', 50, onAnimalCardClick);
        daisy.color = 'white';
        animals.push(daisy);
        daisy.tipo = 'pato';

        var waddles = new Cerdo('Waddles', 1, 2, 10, 'mediano', 4, 2, 2, 30, 'tocino', 50, onAnimalCardClick);
        waddles.color = 'pink';
        animals.push(waddles);
        waddles.tipo = 'cerdo';

        var millie = new Vaca('Millie', 1, 2, 10, 'grande', 10, 5, 5, 50, 'leche', 90, onAnimalCardClick);
        millie.color = 'brown';
        animals.push(millie);
        millie.tipo = 'vaca'; */

    var inventario = new Granero(5000, 10, 20, 3000, 40, 50, 6000, 70);

    //generarTarjetas();
    generarBotones();
    mostrarDatosGranja();
    //document.getElementById('popupComprarVaca').classList.add('hidden');

    document.getElementById('comprarVaca').addEventListener('click', formularioVaca);
    document.getElementById('comprarGallina').addEventListener('click', formularioGallina);
    document.getElementById('comprarCerdo').addEventListener('click', formularioCerdo);
    document.getElementById('venderHuevos').addEventListener('click', formularioHuevos);
    document.getElementById('venderLeche').addEventListener('click', formularioLeche);
    document.getElementById('venderTocino').addEventListener('click', formularioTocino);
    document.getElementById('comprarAlimento').addEventListener('click', formularioAlimento);
    document.getElementById('comprarPasto').addEventListener('click', formularioPasto);
    document.getElementById('comprarMaiz').addEventListener('click', formularioMaiz);
    document.getElementById('botonBeber').addEventListener('click', beber);
    document.getElementById('botonComer').addEventListener('click', comer);
    document.getElementById('botonAcariciar').addEventListener('click', acariciar);


    function mostrarDatosGranja() {
        var farmContainer = document.getElementById('farmContainer');
        var datosGranja = document.getElementById('datosGranja');
        datosGranja.innerHTML = inventario.reportarInventario();
        datosGranja.classList.add('styleDatos');
        farmContainer.appendChild(datosGranja);
    }

    function generarBotones() {
        var botonComprar = document.getElementById('botonComprar');
        botonComprar.type = 'button';
        botonComprar.value = 'Comprar';
        botonComprar.id = 'botonComprar';
        botonComprar.classList.add('compraVenta');
        botonComprar.addEventListener('click', mostrarCompras);

        var botonVender = document.getElementById('botonVender');
        botonVender.type = 'button';
        botonVender.value = 'Vender';
        botonVender.id = 'botonComprar';
        botonVender.classList.add('compraVenta');
        botonVender.addEventListener('click', mostrarVentas);

        farmContainer.appendChild(botonComprar);
        farmContainer.appendChild(botonVender);
    }

    function mostrarCompras() {
        document.getElementById('popupVender').classList.add('hidden');
        document.getElementById('popupComprar').classList.remove('hidden');
    }

    function mostrarVentas() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupVender').classList.remove('hidden');
        document.getElementById('popupFormularioVentaHuevos').classList.add('hidden');
        document.getElementById('popupFormularioVentaLeche').classList.add('hidden');
        document.getElementById('popupFormularioVentaTocino').classList.add('hidden');
    }

    function generarTarjetas() {
        var animalsContainer = document.getElementById('animalsContainer');

        for (var i = 0; i < animals.length; i++) {

            var animal = document.createElement('div');
            animalsContainer.appendChild(animal);
            animal.id = animals[i].nombre;
            animal.classList.add('animalCardContainer');

            var title = document.createElement('h5');
            title.id = 'title';
            title.innerHTML = animals[i].nombre + '<br>' + 'Felicidad: ' + animals[i].felicidad + '<br>' + 'Cantidad de Producto: ' + animals[i].cantidadDeProducto + '<br>' + 'Apetito: ' + animals[i].apetito;
            title.style.textAlign = 'center';
            title.style.display = 'block';
            title.classList.add('nombreAnimal');
            animal.appendChild(title);


            switch (animals[i].tipo) {
                case 'gato':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/cat.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'perro':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/dog.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'vaca':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/cow.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'gallina':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/hen.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'pato':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/duck.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'cerdo':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/pig.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

                case 'caballo':
                    var foto = document.createElement("img");
                    foto.setAttribute("src", "../img/horse.svg");
                    foto.classList.add('svg');
                    animal.appendChild(foto);
                    break;

            }

            animal.addEventListener('click', onAnimalCardClick, false);
            tarjetasAnimales.push(title);
        }
    }

    function updateAnimalContainer() {
        var animalContainer = document.getElementById('animalContainer');
        var datosAnimal = document.getElementById('datosAnimal');
        datosAnimal.style.fontFamily = 'verdana';
        datosAnimal.style.color = 'black';
        datosAnimal.style.padding = '20px';
        datosAnimal.style.lineHeight = '25px';
        datosAnimal.innerHTML = '<strong>Nombre: </strong>' +
            currentAnimal.nombre + '<br>' + '<strong>Edad: </strong>' +
            currentAnimal.edad + '<br>' + '<strong>Altura: </strong>' +
            currentAnimal.altura + '<br>' + '<strong>Peso: </strong>' +
            currentAnimal.peso + '<br>' + '<strong>Tamaño: </strong>' +
            currentAnimal.tamanno + '<br>' + '<strong>Capacidad Estómago: </strong>' +
            currentAnimal.capacidadEstomago + '<br>' + '<strong>Capacidad Consumo de Agua: </strong>' +
            currentAnimal.capacidadConsumoAgua + '<br>' + '<strong>Capacidad Consumo de Alimento: </strong>' +
            currentAnimal.capacidadConsumoAlimento + '<br>' + '<strong>Capacidad de Producción: </strong>' +
            currentAnimal.capacidadProduccion + '<br>' + '<strong>Tipo de Producción: </strong>' +
            currentAnimal.tipoDeProduccion + '<br>' + '<strong>Cantidad de producto: </strong>' +
            currentAnimal.cantidadDeProducto;

        animalContainer.appendChild(datosAnimal);
        generarBotonesAnimales();
    }

    function onAnimalCardClick(event) {

        currentAnimal = getAnimalByName(event.target);

        if (currentAnimal !== null) {
            updateAnimalContainer();
        }
    }

    function generarBotonesAnimales() {
        var botonProducir = document.getElementById('botonProducir');
        document.getElementById('botonProducir').addEventListener('click', recogerProducto);
        botonProducir.classList.remove('hidden');
        botonProducir.value = 'Recoger los productos';
        botonProducir.id = 'botonProducir';
        botonProducir.classList.add('compraVenta');
        botonProducir.style.width = '180px';
        botonProducir.style.textAlign = 'center';

        var botonBeber = document.getElementById('botonBeber');
        botonBeber.classList.remove('hidden');
        botonBeber.value = 'Dar de beber a los animales';
        botonBeber.id = 'botonBeber';
        botonBeber.classList.add('compraVenta');
        botonBeber.style.width = '180px';
        botonBeber.style.textAlign = 'center';

        var botonComer = document.getElementById('botonComer');
        botonComer.classList.remove('hidden');
        botonComer.value = 'Dar de comer a los animales';
        botonComer.id = 'botonComer';
        botonComer.classList.add('compraVenta');
        botonComer.style.width = '180px';
        botonComer.style.textAlign = 'center';

        var botonAcariciar = document.getElementById('botonAcariciar');
        botonAcariciar.classList.remove('hidden');
        botonAcariciar.value = 'Acariciar a los animales';
        botonAcariciar.id = 'botonAcariciar';
        botonAcariciar.classList.add('compraVenta');
        botonAcariciar.style.width = '180px';
        botonAcariciar.style.textAlign = 'center';

        animalContainer.appendChild(botonProducir);
        animalContainer.appendChild(botonBeber);
        animalContainer.appendChild(botonComer);
        animalContainer.appendChild(botonAcariciar);
    }

    function getAnimalByName(target) {

        var animal = null;

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === target.id) {
                animal = animals[i];
            }
        }

        if (animal === null && target.parentElement !== null) {
            return getAnimalByName(target.parentElement);
        } else if (animal !== null) {
            return animal;
        } else {
            return null;
        }
    }

    function formularioVaca() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioVaca').classList.remove('hidden');
        var inputsFormulario = [];
        inputsFormulario[0] = document.getElementById('nombreVaca');
        inputsFormulario[0].placeholder = 'Nombre del animal';
        inputsFormulario[0].type = 'text';
        inputsFormulario[0].style.width = '220px';
        inputsFormulario[0].style.marginTop = '10px';
        inputsFormulario[0].style.marginLeft = '15px';
        inputsFormulario[0].style.padding = '5px';


        var botonComprarVaca = document.getElementById('botonComprarVaca');
        botonComprarVaca.type = 'button';
        botonComprarVaca.value = 'Comprar Animal';
        botonComprarVaca.classList.add('compraVenta');
        botonComprarVaca.classList.remove('hidden');
        botonComprarVaca.style.paddingRight = '107px';
        botonComprarVaca.addEventListener('click', comprarVaca);
    }

    function formularioGallina() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioGallina').classList.remove('hidden');
        var inputsFormulario = [];
        inputsFormulario[0] = document.getElementById('nombreGallina');
        inputsFormulario[0].placeholder = 'Nombre del animal';
        inputsFormulario[0].type = 'text';
        inputsFormulario[0].style.width = '220px';
        inputsFormulario[0].style.marginTop = '10px';
        inputsFormulario[0].style.marginLeft = '15px';
        inputsFormulario[0].style.padding = '5px';

        var botonComprarGallina = document.getElementById('botonComprarGallina');
        botonComprarGallina.type = 'button';
        botonComprarGallina.value = 'Comprar Animal';
        botonComprarGallina.classList.add('compraVenta');
        botonComprarGallina.style.paddingRight = '107px';
        botonComprarGallina.addEventListener('click', comprarGallina);
    }

    function formularioCerdo() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioCerdo').classList.remove('hidden');
        var inputsFormulario = [];
        inputsFormulario[0] = document.getElementById('nombreCerdo');
        inputsFormulario[0].placeholder = 'Nombre del animal';
        inputsFormulario[0].type = 'text';
        inputsFormulario[0].style.width = '220px';
        inputsFormulario[0].style.marginTop = '10px';
        inputsFormulario[0].style.marginLeft = '15px';
        inputsFormulario[0].style.padding = '5px';

        var botonComprarCerdo = document.getElementById('botonComprarCerdo');
        botonComprarCerdo.type = 'button';
        botonComprarCerdo.value = 'Comprar Animal';
        botonComprarCerdo.classList.add('compraVenta');
        botonComprarCerdo.classList.remove('hidden');
        botonComprarCerdo.style.paddingRight = '107px';
        botonComprarCerdo.addEventListener('click', comprarCerdo);
    }

    function comprarVaca() {
        document.getElementById('popupFormularioVaca').classList.add('hidden');
        if (inventario.cantidadDinero >= 500) {
            var datosFormulario = [];
            var nombre = document.getElementById('nombreVaca').value;
            var edad = randomInt(5, 10);
            var altura = randomInt(5, 10);
            var peso = randomInt(100, 200);
            var tamanno = 'grande';
            var estomago = randomInt(5, 10);
            var agua = randomInt(5, 10);
            var alimento = randomInt(5, 10);
            var produccion = 30;
            var tipoProduccion = 'leche';
            var felicidad = 80;

            var vacaComprada = new Vaca(nombre, edad, altura, peso, tamanno, estomago, agua, alimento, produccion, tipoProduccion, felicidad, onAnimalCardClick);
            animals.push(vacaComprada);
            vacaComprada.updateCards();

            inventario.cantidadDinero = inventario.cantidadDinero - 500;

            mostrarDatosGranja();
        } else {
            alert('dont');
        }
    }

    function comprarGallina() {
        document.getElementById('popupFormularioGallina').classList.add('hidden');
        if (inventario.cantidadDinero >= 500) {
            var datosFormulario = [];
            var nombre = document.getElementById('nombreGallina').value;
            var edad = randomInt(5, 10);
            var altura = randomInt(5, 10);
            var peso = randomInt(100, 200);
            var tamanno = 'pequenna';
            var estomago = randomInt(5, 10);
            var agua = randomInt(5, 10);
            var alimento = randomInt(5, 10);
            var produccion = 30;
            var tipoProduccion = 'huevos';
            var felicidad = 80;

            var gallinaComprada = new Gallina(nombre, edad, altura, peso, tamanno, estomago, agua, alimento, produccion, tipoProduccion, felicidad, onAnimalCardClick);
            animals.push(gallinaComprada);
            gallinaComprada.updateCards();

            inventario.cantidadDinero = inventario.cantidadDinero - 500;

            mostrarDatosGranja();
        } else {
            alert('dont');
        }
    }

    function comprarCerdo() {
        document.getElementById('popupFormularioCerdo').classList.add('hidden');
        if (inventario.cantidadDinero >= 500) {
            var datosFormulario = [];
            var nombre = document.getElementById('nombreCerdo').value;
            var edad = randomInt(5, 10);
            var altura = randomInt(5, 10);
            var peso = randomInt(100, 200);
            var tamanno = 'mediano';
            var estomago = randomInt(5, 10);
            var agua = randomInt(5, 10);
            var alimento = randomInt(5, 10);
            var produccion = 30;
            var tipoProduccion = 'tocino';
            var felicidad = 80;

            var cerdoComprada = new Cerdo(nombre, edad, altura, peso, tamanno, estomago, agua, alimento, produccion, tipoProduccion, felicidad, onAnimalCardClick);
            animals.push(cerdoComprada);
            cerdoComprada.updateCards();

            inventario.cantidadDinero = inventario.cantidadDinero - 500;

            mostrarDatosGranja();
        } else {
            alert('dont');
        }
    }

    function formularioAlimento() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioCompraAlimento').classList.remove('hidden');
        document.getElementById('alimentoParaComprar').type = 'number';
        document.getElementById('alimentoParaComprar').style.width = '100px';
        document.getElementById('alimentoParaComprar').style.marginTop = '10px';
        document.getElementById('alimentoParaComprar').style.marginLeft = '15px';
        document.getElementById('alimentoParaComprar').style.padding = '5px';
        document.getElementById('comprarElAlimento').addEventListener('click', comprarAlimento);

    }

    function comprarAlimento() {
        var cantAComprar = Number(document.getElementById('alimentoParaComprar').value);
        if (inventario.cantidadDinero > 5) {
            inventario.cantidadAlimento = inventario.cantidadAlimento + cantAComprar;
            inventario.cantidadDinero = inventario.cantidadDinero - (cantAComprar * 5);
            mostrarDatosGranja();
            document.getElementById('popupVender').classList.add('hidden');
            document.getElementById('popupFormularioCompraAlimento').reset();
            document.getElementById('popupFormularioCompraAlimento').classList.add('hidden');
        }
    }

    function formularioPasto() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioCompraPasto').classList.remove('hidden');
        document.getElementById('pastoParaComprar').type = 'number';
        document.getElementById('pastoParaComprar').style.width = '100px';
        document.getElementById('pastoParaComprar').style.marginTop = '10px';
        document.getElementById('pastoParaComprar').style.marginLeft = '15px';
        document.getElementById('pastoParaComprar').style.padding = '5px';
        document.getElementById('comprarElPasto').addEventListener('click', comprarPasto);

    }

    function comprarPasto() {
        var cantAComprar = Number(document.getElementById('pastoParaComprar').value);
        if (inventario.cantidadDinero > 5) {
            inventario.cantidadPasto = inventario.cantidadPasto + cantAComprar;
            inventario.cantidadDinero = inventario.cantidadDinero - (cantAComprar * 5);
            mostrarDatosGranja();
            document.getElementById('popupVender').classList.add('hidden');
            document.getElementById('popupFormularioCompraPasto').reset();
            document.getElementById('popupFormularioCompraPasto').classList.add('hidden');
        }
    }

    function formularioMaiz() {
        document.getElementById('popupComprar').classList.add('hidden');
        document.getElementById('popupFormularioCompraMaiz').classList.remove('hidden');
        document.getElementById('maizParaComprar').type = 'number';
        document.getElementById('maizParaComprar').style.width = '100px';
        document.getElementById('maizParaComprar').style.marginTop = '10px';
        document.getElementById('maizParaComprar').style.marginLeft = '15px';
        document.getElementById('maizParaComprar').style.padding = '5px';
        document.getElementById('comprarElMaiz').addEventListener('click', comprarMaiz);

    }

    function comprarMaiz() {
        var cantAComprar = Number(document.getElementById('maizParaComprar').value);
        if (inventario.cantidadDinero > 5) {
            inventario.cantidadMaiz = inventario.cantidadMaiz + cantAComprar;
            inventario.cantidadDinero = inventario.cantidadDinero - (cantAComprar * 5);
            mostrarDatosGranja();
            document.getElementById('popupVender').classList.add('hidden');
            document.getElementById('popupFormularioCompraMaiz').reset();
            document.getElementById('popupFormularioCompraMaiz').classList.add('hidden');
        }
    }

    function formularioHuevos() {
        document.getElementById('venderHuevos').classList.add('hidden');
        document.getElementById('venderLeche').classList.add('hidden');
        document.getElementById('venderTocino').classList.add('hidden');
        document.getElementById('popupFormularioVentaHuevos').classList.remove('hidden');
        document.getElementById('popupFormularioVentaLeche').classList.add('hidden');
        document.getElementById('popupFormularioVentaTocino').classList.add('hidden');
        document.getElementById('huevosParaVender').type = 'number';
        document.getElementById('huevosParaVender').style.width = '100px';
        document.getElementById('huevosParaVender').style.marginTop = '10px';
        document.getElementById('huevosParaVender').style.marginLeft = '15px';
        document.getElementById('huevosParaVender').style.padding = '5px';
        document.getElementById('venderLosHuevos').addEventListener('click', venderHuevos);

    }

    function venderHuevos() {
        var cantAVender = document.getElementById('huevosParaVender').value;
        if (inventario.cantidadHuevos > 0) {
            inventario.cantidadHuevos = inventario.cantidadHuevos - cantAVender;
            inventario.cantidadDinero = inventario.cantidadDinero + (cantAVender * 5);
            mostrarDatosGranja();
            document.getElementById('popupFormularioVentaHuevos').reset();
            document.getElementById('popupVender').classList.add('hidden');
        }
    }

    function formularioLeche() {
        document.getElementById('venderHuevos').classList.add('hidden');
        document.getElementById('venderLeche').classList.add('hidden');
        document.getElementById('venderTocino').classList.add('hidden');
        document.getElementById('popupFormularioVentaHuevos').classList.add('hidden');
        document.getElementById('popupFormularioVentaTocino').classList.add('hidden');
        document.getElementById('popupFormularioVentaLeche').classList.remove('hidden');
        document.getElementById('lecheParaVender').type = 'number';
        document.getElementById('lecheParaVender').style.width = '100px';
        document.getElementById('lecheParaVender').style.marginTop = '10px';
        document.getElementById('lecheParaVender').style.marginLeft = '15px';
        document.getElementById('lecheParaVender').style.padding = '5px';
        document.getElementById('venderLaLeche').addEventListener('click', venderLeche);

    }

    function venderLeche() {
        var cantAVender = document.getElementById('lecheParaVender').value;
        if (inventario.cantidadLeche > 0) {
            inventario.cantidadLeche = inventario.cantidadLeche - cantAVender;
            inventario.cantidadDinero = inventario.cantidadDinero + (cantAVender * 20);
            mostrarDatosGranja();
            document.getElementById('popupFormularioVentaLeche').reset();
            document.getElementById('popupVender').classList.add('hidden');
        }
    }


    function formularioTocino() {
        document.getElementById('venderHuevos').classList.add('hidden');
        document.getElementById('venderLeche').classList.add('hidden');
        document.getElementById('venderTocino').classList.add('hidden');
        document.getElementById('popupFormularioVentaHuevos').classList.add('hidden');
        document.getElementById('popupFormularioVentaLeche').classList.add('hidden');
        document.getElementById('popupFormularioVentaTocino').classList.remove('hidden');
        document.getElementById('tocinoParaVender').type = 'number';
        document.getElementById('tocinoParaVender').style.width = '100px';
        document.getElementById('tocinoParaVender').style.marginTop = '10px';
        document.getElementById('tocinoParaVender').style.marginLeft = '15px';
        document.getElementById('tocinoParaVender').style.padding = '5px';
        document.getElementById('venderElTocino').addEventListener('click', venderTocino);

    }

    function venderTocino() {
        var cantAVender = document.getElementById('tocinoParaVender').value;
        if (inventario.cantidadTocino > 0) {
            inventario.cantidadTocino = inventario.cantidadTocino - cantAVender;
            inventario.cantidadDinero = inventario.cantidadDinero + (cantAVender * 10);
            mostrarDatosGranja();
            document.getElementById('popupFormularioVentaTocino').reset();
            document.getElementById('popupVender').classList.add('hidden');
        }
    }

    function update() {

        for (var i = 0; i < animals.length; i++) {
            animals[i].update();
            //window.requestAnimationFrame(updateCards);
            //window.requestAnimationFrame(updateDatosAnimal); //Si esto se descomenta, lo que pasa es que sí actualiza todos los valores, pero los botones para comer, beber & acariciar dejan de funcionar, no sé por qué
        }

        window.requestAnimationFrame(update);
    }

    update();


    function recogerProducto() {

        switch (currentAnimal.tipo) {
            case 'vaca':
                inventario.cantidadLeche += currentAnimal.cantidadDeProducto;
                currentAnimal.cantidadDeProducto = 0;
                break;

            case 'gallina':
                inventario.cantidadHuevos += currentAnimal.cantidadDeProducto;
                currentAnimal.cantidadDeProducto = 0;
                break;

            case 'pato':
                inventario.cantidadHuevos += currentAnimal.cantidadDeProducto;
                currentAnimal.cantidadDeProducto = 0;
                break;

            case 'cerdo':
                inventario.cantidadTocino += currentAnimal.cantidadDeProducto;
                currentAnimal.cantidadDeProducto = 0;
                break;

        }
        currentAnimal.updateCards();
        currentAnimal.update();

        mostrarDatosGranja();
        updateAnimalContainer();
        //updateCards();
        //updateDatosAnimal();
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function comer() {
        currentAnimal.comer(inventario);
        // updateCards();
        mostrarDatosGranja();
    }

    function beber() {
        currentAnimal.beber(inventario);
        // updateCards();
        mostrarDatosGranja();
    }

    function acariciar() {
        if (currentAnimal.felicidad !== 100) {
            currentAnimal.felicidad++;
            currentAnimal.updateCards();
        }
    }

    function updateDatosAnimal() {

        for (var i = 0; i < animals.length; i++) {
            var animalContainer = document.getElementById('animalContainer');
            var datosAnimal = document.getElementById('datosAnimal');
            datosAnimal.style.fontFamily = 'verdana';
            datosAnimal.style.color = 'black';
            datosAnimal.style.padding = '20px';
            datosAnimal.style.lineHeight = '25px';
            datosAnimal.innerHTML = '<strong>Nombre: </strong>' + animals[i].nombre + '<br>' + '<strong>Edad: </strong>' + animals[i].edad + '<br>' + '<strong>Altura: </strong>' + animals[i].altura + '<br>' + '<strong>Peso: </strong>' + animals[i].peso + '<br>' + '<strong>Tamaño: </strong>' + animals[i].tamanno + '<br>' + '<strong>Capacidad Estómago: </strong>' + animals[i].capacidadEstomago + '<br>' + '<strong>Capacidad Consumo de Agua: </strong>' + animals[i].capacidadConsumoAgua + '<br>' + '<strong>Capacidad Consumo de Alimento: </strong>' + animals[i].capacidadConsumoAlimento + '<br>' + '<strong>Capacidad de Producción: </strong>' + animals[i].capacidadProduccion + '<br>' + '<strong>Tipo de Producción: </strong>' + animals[i].tipoDeProduccion + '<br>' + '<strong>Cantidad de producto: </strong>' + animals[i].cantidadDeProducto + '<br>' + '<strong>Felicidad: </strong>' + animals[i].felicidad;
            animalContainer.appendChild(datosAnimal);
            generarBotonesAnimales();
        }
    }

    //function updateCards() {
    //  for (var i = 0; i < animals.length; i++) {

    //    var animal = animals[i].animalDivTitle;
    //  animal.innerHTML = animals[i].nombre + '<br>' + 'Felicidad: ' + animals[i].felicidad + '<br>' + 'Cantidad de Producto: ' + animals[i].cantidadDeProducto + '<br>' + 'Apetito: ' + animals[i].apetito;
    //animal.style.textAlign = 'center';
    //animal.style.display = 'block';
    //animal.classList.add('nombreAnimal');
    //}
    //updateDatosAnimal();        
    //}



}