var Gallina = (
	function () {
		function Gallina(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
                  Ave.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion)
            /*this.nombre = pnombre;
            this.edad = pedad;
            this.altura = paltura;
            this.peso = ppeso;
            this.tamanno = ptamanno;*/
            }

            Gallina.prototype = Object.create(Ave.prototype);
            Gallina.prototype.constructor = Ave;
            
		//Class Methods
            
        Gallina.prototype.comer = function () {
			console.log(this.nombre + ': soy una gallina & como lo que sea!');
        }

        Gallina.prototype.caminar = function () {
			console.log(this.nombre + ': soy una gallina & camino gracioso!');
        }

        Gallina.prototype.beber = function () {
			console.log(this.nombre + ': soy una gallina & solo bebo agua!');
        }      

		return Gallina;
	}
)();
