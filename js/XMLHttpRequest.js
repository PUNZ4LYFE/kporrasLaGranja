var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttp.responseText);

        console.log(respuesta);

        
        var objetoAnimal = respuesta.animales;

        for(var i = 0; i < objetoAnimal.length; i++){


               switch (objetoAnimal[i].tipo) {
                   case "vaca":
                       var nuevoAnimal = new Vaca (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "gallina":
                       var nuevoAnimal = new Gallina (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "pato":
                       var nuevoAnimal = new Pato (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "cerdo":
                       var nuevoAnimal = new Cerdo (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "caballo":
                       var nuevoAnimal = new Caballo (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "perro":
                       var nuevoAnimal = new Perro (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
                       break;
                   case "gato":
                       var nuevoAnimal = new Gato (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                       animals.push(nuevoAnimal);
               }

        };

      }


    };
    xhttp.open("GET", "animal.json", true);
    xhttp.send();