var Vaca = (
	function () {
		function Vaca(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  this.color;
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

		return Vaca;
	}
)();
