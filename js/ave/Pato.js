var Pato = (
	function () {
		function Pato(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Pato.prototype = Object.create(Ave.prototype);
            Pato.prototype.constructor = Ave;
            
		//Class Methods
            
        Pato.prototype.comer = function () {
			console.log(this.nombre + ': soy un pato & como lo que sea!');
        }

        Pato.prototype.caminar = function () {
			console.log(this.nombre + ': soy un pato & camino gracioso!');
        }

        Pato.prototype.beber = function () {
			console.log(this.nombre + ': soy un pato & solo bebo agua!');
        }      

		return Pato;
	}
)();
