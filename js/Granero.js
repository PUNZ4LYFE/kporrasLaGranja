var Granero = (
	function () {
		function Granero() {
            this.cantidadMaiz = 0;
            this.cantidadLeche = 0;
            this.cantidadAgua = 0;
            this.cantidadPasto = 0;
            this.cantidadHuevos = 0;
            this.cantidadAlimento = 0;
            this.cantidadTocino = 0;
		}
		//Class Methods
		Granero.prototype.reportarInventario = function () {
                  var mensaje = 'Maíz existente: ' + this.cantidadMaiz + '<br>' + 'Leche existente: ' + this.cantidadLeche + + '<br>' + 'Agua existente: ' + this.cantidadAgua + '<br>' + 'Pasto existente: ' + this.cantidadPasto + '<br>' + 'Huevos existente: ' + this.cantidadHuevos + '<br>' + 'Alimento existente: ' + this.cantidadAlimento + '<br>' + 'Tocino existente: ' + this.cantidadTocino;

                  return mensaje;
		}

		return Granero;
	}
)();
