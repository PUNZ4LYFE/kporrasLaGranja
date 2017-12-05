var Ave = (
      function () {
            function Ave(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad) {
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
                  this.apetito = 50;
                  this.tiempo = 0;
                  this.FRAMERATE = 60;
                  this.cantidadDeProducto = 0;
                  this.tiempoDeProduction = 2 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
            }
            //Class Methods
            Ave.prototype.comer = function (granero) {
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

            Ave.prototype.caminar = function () {
                  console.log('Cada animal camina a su manera.');
            }

            Ave.prototype.beber = function (granero) {
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

            Ave.prototype.producir = function () {
                  // console.log('Este animal no produce nada!');
            };

            Ave.prototype.crearProducto = function () {

            }

            Ave.prototype.update = function () {

            }


            return Ave;
      }
)();
