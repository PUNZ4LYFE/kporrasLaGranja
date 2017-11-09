var Ave = (
	function () {
		function Ave(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipodeProduccion) {
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
		}
		//Class Methods
		Ave.prototype.comer = function () {
			console.log('Cada animaveal come a su manera.');
        }

        Ave.prototype.caminar = function () {
			console.log('Cada animal camina a su manera.');
        }

        Ave.prototype.beber = function () {
			console.log('Cada ave bebe a su manera.');
        } 
        
        Ave.prototype.producir = function () {
			console.log('Cada ave produce a su manera.');
        } 

		return Ave;
	}
)();
