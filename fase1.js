import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/Personaje/personaje.js";
import { Reino } from "./clases/reino.js";
import { Arma } from "./clases/arma.js";

const poniente = new Reino();
poniente.nombre = "El reino de Poniente";
console.log(poniente.nombre);

Personaje.reinoActual = poniente;

poniente.agregarCasa("Casa Stark");
poniente.agregarCasa("Casa Lannister");

const garra = new Arma("Garra", 25, "Espada");
const jon = new Personaje("Jon Snow", 23, true, "Casa Stark");
jon.arma = garra;

const aguja = new Arma("Aguja", 15, "Estilete")
const arya = new Personaje("Arya Stark", 16, true, "Casa Stark");
arya.arma = aguja;

const jaime = new Personaje("Jaime Lannister", 25, true, "Casa Lannister");

poniente.rey = jaime;
poniente.visualizarRey();

poniente.visualizarCasas();

const stark = new Casa("Casa Stark", "Winter is coming");
stark.agregarMiembro(jon);
stark.agregarMiembro(arya);
stark.visualizarMiembros();

console.log("Presentaciones");
jon.saludo();
arya.saludo();
jaime.saludo();

console.log("Armas: ");
console.log(garra.nombre, garra.daño, garra.tipo);
console.log(`Nombre: ${aguja.nombre} (${aguja.tipo}) - Daño: ${aguja.daño}`);

