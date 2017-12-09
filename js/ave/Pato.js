var Pato = (
	function () {
		function Pato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad, callback) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad)
                  // this.velocidadDeProducion = 2 * this.FRAMERATE;
                  this.felicidad = pfelicidad;
                  this.apetito = 50;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'pato';
                  this.animalDivCallback = callback;
                  this.addCard();
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Pato.prototype = Object.create(Ave.prototype);
            Pato.prototype.constructor = Ave;
            
		//Class Methods     

        Pato.prototype.producir = function () {
            
    };

    Pato.prototype.crearProducto = function () {
          //this.capacidadProduccion
          //this.cantidadDeProducto = 0;
          //this.velocidadDeProducion = 0

          if (this.capacidadProduccion >= this.cantidadDeProducto) {
                if (this.tiempo == this.tiempoDeProduction) {
                      this.cantidadDeProducto = Math.round(this.cantidadDeProducto + this.cantidadDeProductoPorTiempo);
                      this.felicidad--;
                      this.tiempo = 0;
                      console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
                      this.updateCards();
                }
          } else {
          }

    }

    Pato.prototype.update = function () {
          this.tiempo++;
          this.crearProducto();
          this.updateCards();
    }

    Pato.prototype.addCard = function () {
      
            var animalsContainer = document.getElementById('animalsContainer');
            this.animalDiv = document.createElement('div');
            animalsContainer.appendChild(this.animalDiv);
            this.animalDiv.id = this.nombre;
            this.animalDiv.classList.add('animalCardContainer');
            
            this.animalDivTitle = document.createElement('h5');
            this.animalDivTitle.id = 'title';
            this.animalDivTitle.innerHTML = this.nombre + '<br>' + 'Felicidad: ' + this.felicidad + '<br>' + 'Cantidad de Producto: ' + this.cantidadDeProducto + '<br>' + 'Apetito: ' + this.apetito;
            this.animalDivTitle.style.textAlign = 'center';
            this.animalDivTitle.style.display = 'block';
            this.animalDivTitle.classList.add('nombreAnimal');
            this.animalDiv.appendChild(this.animalDivTitle);
            
            var foto = document.createElement("img");
            foto.setAttribute("src", "../img/duck.svg");
            foto.classList.add('svg');
            this.animalDiv.appendChild(foto);
            
            this.animalDiv.addEventListener('click', this.animalDivCallback, false);
      }
      
    Pato.prototype.updateCards = function () {
            this.animalDivTitle.innerHTML = this.nombre + '<br>' +
            'Felicidad: ' + this.felicidad + '<br>' +
            'Cantidad de Producto: ' + this.cantidadDeProducto + '<br>' +
            'Apetito: ' + this.apetito;
      }

      Pato.prototype.acariciar = function () {
            if (this.felicidad <= 100) {
                  this.felicidad++;
                  this.updateCards();
            }
      }


	return Pato;
	}
)();
