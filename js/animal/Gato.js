var Gato = (
	function () {
		function Gato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
                  
                  this.tipo = 'gato';
                  this.felicidad = 50;
                  this.apetito = 50;
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Gato.prototype = Object.create(Animal.prototype);
            Gato.prototype.constructor = Animal;
            
		//Class Methods
            
        Gato.prototype.comer = function () {
			console.log(this.nombre + ': soy un gato & como lo que sea!');
        }

        Gato.prototype.caminar = function () {
			console.log(this.nombre + ': soy un gato & camino gracioso!');
        }

        Gato.prototype.beber = function () {
			console.log(this.nombre + ': soy un gato & solo bebo agua!');
        }      

		return Gato;
	}
)();
