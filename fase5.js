import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Guerrero } from "./clases/Personaje/Especiales/guerrero.js";
import { NoMuerto } from "./clases/Personaje/Especiales/noMuerto.js";
import { Batalla } from "./clases/batalla.js";

// ===== CREAR CASAS =====
const casaStark = new Casa("Stark", "Se acerca el invierno", 1263);
const casaLannister = new Casa("Lannister", "Oye mi rugido", 7263);
const casaTargaryen = new Casa("Targaryen", "Fuego y Sangre", 300);
const casaBaratheon = new Casa("Baratheon", "Nuestra es la furia", 4832);
const casaCaminanteBlanco = new Casa("Caminantes Blancos", "El invierno ha llegado");

// ===== CREAR ARMAS =====
const espadaLargo = new Arma("Garra", 25, "Espada");
const espadaValyria = new Arma("Luz del Alba", 30, "Espada");
const hacha = new Arma("Destripadora", 28, "Hacha");
const lanza = new Arma("Lanza del Rey", 22, "Lanza");

// ===== CREAR ARMAS CAMINANTES BLANCOS =====
const lanzaHielo = new Arma("Lanza de Hielo", 30, "Lanza");
const espadaHielo = new Arma("Espada Congelada", 28, "Espada");
const garraHelada = new Arma("Garra Helada", 26, "Espada");
const tridenteHielo = new Arma("Tridente Gélido", 32, "Tridente");

// ===== CREAR GUERREROS =====
const jonSnow = new Guerrero("Jon Snow", 25, true, "Stark", espadaLargo);
const robbStark = new Guerrero("Robb Stark", 22, true, "Stark", new Arma("Hielo", 27, "Espada"));

const jaimeLannister = new Guerrero("Jaime Lannister", 35, true, "Lannister", espadaValyria);
const gregoryClegane = new Guerrero("La Montaña", 40, true, "Lannister", hacha);

const daenerys = new Guerrero("Daenerys Targaryen", 23, true, "Targaryen", new Arma("Daga de Dragón", 20, "Daga"));
const jorah = new Guerrero("Jorah Mormont", 45, true, "Targaryen", lanza);

const robert = new Guerrero("Robert Baratheon", 42, true, "Baratheon", new Arma("Martillo de Guerra", 35, "Martillo"));

// ===== CREAR CAMINANTES BLANCOS =====
const reyNoche = new NoMuerto("Rey de la Noche", 999, "Caminantes Blancos", lanzaHielo);
const muerto1 = new NoMuerto("Viento Helado", 600, "Caminantes Blancos", espadaHielo);
const muerto2 = new NoMuerto("Sombra del Invierno", 550, "Caminantes Blancos", garraHelada);
const muerto3 = new NoMuerto("Susurro Gélido", 500, "Caminantes Blancos", tridenteHielo);
const muerto4 = new NoMuerto("Ojo Azul", 700, "Caminantes Blancos", new Arma("Espada de Escarcha", 29, "Espada"));
const muerto5 = new NoMuerto("Mano del Hielo", 650, "Caminantes Blancos", new Arma("Maza Invernal", 33, "Maza"));

// ===== AGREGAR MIEMBROS =====
casaStark.agregarMiembro(jonSnow);
casaStark.agregarMiembro(robbStark);

casaLannister.agregarMiembro(jaimeLannister);
casaLannister.agregarMiembro(gregoryClegane);

casaTargaryen.agregarMiembro(daenerys);
casaTargaryen.agregarMiembro(jorah);

casaBaratheon.agregarMiembro(robert);

casaCaminanteBlanco.agregarMiembro(reyNoche);
casaCaminanteBlanco.agregarMiembro(muerto1);
casaCaminanteBlanco.agregarMiembro(muerto2);
casaCaminanteBlanco.agregarMiembro(muerto3);
casaCaminanteBlanco.agregarMiembro(muerto4);
casaCaminanteBlanco.agregarMiembro(muerto5);

// ===== Visualizar NO MUErtos ======

casaCaminanteBlanco.visualizarMiembros();

const batalla = new Batalla();
batalla.iniciarBatalla(casaStark, casaTargaryen);
batalla.mostrarGuerrerosMuertosEnCombate();

// ===== Añadir miembros muertos al array de los NO MUERTOS ====

batalla.guerrerosMuertos.forEach(muerto => {
    casaCaminanteBlanco.agregarMiembro(muerto);
});


casaCaminanteBlanco.visualizarMiembros();
