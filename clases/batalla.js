import { Casa } from "./casa.js";
import { Guerrero } from "./Personaje/Especiales/guerrero.js";

export class Batalla {
    #guerrerosMuertos = [];

    iniciarBatalla (casaA, casaB){
        
        let guerrerosCasaA = [];
        let guerrerosCasaB = [];

        // Verifica que los parámetros sean instancias de Casa
        if(casaA instanceof Casa && casaB instanceof Casa){
            guerrerosCasaA = casaA.guerrerosDisponibles();
            guerrerosCasaB = casaB.guerrerosDisponibles();
        }

        // Bucle principal de la batalla: continúa mientras haya guerreros en ambas casas
        while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
            const guerreroA = guerrerosCasaA[0]; // Selecciona el primer guerrero disponible de la casa A
            const guerreroB = guerrerosCasaB[0];

            // Guerrero A ataca
            guerreroA.ataca(guerreroB);
            
            // Verificar si guerrero B murió
            if (guerreroB.vida <= 0) {
                this.#guerrerosMuertos.push(guerreroB);
                console.log(`${guerreroB.nombre} ha muerto`);
                guerrerosCasaB.shift();
                continue; // Salta al siguiente turno, el guerrero A sigue vivo y puede atacar de nuevo
            }else{
                guerreroB.ataca(guerreroA);
                
                // Verificar si guerrero A murió
                if (guerreroA.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroA);
                    console.log(`${guerreroA.nombre} ha muerto`);
                    guerrerosCasaA.shift();
                }
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

    batallaFinal(casa, khaleesi, ejercitoCaminantes){
        let guerrerosCasa = [];

        if(casa instanceof Casa){
            guerrerosCasa = casa.guerrerosDisponibles();
        }
    }

    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros que han muerto en combate:");
        // Recorre la lista de guerreros muertos y muestra su nombre
        this.#guerrerosMuertos.forEach(guerrero => console.log(`- ${guerrero.nombre}`));
    }
}