import { Cliente } from './cliente.js';
import { Impuestos } from './impuestos.js';

const impuestosDeNicole = new Impuestos(100000, 20000);
const nicole = new Cliente("Nicole", impuestosDeNicole);

console.log(`El impuesto a pagar por ${nicole.nombre} es de $${nicole.calcularImpuesto()}`);
