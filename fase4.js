import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Guerrero } from "./clases/Personaje/Especiales/guerrero.js";
import { Consejero } from "./clases/Personaje/Especiales/consejero.js";
import { Batalla } from "./clases/batalla.js";
import { Dragon } from "./clases/Personaje/Especiales/dragon.js";
import { Khaleesi } from "./clases/Personaje/Especiales/khaleesi.js";
import { Caminante_Blanco } from "./clases/Personaje/Especiales/caminanteBlanco.js";

// --------------------------------------------------
// 1. Crear casas y armas
// --------------------------------------------------
const casaStark = new Casa("Stark", "El invierno se acerca");
const garra = new Arma("Garra", 50, "acero valyrio");
const hacha = new Arma("Hacha del Norte", 40, "hierro");

// --------------------------------------------------
// 2. Crear guerreros de la Casa Stark
// --------------------------------------------------
const jon = new Guerrero("Jon Snow", 25, true, "Stark", garra);
const tormund = new Guerrero("Tormund", 30, true, "Stark", hacha);
const edd = new Guerrero("Edd", 28, true, "Stark", hacha);
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(tormund);
casaStark.agregarMiembro(edd);

// --------------------------------------------------
// 3. Crear a Khaleesi y sus dragones
// --------------------------------------------------
const Tyrion = new Consejero();
const drogon = new Dragon("Drogon", 60, "fuego");
const viserion = new Dragon("Viserion", 55, "fuego");
const rhaegal = new Dragon("Rhaegal", 50, "fuego");
const khaleesi = new Khaleesi("Daenerys Targaryen", 29, true, "Casa Targaryen",[drogon, viserion, rhaegal],Tyrion);

// --------------------------------------------------
// 4. Crear ejército de Caminantes Blancos
// --------------------------------------------------
const caminante1 = new Caminante_Blanco("Caminante 1", 35);
const caminante2 = new Caminante_Blanco("Caminante 2", 40);
const caminante3 = new Caminante_Blanco("Caminante 3", 30);
const caminante4 = new Caminante_Blanco("Caminante 4", 50);

const ejercitoCaminantes = [caminante1, caminante2, caminante3, caminante4];

// --------------------------------------------------
// 5. Función para iniciar la batalla final
// --------------------------------------------------
const batallaFinal = new Batalla();
batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);