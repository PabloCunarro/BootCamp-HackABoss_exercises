'use strict'

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],   //MAXIMO
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],          //MINIMO
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
]

// Pablo Fernández JSB08VI _ Ejercicio 2 - JS

// "repeatedMinMax" recibe un array de objetos con equipos ordenados por puntuación total,
// monta un array con esas puntuaciones, cuenta el número de repeticiones por cada extremo
// y devuelve un array con el número de totales mínimos y máximos repetidos.

const repeatedMinMax=(orderedScores)=>{

  const scoresArray=[]
  orderedScores.forEach(score=>scoresArray.push(score.totalScore))

    let numMinimos=0
    scoresArray.forEach(element=>{
        if(element==orderedScores[0].totalScore){numMinimos++}
    })

    let numMaximos=0
    const reverseArray=scoresArray.reverse()
    reverseArray.forEach(element=>{
        if(element==orderedScores[orderedScores.length-1].totalScore){numMaximos++}
    })

  const minMaxArray=[]
  minMaxArray.push(numMinimos)
  minMaxArray.push(numMaximos)

  return minMaxArray

}

// "orderMyArray" recibe un array de objetos con los equipos y las puntuaciones,
// calcula las puntuaciones totales y devuelve un array de objetos
// "orderedScores" con los equipos ordenados de menor a mayor puntuación total.

const orderMyArray=(array)=>{

    // Array "totalScores" con los equipos y sus puntuaciones totales

    let totalScores=[], contador=-1
    array.forEach(objecTeam=>{
      contador+=1
      totalScores[contador]={}
      totalScores[contador]['team']=objecTeam.equipo
      const reducer=(accumulator,currentValue)=>accumulator+currentValue
      totalScores[contador]['totalScore']=objecTeam.puntos.reduce(reducer)
    })

    // Array "orderedScores" con puntuaciones/equipos ordenados

    let orderedScores=totalScores.sort((a,b)=>a.totalScore-b.totalScore)

    return orderedScores
}

// La función "minMax" recibe el array con las "puntuaciones" de los equipos,
// envía este array a la función "orderMyArray", que calcula los totales y los ordena,
// llama a la función "repeatedMinMax", que evalúa si hay totales mínimo/máximo repetidos,
// y monta la salida por consola según la casuística de repeticiones en los resultados
    // Los bucles imprimen varios equipos cuando hay empates en puntuaciones totales.
    // Veanse los test en el directorio raiz del ejercicio

const minMax=(puntuaciones)=>{

    const orderedScores=orderMyArray(puntuaciones)
    const size=orderedScores.length-1

    const max=repeatedMinMax(orderedScores)[1]
    const min=repeatedMinMax(orderedScores)[0]

    if (min===max && min===size+1) {
      console.log('Todos los equipos tienen la misma puntuación total: ',orderedScores[0].totalScore,' puntos')
    }else{

      max>1
      ? console.log(`Los ${max} equipos con mayor puntuación total son:`)
      : console.log(`El equipo con mayor puntuación total es:`)

      for (let cycle=0;cycle<=max-1;cycle++){
        console.log(orderedScores[size-cycle].team + ', con ' + orderedScores[size-cycle].totalScore + ' puntos.') 
      }
      console.log('')

      min>1
      ? console.log(`Los ${min} equipos con menor puntuación total son:`)
      : console.log(`El equipo con menor puntuación total es:`)

      for (let cycle=0;cycle<min;cycle++){
        console.log(orderedScores[cycle].team + ', con ' + orderedScores[cycle].totalScore + ' puntos.') 
      }
  }
}

minMax(puntuaciones)
