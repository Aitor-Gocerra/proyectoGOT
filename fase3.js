import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Guerrero } from "./clases/Personaje/Especiales/guerrero.js";
import { Rey } from "./clases/Personaje/Especiales/rey.js";
import { Consejero } from "./clases/Personaje/Especiales/consejero.js";
import { Batalla } from "./clases/batalla.js";

const casaStark = new Casa("Stark", "El inverno se acerca");
const casaLannister = new Casa("Lannister", "Un Lannister siempre paga sus deudas");

const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del norte", 80);
const espadaLarga = new Arma("Espada Larda", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Casa", 60);

// === GUERREROS DE LA CASA STARK ===

const jon = new Guerrero("Jon Snow", 25, true, "Stark", garra);
const arya = new Guerrero("Arya Stark", 18, true, "Stark", aguja);
const robb = new Guerrero("Robb Stark", 22, false, "Stark", espadaLarga);
const brienne = new Guerrero("Briene de Tarth", 30, true, "Stark", hacha);

// === GUERREROS DE LA CASA LANNISTER ===

const jaime = new Guerrero("Jaime Lannister", 32, true, "Lannister", filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, "Lannister", lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, "Lannister", ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, "Lannister", hacha);

// === AÑADIR PERSONAJES A LA CASAS ===

casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

casaStark.visualizarMiembros();
casaLannister.visualizarMiembros();

const batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark,casaLannister);

batallaBastardos.mostrarGuerrerosMuertosEnCombate();