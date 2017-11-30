var Vaca = (
	function () {
		function Vaca(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion, pfelicidad)
                  this.precio = 500;
                  this.cantidadDeProducto = 0;
                  this.felicidad = pfelicidad;
                  this.apetito = 50;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 200 * this.FRAMERATE;
                  this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
                  this.tipo = 'vaca';
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            //Herencia
            Vaca.prototype = Object.create(Animal.prototype);
            Vaca.prototype.constructor = Animal;
            
		//Class Methods
            
            Vaca.prototype.comer = function () {
			console.log(this.nombre + ': soy una vaca & solo pasto!');
        }

        Vaca.prototype.caminar = function () {
			console.log(this.nombre + ': soy una vaca & casi no camino!');
        }

        Vaca.prototype.beber = function () {
			console.log(this.nombre + ': soy una vaca & solo bebo agua!');
        }      
        
        Vaca.prototype.producir = function () {
              
      };

      Vaca.prototype.crearProducto = function () {
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
                  }
            } else {
                  //Vaca llena
            }

      }

      Vaca.prototype.update = function () {
            this.tiempo++;
            this.crearProducto();
      }

      return Vaca;
}
)();
