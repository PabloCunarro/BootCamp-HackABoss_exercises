'use strict'

// Pablo Fernández JSB08VI _ Ejercicio 3 - DOM

// Mecanismo del reloj

const theTime=()=>{
    setInterval(()=>{
        let thisMoment=new Date()
        let hour=thisMoment.getHours()
        let minute=thisMoment.getMinutes()
        let second=thisMoment.getSeconds()
            if (hour<10) {hour='0'+hour}
            if (minute<10) {minute='0'+minute}
            if (second<10) {second='0'+second}
        let clock= hour + " : "  + minute + " : " + second
        spanClock.textContent=clock
    },1000)
}

// Estructura HTML del reloj en el DOM

const body=document.querySelector('body')
const divClock=document.createElement('div')
divClock.id='clock'
const pClock=document.createElement('p')
divClock.appendChild(pClock)
const spanTitle=document.createElement('span')
spanTitle.textContent='Hora actual _ '
pClock.appendChild(spanTitle)
const  spanClock=document.createElement('span')
spanClock.id='the-time'
pClock.appendChild(spanClock)
body.appendChild(divClock)

theTime()





