import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Guerrero } from "./clases/Personaje/Especiales/guerrero.js";
import { Rey } from "./clases/Personaje/Especiales/rey.js";
import { Consejero } from "./clases/Personaje/Especiales/consejero.js";
import { Batalla } from "./clases/batalla.js";

// ===== CREAR CASAS =====
const casaStark = new Casa("Stark", "Se acerca el invierno");
const casaLannister = new Casa("Lannister", "Oye mi rugido");
const casaTargaryen = new Casa("Targaryen", "Fuego y Sangre");
const casaBaratheon = new Casa("Baratheon", "Nuestra es la furia");

// ===== CREAR ARMAS =====
const espadaLargo = new Arma("Garra", 25, "Espada");
const espadaValyria = new Arma("Luz del Alba", 30, "Espada");
const hacha = new Arma("Destripadora", 28, "Hacha");
const lanza = new Arma("Lanza del Rey", 22, "Lanza");

// ===== CREAR GUERREROS =====
const jonSnow = new Guerrero("Jon Snow", 25, true, "Stark", espadaLargo);
const robbStark = new Guerrero("Robb Stark", 22, true, "Stark", new Arma("Hielo", 27, "Espada"));

const jaimeLannister = new Guerrero("Jaime Lannister", 35, true, "Lannister", espadaValyria);
const gregoryClegane = new Guerrero("La Montaña", 40, true, "Lannister", hacha);

const daenerys = new Guerrero("Daenerys Targaryen", 23, true, "Targaryen", new Arma("Daga de Dragón", 20, "Daga"));
const jorah = new Guerrero("Jorah Mormont", 45, true, "Targaryen", lanza);

const robert = new Guerrero("Robert Baratheon", 42, true, "Baratheon", new Arma("Martillo de Guerra", 35, "Martillo"));

// ===== AGREGAR MIEMBROS =====
casaStark.agregarMiembro(jonSnow);
casaStark.agregarMiembro(robbStark);

casaLannister.agregarMiembro(jaimeLannister);
casaLannister.agregarMiembro(gregoryClegane);

casaTargaryen.agregarMiembro(daenerys);
casaTargaryen.agregarMiembro(jorah);

casaBaratheon.agregarMiembro(robert);

// ===== PRUEBAS DEL SISTEMA DE ALIANZAS =====

console.log("=".repeat(50));
console.log("        SISTEMA DE ALIANZAS - PRUEBAS");
console.log("=".repeat(50));

// 1. Formar alianzas
casaStark.formarAlianza(casaTargaryen);
casaLannister.formarAlianza(casaBaratheon);

// 2. Intentar formar alianza duplicada
casaStark.formarAlianza(casaTargaryen);

// 3. Intentar alianza consigo misma
casaStark.formarAlianza(casaStark);

// 4. Mostrar alianzas
casaStark.mostrarAlianzas();
casaLannister.mostrarAlianzas();
casaTargaryen.mostrarAlianzas();

// 5. Intentar batalla entre aliados
const batalla1 = new Batalla();
batalla1.iniciarBatalla(casaStark, casaTargaryen); // Debe cancelarse

// 6. Batalla permitida (no son aliados)
const batalla2 = new Batalla();
batalla2.iniciarBatalla(casaStark, casaLannister); // Debe ejecutarse
batalla2.mostrarGuerrerosMuertosEnCombate();

// 7. Romper alianza
casaStark.romperAlianza(casaTargaryen);
casaStark.mostrarAlianzas();

// 8. Ahora sí pueden luchar
const batalla3 = new Batalla();
batalla3.iniciarBatalla(casaStark, casaTargaryen); // Ahora sí se ejecuta

// 9. Batalla con ayuda de aliados
console.log("\n" + "=".repeat(50));
console.log("      BATALLA CON REFUERZOS ALIADOS");
console.log("=".repeat(50));

casaStark.formarAlianza(casaBaratheon); // Stark se alía con Baratheon
// Ahora: Stark+Baratheon vs Lannister+Baratheon ???
// Baratheon está aliado con ambos, no ayudará a ninguno

const batalla4 = new Batalla();
batalla4.iniciarBatallaConAliados(casaStark, casaLannister);
batalla4.mostrarGuerrerosMuertosEnCombate();
