var Cerdo = (
	function () {
		function Cerdo(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.color;
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            //Herencia
            Cerdo.prototype = Object.create(Animal.prototype);
            Cerdo.prototype.constructor = Animal;
            
		//Class Methods
            
            Cerdo.prototype.comer = function () {
			console.log(this.nombre + ': soy un cerdo & solo como alimento!');
        }

        Cerdo.prototype.caminar = function () {
			console.log(this.nombre + ': soy un cerdo & camino en el lodo!');
        }

        Cerdo.prototype.beber = function () {
			console.log(this.nombre + ': soy un cerdo & solo bebo agua!');
        }      

		return Cerdo;
	}
)();
