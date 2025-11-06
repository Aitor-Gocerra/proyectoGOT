import { Casa } from "./clases/casa.js";
import { Personaje } from "./clases/Personaje/personaje.js";
import { Reino } from "./clases/reino.js";
import { Arma } from "./clases/arma.js";

import { Guerrero } from "./clases/Personaje/Especiales/guerrero.js";
import { Consejero } from "./clases/Personaje/Especiales/consejero.js";
import { Rey } from "./clases/Personaje/Especiales/rey.js";

const poniente = new Reino();
poniente.nombre = "El reino de Poniente";
console.log(poniente.nombre);

Personaje.reinoActual = poniente;

poniente.agregarCasa("Casa Stark");
poniente.agregarCasa("Casa Lannister");

const garra = new Arma("Garra", 25, "Espada");
const jon = new Guerrero("Jon Snow", 23, true, "Casa Stark", garra);

jon.saludo();
jon.atacar();
jon.entrenar();

const tyrion = new Consejero("Tyrion Lannister", 32, true, "Casa Lannister");

tyrion.saludo();
tyrion.atacar();
const robert = new Rey("Robert Baratheon", 45, true, "Casa Baratheon");
tyrion.aconsejar(robert);

robert.saludo();
robert.atacar();
