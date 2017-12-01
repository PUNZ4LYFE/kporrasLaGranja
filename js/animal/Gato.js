var Gato = (
      function () {
            function Gato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, callback) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.color;
                  this.tipo = 'gato';
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
            Gato.prototype = Object.create(Animal.prototype);
            Gato.prototype.constructor = Animal;

            //Class Methods
            Gato.prototype.caminar = function () {
                  console.log(this.nombre + ': soy un gato & camino con estilo!');
            }

            Gato.prototype.beber = function () {
                  console.log(this.nombre + ': soy un gato & solo bebo leche!');
            }

            Gato.prototype.addCard = function () {

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
                  foto.setAttribute("src", "../img/cat.svg");
                  foto.classList.add('svg');
                  this.animalDiv.appendChild(foto);

                  this.animalDiv.addEventListener('click', this.animalDivCallback, false);
            }

            Gato.prototype.updateCards = function () {
                  this.animalDivTitle.innerHTML = this.nombre + '<br>' +
                        'Felicidad: ' + this.felicidad + '<br>' +
                        'Cantidad de Producto: ' + this.cantidadDeProducto + '<br>' +
                        'Apetito: ' + this.apetito;
            }

            return Gato;
      }
)();