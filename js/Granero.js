var Granero = (
	function () {
		function Granero(pmaiz, pleche, pagua, ppasto, phuevos, palimento, ptocino) {
            this.cantidadMaiz = pmaiz;
            this.cantidadLeche = pleche;
            this.cantidadAgua = pagua;
            this.cantidadPasto = ppasto;
            this.cantidadHuevos = phuevos;
            this.cantidadAlimento = palimento;
            this.cantidadTocino = ptocino;
		}
		//Class Methods
		Granero.prototype.reportarInventario = function () {
                  var mensaje = 'Maíz existente: ' + this.cantidadMaiz + '<br>' + 'Leche existente: ' + this.cantidadLeche + '<br>' + 'Agua existente: ' + this.cantidadAgua + '<br>' + 'Pasto existente: ' + this.cantidadPasto + '<br>' + 'Huevos existente: ' + this.cantidadHuevos + '<br>' + 'Alimento existente: ' + this.cantidadAlimento + '<br>' + 'Tocino existente: ' + this.cantidadTocino;

                  return mensaje;
		}

		return Granero;
	}
)();
