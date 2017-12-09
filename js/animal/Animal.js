var Animal = (
      function () {
            function Animal(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad) {
                  this.nombre = pnombre;
                  this.edad = pedad;
                  this.altura = paltura;
                  this.peso = ppeso;
                  this.tamanno = ptamanno;
                  this.capacidadEstomago = pcapacidadEstomago;
                  this.capacidadConsumoAgua = pcapacidadConsumoAgua;
                  this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
                  this.capacidadProduccion = pcapacidadProduccion;
                  this.tipoDeProduccion = ptipodeProduccion;
                  this.felicidad = pfelicidad;
                  this.tiempo = 0;
                  this.FRAMERATE = 60;
                  this.cantidadDeProducto = 0;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.apetito = 50;
                  this.animalDiv = null;
                  this.animalDivTitle = null;
                  this.animalDivCallback = null;

            }
            //Class Methods
            Animal.prototype.comer = function (granero) {
                  console.log('Cada animal come. ' + this.apetito);
                  if (this.apetito < 100 && this.apetito != 0 && granero.cantidadAlimento >= 5) {
                        this.apetito = this.apetito - 10;
                        granero.cantidadAlimento = granero.cantidadAlimento - 5;
                        if (this.felicidad < 100) {
                              this.felicidad += 10;
                        }
                  }
                  this.updateCards();
            }

            Animal.prototype.caminar = function () {
                  console.log('Cada animal camina a su manera.');
            }

            Animal.prototype.beber = function (granero) {
                  console.log('Cada animal come. ' + this.apetito);
                  if (this.apetito < 100 && this.apetito != 0 && granero.cantidadAgua >= 5) {
                        this.apetito = this.apetito - 10;
                        granero.cantidadAgua = granero.cantidadAgua - 5;
                        if (this.felicidad < 100) {
                              this.felicidad += 10;
                        }
                  }
                  this.updateCards();
            }

            Animal.prototype.producir = function () {
                  // console.log('Este animal no produce nada!');
            };

            Animal.prototype.crearProducto = function () {

            }

            Animal.prototype.recogerProducto = function () {

            }

            Animal.prototype.update = function () {

            }

            Animal.prototype.addCard = function () {

            }

            Animal.prototype.acariciar = function () {
                  if (this.felicidad <= 100) {
                        this.felicidad++;
                        this.updateCards();
                  }
            }

            return Animal;
      }
)();