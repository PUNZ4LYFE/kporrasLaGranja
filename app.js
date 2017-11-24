window.addEventListener('load', init, false);

function init() {

    var animals = [];

    var cusu = new Gato('Batido', 1, 2, 10, 'mediana', 4, 2, 2, 'ninguna', 'ninguno');
    cusu.color = 'gray';
    cusu.tipo = 'gato';
    animals.push(cusu);

    var coco = new Perro('Lucas', 1, 2, 10, 'mediano', 4, 2, 2, 'ninguna', 'ninguno');
    coco.color = 'white';
    coco.tipo = 'perro';
    animals.push(coco);

    var jotaro = new Caballo('Jotaro', 1, 2, 10, 'grande', 10, 5, 5, 'ninguna', 'ninguno');
    jotaro.color = 'brown';
    jotaro.tipo = 'caballo';
    animals.push(jotaro);

    var marinette = new Gallina('Marinette', 1, 2, 10, 'pequeña', 2, 1, 1, 1, 'huevo');
    marinette.color = 'white';
    animals.push(marinette);
    marinette.tipo = 'gallina';

    var adrien = new Gallina('Adrien', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    adrien.color = 'white';
    animals.push(adrien);
    adrien.tipo = 'gallina';

    var donald = new Pato('Donald', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    donald.color = 'white';
    animals.push(donald);
    donald.tipo = 'pato';

    var daisy = new Pato('Daisy', 1, 2, 10, 'pequeño', 2, 1, 1, 1, 'huevo');
    daisy.color = 'white';
    animals.push(daisy);
    daisy.tipo = 'pato';

    var waddles = new Cerdo('Waddles', 1, 2, 10, 'mediano', 4, 2, 2, 3, 'tocino');
    waddles.color = 'pink';
    animals.push(waddles);
    waddles.tipo = 'cerdo';

    var millie = new Vaca('Millie', 1, 2, 10, 'grande', 10, 5, 5, 5, 'leche');
    millie.color = 'brown';
    animals.push(millie);
    millie.tipo = 'vaca';


    var inventario = new Granero(5000, 10, 20, 30, 40, 50, 60, 70);

    generarTarjetas();
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
            title.innerHTML = animals[i].nombre;
            title.style.textAlign = 'center';
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
        }
    }

    function onAnimalCardClick(event) {
        console.log(event);
        var animal = getAnimalByName(event.target);
        console.log(animal);

        if (animal !== null) {
            var animalContainer = document.getElementById('animalContainer');
            var datosAnimal = document.getElementById('datosAnimal');
            datosAnimal.style.fontFamily = 'verdana';
            datosAnimal.style.color = 'black';
            datosAnimal.style.padding = '20px';
            datosAnimal.style.lineHeight = '25px';
            datosAnimal.innerHTML = '<strong>Nombre: </strong>' + animal.nombre + '<br>' + '<strong>Edad: </strong>' + animal.edad + '<br>' + '<strong>Altura: </strong>' + animal.altura + '<br>' + '<strong>Peso: </strong>' + animal.peso + '<br>' + '<strong>Tamaño: </strong>' + animal.tamanno + '<br>' + '<strong>Capacidad Estómago: </strong>' + animal.capacidadEstomago + '<br>' + '<strong>Capacidad Consumo de Agua: </strong>' + animal.capacidadConsumoAgua + '<br>' + '<strong>Capacidad Consumo de Alimento: </strong>' + animal.capacidadConsumoAlimento + '<br>' + '<strong>Capacidad de Producción: </strong>' + animal.capacidadProduccion + '<br>' + '<strong>Tipo de Producción: </strong>' + animal.tipoDeProduccion;
            animalContainer.appendChild(datosAnimal);
            generarBotonesAnimales();
        }
    }

    function generarBotonesAnimales() {
        var botonProducir = document.getElementById('botonProducir');
        document.getElementById('botonProducir').addEventListener('click', recogerProducto);
        botonProducir.classList.remove('hidden');
        botonProducir.value = 'Recoger los productos';
        botonProducir.id = 'botonProducir';
        botonProducir.classList.add('compraVenta');
        botonProducir.style.width = '150px';

        var botonBeber = document.getElementById('botonBeber');
        botonBeber.classList.remove('hidden');
        botonBeber.value = 'Beber';
        botonBeber.id = 'botonBeber';
        botonBeber.classList.add('compraVenta');

        var botonComer = document.getElementById('botonComer');
        botonComer.classList.remove('hidden');
        botonComer.value = 'Comer';
        botonComer.id = 'botonComer';
        botonComer.classList.add('compraVenta');

        animalContainer.appendChild(botonProducir);
        animalContainer.appendChild(botonBeber);
        animalContainer.appendChild(botonComer);
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
        inputsFormulario[1] = document.getElementById('edadVaca');
        inputsFormulario[1].placeholder = 'Edad del animal'; //Llamar el metodo y pasar dos parametros min y max
        inputsFormulario[2] = document.getElementById('alturaVaca');
        inputsFormulario[2].placeholder = 'Altura del animal';
        inputsFormulario[3] = document.getElementById('pesoVaca');
        inputsFormulario[3].placeholder = 'Peso del animal';
        inputsFormulario[4] = document.getElementById('tamannoVaca');
        inputsFormulario[4].placeholder = 'Tamaño del animal';
        inputsFormulario[5] = document.getElementById('estomagoVaca');
        inputsFormulario[5].placeholder = 'Capacidad del estómago';
        inputsFormulario[6] = document.getElementById('aguaVaca');
        inputsFormulario[6].placeholder = 'Capacidad de consumo de agua';
        inputsFormulario[7] = document.getElementById('alimentoVaca');
        inputsFormulario[7].placeholder = 'Capacidad de consumo de alimento';
        inputsFormulario[8] = document.getElementById('produccionVaca');
        inputsFormulario[8].placeholder = 'Capacidad de producción';
        inputsFormulario[9] = document.getElementById('tipoProduccionVaca');
        inputsFormulario[9].placeholder = 'Tipo de producción';
        for (var i = 0; i <= inputsFormulario.length - 1; i++) {
            inputsFormulario[i].type = 'text';
            inputsFormulario[i].style.width = '220px';
            inputsFormulario[i].style.marginTop = '10px';
            inputsFormulario[i].style.marginLeft = '15px';
            inputsFormulario[i].style.padding = '5px';
        }

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
        inputsFormulario[1] = document.getElementById('edadGallina');
        inputsFormulario[1].placeholder = randomInt(1, 10);
        inputsFormulario[2] = document.getElementById('alturaGallina');
        inputsFormulario[2].placeholder = 'Altura del animal';
        inputsFormulario[3] = document.getElementById('pesoGallina');
        inputsFormulario[3].placeholder = 'Peso del animal';
        inputsFormulario[4] = document.getElementById('tamannoGallina');
        inputsFormulario[4].placeholder = 'Tamaño del animal';
        inputsFormulario[5] = document.getElementById('estomagoGallina');
        inputsFormulario[5].placeholder = 'Capacidad del estómago';
        inputsFormulario[6] = document.getElementById('aguaGallina');
        inputsFormulario[6].placeholder = 'Capacidad de consumo de agua';
        inputsFormulario[7] = document.getElementById('alimentoGallina');
        inputsFormulario[7].placeholder = 'Capacidad de consumo de alimento';
        inputsFormulario[8] = document.getElementById('produccionGallina');
        inputsFormulario[8].placeholder = 'Capacidad de producción';
        inputsFormulario[9] = document.getElementById('tipoProduccionGallina');
        inputsFormulario[9].placeholder = 'Tipo de producción';
        for (var i = 0; i <= inputsFormulario.length - 1; i++) {
            inputsFormulario[i].type = 'text';
            inputsFormulario[i].style.width = '220px';
            inputsFormulario[i].style.marginTop = '10px';
            inputsFormulario[i].style.marginLeft = '15px';
            inputsFormulario[i].style.padding = '5px';
        }

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
        inputsFormulario[1] = document.getElementById('edadCerdo');
        inputsFormulario[1].placeholder = 'Edad del animal';
        inputsFormulario[2] = document.getElementById('alturaCerdo');
        inputsFormulario[2].placeholder = 'Altura del animal';
        inputsFormulario[3] = document.getElementById('pesoCerdo');
        inputsFormulario[3].placeholder = 'Peso del animal';
        inputsFormulario[4] = document.getElementById('tamannoCerdo');
        inputsFormulario[4].placeholder = 'Tamaño del animal';
        inputsFormulario[5] = document.getElementById('estomagoCerdo');
        inputsFormulario[5].placeholder = 'Capacidad del estómago';
        inputsFormulario[6] = document.getElementById('aguaCerdo');
        inputsFormulario[6].placeholder = 'Capacidad de consumo de agua';
        inputsFormulario[7] = document.getElementById('alimentoCerdo');
        inputsFormulario[7].placeholder = 'Capacidad de consumo de alimento';
        inputsFormulario[8] = document.getElementById('produccionCerdo');
        inputsFormulario[8].placeholder = 'Capacidad de producción';
        inputsFormulario[9] = document.getElementById('tipoProduccionCerdo');
        inputsFormulario[9].placeholder = 'Tipo de producción';
        for (var i = 0; i <= inputsFormulario.length - 1; i++) {
            inputsFormulario[i].type = 'text';
            inputsFormulario[i].style.width = '220px';
            inputsFormulario[i].style.marginTop = '10px';
            inputsFormulario[i].style.marginLeft = '15px';
            inputsFormulario[i].style.padding = '5px';
        }

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
            console.log('ayy lmao');
            var datosFormulario = [];
            datosFormulario[0] = document.getElementById('nombreVaca').value;
            datosFormulario[1] = document.getElementById('edadVaca').value;
            datosFormulario[2] = document.getElementById('alturaVaca').value;
            datosFormulario[3] = document.getElementById('pesoVaca').value;
            datosFormulario[4] = document.getElementById('tamannoVaca').value;
            datosFormulario[5] = document.getElementById('estomagoVaca').value;
            datosFormulario[6] = document.getElementById('aguaVaca').value;
            datosFormulario[7] = document.getElementById('alimentoVaca').value;
            datosFormulario[8] = document.getElementById('produccionVaca').value;
            datosFormulario[9] = document.getElementById('tipoProduccionVaca').value;

            var vacaComprada = new Vaca(datosFormulario[0], datosFormulario[1], datosFormulario[2], datosFormulario[3], datosFormulario[4], datosFormulario[5], datosFormulario[6], datosFormulario[7], datosFormulario[8], datosFormulario[9]);
            vacaComprada.color = 'brown';
            animals.push(vacaComprada);

            var tarjetaVacaComprada = document.createElement('div');
            animalsContainer.appendChild(tarjetaVacaComprada);
            tarjetaVacaComprada.id = vacaComprada.nombre;
            tarjetaVacaComprada.classList.add('animalCardContainer');

            var title = document.createElement('h5');
            title.innerHTML = vacaComprada.nombre;
            title.classList.add('nombreAnimal');
            tarjetaVacaComprada.appendChild(title);

            var foto = document.createElement("img");
            foto.setAttribute("src", "../img/cow.svg");
            foto.classList.add('svg');
            tarjetaVacaComprada.appendChild(foto);

            tarjetaVacaComprada.addEventListener('click', onAnimalCardClick, false);

            inventario.cantidadDinero = inventario.cantidadDinero - vacaComprada.precio;

            mostrarDatosGranja();
        } else {
            alert('dont');
        }
    }

    function comprarGallina() {
        document.getElementById('popupFormularioGallina').classList.add('hidden');
        if (inventario.cantidadDinero >= 500) {
            console.log('ayy lmao');
            var datosFormulario = [];
            datosFormulario[0] = document.getElementById('nombreGallina').value;
            datosFormulario[1] = document.getElementById('edadGallina').value;
            datosFormulario[2] = document.getElementById('alturaGallina').value;
            datosFormulario[3] = document.getElementById('pesoGallina').value;
            datosFormulario[4] = document.getElementById('tamannoGallina').value;
            datosFormulario[5] = document.getElementById('estomagoGallina').value;
            datosFormulario[6] = document.getElementById('aguaGallina').value;
            datosFormulario[7] = document.getElementById('alimentoGallina').value;
            datosFormulario[8] = document.getElementById('produccionGallina').value;
            datosFormulario[9] = document.getElementById('tipoProduccionGallina').value;

            var gallinaComprada = new Gallina(datosFormulario[0], datosFormulario[1], datosFormulario[2], datosFormulario[3], datosFormulario[4], datosFormulario[5], datosFormulario[6], datosFormulario[7], datosFormulario[8], datosFormulario[9]);
            gallinaComprada.color = 'brown';
            animals.push(gallinaComprada);

            var tarjetaGallinaComprada = document.createElement('div');
            animalsContainer.appendChild(tarjetaGallinaComprada);
            tarjetaGallinaComprada.id = gallinaComprada.nombre;
            tarjetaGallinaComprada.classList.add('animalCardContainer');

            var title = document.createElement('h5');
            title.innerHTML = gallinaComprada.nombre;
            title.classList.add('nombreAnimal');
            tarjetaGallinaComprada.appendChild(title);

            var foto = document.createElement("img");
            foto.setAttribute("src", "../img/hen.svg");
            foto.classList.add('svg');
            tarjetaGallinaComprada.appendChild(foto);

            tarjetaGallinaComprada.addEventListener('click', onAnimalCardClick, false);

            inventario.cantidadDinero = inventario.cantidadDinero - gallinaComprada.precio;

            mostrarDatosGranja();

            document.getElementById('popupFormularioCompraGallina').reset();
        } else {
            alert('dont');
        }
    }

    function comprarCerdo() {
        document.getElementById('popupFormularioCerdo').classList.add('hidden');
        if (inventario.cantidadDinero >= 500) {
            console.log('ayy lmao');
            var datosFormulario = [];
            datosFormulario[0] = document.getElementById('nombreCerdo').value;
            datosFormulario[1] = document.getElementById('edadCerdo').value;
            datosFormulario[2] = document.getElementById('alturaCerdo').value;
            datosFormulario[3] = document.getElementById('pesoCerdo').value;
            datosFormulario[4] = document.getElementById('tamannoCerdo').value;
            datosFormulario[5] = document.getElementById('estomagoCerdo').value;
            datosFormulario[6] = document.getElementById('aguaCerdo').value;
            datosFormulario[7] = document.getElementById('alimentoCerdo').value;
            datosFormulario[8] = document.getElementById('produccionCerdo').value;
            datosFormulario[9] = document.getElementById('tipoProduccionCerdo').value;

            var cerdoComprada = new Cerdo(datosFormulario[0], datosFormulario[1], datosFormulario[2], datosFormulario[3], datosFormulario[4], datosFormulario[5], datosFormulario[6], datosFormulario[7], datosFormulario[8], datosFormulario[9]);
            cerdoComprada.color = 'brown';
            animals.push(cerdoComprada);

            var tarjetaCerdoComprada = document.createElement('div');
            animalsContainer.appendChild(tarjetaCerdoComprada);
            tarjetaCerdoComprada.id = cerdoComprada.nombre;
            tarjetaCerdoComprada.classList.add('animalCardContainer');

            var title = document.createElement('h5');
            title.innerHTML = cerdoComprada.nombre;
            title.classList.add('nombreAnimal');
            tarjetaCerdoComprada.appendChild(title);

            var foto = document.createElement("img");
            foto.setAttribute("src", "../img/pig.svg");
            foto.classList.add('svg');
            tarjetaCerdoComprada.appendChild(foto);

            tarjetaCerdoComprada.addEventListener('click', onAnimalCardClick, false);

            inventario.cantidadDinero = inventario.cantidadDinero - cerdoComprada.precio;

            mostrarDatosGranja();
            document.getElementById('popupFormularioCerdo').reset();

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
        }

        window.requestAnimationFrame(update);
    }

    update();

    function recogerProducto() {
        for (var i = 0; i < animals.length; i++) {
            switch (animals[i].tipo) {
                case 'vaca':
                    inventario.cantidadLeche += animals[i].cantidadDeProducto;
                    break;

                case 'gallina', 'pato':
                    inventario.cantidadHuevos += animals[i].cantidadDeProducto;
                    break;

                case 'cerdo':
                    inventario.cantidadTocino += animals[i].cantidadDeProducto;
                    break;
            }
        }

        mostrarDatosGranja();
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}