'use strict'

// Pablo Fernández JSB08VI - Ejercicio 1 _ JS

const guessTheNumber=(tries,maxRandom)=>{

    // Genera contraseña oculta aleatoria entre 0 y el rango indicado por el usuario en parámetros.

    let hiddenNumber=Math.floor(Math.random()*maxRandom)
    console.log ('(PARA TEST) Número random generado: ',hiddenNumber) // Línea para control de funcionamiento en consola

    // Bucle -> Con Prompt y Alert pide cifras al usuario. El número de intentos es parámetro de función.
    // Se informa al usuario de si la cifra debe ser mayor o menor, del rango barrido y de los intentos restantes.

    let minUser=0, maxUser=maxRandom

    for(let tryCounter=0;tryCounter<=tries-1;tryCounter++){

        let userTry=prompt(`Dame número entre ${minUser} y ${maxUser} (tienes ${tries-tryCounter} intentos):`)

        console.log(`CONTROL_Intento ${tryCounter+1}: `, userTry)  // Línea para control de funcionamiento en consola

        if(userTry>minUser && userTry<maxUser){
            userTry>=hiddenNumber? maxUser=userTry:minUser=userTry
        }

        if(userTry==hiddenNumber) {
            tryCounter===0
                ?alert(`¡¡ Enhorabuena !! , has acertado A LA PRIMERA 😮`)
                :alert(`¡¡ Enhorabuena !! , has acertado el número en ${tryCounter+1} intentos 🙂`)
            return
        }else{
            if(tryCounter===tries-1){
                alert('Lo siento, has agotado tus intentos ☹️')
            }else{
                userTry>hiddenNumber? alert('Inténtalo con una cifra más baja'):alert('Prueba con un número mayor')
            }
        }

    }
}

guessTheNumber(5,100)