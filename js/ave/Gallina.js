var Gallina = (
      function () {
            function Gallina(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad, callback) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad)
                  this.precio = 100;
                  this.felicidad = pfelicidad;
                  this.apetito = 50;
                  // this.velocidadDeProducion = 2 * this.FRAMERATE;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'gallina';
                  this.animalDivCallback = callback;
                  this.addCard();
                  /*this.nombre = pnombre;
                  this.edad = pedad;
                  this.altura = paltura;
                  this.peso = ppeso;
                  this.tamanno = ptamanno;*/
            }

            Gallina.prototype = Object.create(Ave.prototype);
            Gallina.prototype.constructor = Ave;

            //Class Methods

            Gallina.prototype.producir = function () {

            };

            Gallina.prototype.crearProducto = function () {
                  //this.capacidadProduccion
                  //this.cantidadDeProducto = 0;
                  //this.velocidadDeProducion = 0

                  if (this.cantidadDeProducto <= this.capacidadProduccion) {
                        if (this.tiempo >= this.tiempoDeProduction) {
                              this.cantidadDeProducto = Math.round(this.cantidadDeProducto + this.cantidadDeProductoPorTiempo);
                              this.felicidad--;
                              this.tiempo = 0;
                              console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
                              this.updateCards();
                        }
                  } else {
                        this.tiempo = 0;
                  }

            }

            Gallina.prototype.update = function () {
                  this.tiempo++;
                  this.crearProducto();
                  this.updateCards();
            }

            Gallina.prototype.addCard = function () {

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
                  foto.setAttribute("src", "../img/hen.svg");
                  foto.classList.add('svg');
                  this.animalDiv.appendChild(foto);

                  this.animalDiv.addEventListener('click', this.animalDivCallback, false);
            }

            Gallina.prototype.updateCards = function () {
                  this.animalDivTitle.innerHTML = this.nombre + '<br>' +
                        'Felicidad: ' + this.felicidad + '<br>' +
                        'Cantidad de Producto: ' + this.cantidadDeProducto + '<br>' +
                        'Apetito: ' + this.apetito;
            }


            return Gallina;
      }
)();