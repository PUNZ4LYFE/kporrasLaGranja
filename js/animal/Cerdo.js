var Cerdo = (
      function () {
            function Cerdo(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad, callback) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad)
                  this.color;
                  this.tipo = 'cerdo';
                  this.felicidad = 50;
                  this.apetito = 50;
                  /*this.nombre = pnombre;
                  this.edad = pedad;
                  this.altura = paltura;
                  this.peso = ppeso;
                  this.tamanno = ptamanno;*/
                  this.animalDivCallback = callback;
                  this.addCard();
            }

            //Herencia
            Cerdo.prototype = Object.create(Animal.prototype);
            Cerdo.prototype.constructor = Animal;

            //Class Methods

            Cerdo.prototype.producir = function () {

            };

            Cerdo.prototype.crearProducto = function () {
                  //this.capacidadProduccion
                  //this.cantidadDeProducto = 0;
                  //this.velocidadDeProducion = 0

                  if (this.capacidadProduccion >= this.cantidadDeProducto) {
                        if (this.tiempo <= this.tiempoDeProduction) {
                              this.cantidadDeProducto = Math.round(this.cantidadDeProducto + this.cantidadDeProductoPorTiempo);
                              this.felicidad--;
                              //this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
                              this.tiempo = 0;
                              console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
                              this.updateCards();
                        }
                  } else {
                  }

            }

            Cerdo.prototype.update = function () {
                  this.tiempo++;
                  this.crearProducto();
                  this.updateCards();
            }

            Cerdo.prototype.addCard = function () {
                  
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
                  foto.setAttribute("src", "../img/pig.svg");
                  foto.classList.add('svg');
                  this.animalDiv.appendChild(foto);
                  
                  this.animalDiv.addEventListener('click', this.animalDivCallback, false);
            }
                  
            Cerdo.prototype.updateCards = function () {
                  this.animalDivTitle.innerHTML = this.nombre + '<br>' +
                  'Felicidad: ' + this.felicidad + '<br>' +
                  'Cantidad de Producto: ' + this.cantidadDeProducto + '<br>' +
                  'Apetito: ' + this.apetito;
            }

            return Cerdo;
      }
)();
