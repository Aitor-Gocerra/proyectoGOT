import { Casa } from "./casa.js";
import { Personaje } from "./personaje.js";
import { Reino } from "./reino.js";

const casaStark = new Casa("Casa Stark", "Winter is Coming");

const ned = new Personaje("Eddard Stark", 40, false, "Casa Stark");
const arya = new Personaje("Arya Stark", 16, true, "Casa Stark");
const jon = new Personaje("Jon Snow", 23, true, "Casa Stark");

casaStark.agregarMiembro(ned);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(jon);

casaStark.visualizarMiembros();

const rey = new Reino("Dorne", ned);

rey.visualizarRey();