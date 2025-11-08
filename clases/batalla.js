import { Casa } from "./casa.js";
import { Guerrero } from "./Personaje/Especiales/guerrero.js";

export class Batalla {
    #guerrerosMuertos = [];

    iniciarBatalla (casaA, casaB){

        let guerrerosCasaA = [];
        let guerrerosCasaB = [];

        if(casaA instanceof Casa){
            guerrerosCasaA = casaA.miembros.filter(miembro => miembro instanceof Guerrero);
        }
        
        if(casaB instanceof Casa){
            guerrerosCasaB = casaB.miembros.filter(miembro => miembro instanceof Guerrero);
        }

        while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
            const guerreroA = guerrerosCasaA[0];
            const guerreroB = guerrerosCasaB[0];

            guerreroA.ataca(guerreroB);
            guerreroB.ataca(guerreroA);

            if (guerreroA.vida <= 0) {
                this.#guerrerosMuertos.push(guerreroA);
                console.log(`${guerreroA.nombre} ha muerto`);
                guerrerosCasaA.shift(); 
            }

            if (guerreroB.vida <= 0) {
                this.#guerrerosMuertos.push(guerreroB);
                console.log(`${guerreroB.nombre} ha muerto`);
                guerrerosCasaB.shift(); 
            }
        }

        if (guerrerosCasaA.length > 0) {
            console.log(`La casa ${casaA.nombre} gana la batalla.`);
        } else if (guerrerosCasaB.length > 0) {
            console.log(`La casa ${casaB.nombre} gana la batalla.`);
        } else {
            console.log("¡Ambas casas han caído en combate!");
        }
    }

    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros que han muerto en combate:");
        this.#guerrerosMuertos.forEach(guerrero => console.log(`- ${guerrero.nombre}`));
    }
}