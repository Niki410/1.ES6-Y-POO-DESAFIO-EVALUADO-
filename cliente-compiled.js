import { Impuestos } from './impuestos.js';
export class Cliente {
  constructor(nombre, impuestos) {
    this._nombre = nombre;
    this._impuestos = impuestos;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  calcularImpuesto() {
    const baseImponible = this._impuestos.montoBrutoAnual - this._impuestos.deducciones;
    return baseImponible * 0.21;
  }
}
