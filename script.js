//Random style
var caso = Math.floor(Math.random() * 4)

switch(caso){
  case 0:
    // verde
    var fundo = "#499B46"
    var texto = "#ffffff"
    document.querySelector('html').style.backgroundColor = fundo
    document.querySelector('.time').style.color = texto + 66;
    document.documentElement.style.setProperty('--text-color', fundo);
    document.documentElement.style.setProperty('--back-color', texto);
    break

  case 1:
    // azul claro
    var fundo = "#ccf2ff"
    var texto = "#3a3a3a"
    document.querySelector('html').style.backgroundColor = fundo
    document.querySelector('.clock').style.border = "10px solid " + texto
    document.querySelector('.time_text').style.color = texto
    document.querySelector('.time').style.color = texto + 66;
    document.documentElement.style.setProperty('--text-color', fundo);
    document.documentElement.style.setProperty('--back-color', texto);
    break

  case 2:
    // laranja claro
    var fundo = "#FDCF91"
    var texto = "#3a3a3a"
    document.querySelector('html').style.backgroundColor = fundo
    document.querySelector('.clock').style.border = "10px solid " + texto
    document.querySelector('.time_text').style.color = texto
    document.querySelector('.time').style.color = texto + 66;
    document.documentElement.style.setProperty('--text-color', fundo);
    document.documentElement.style.setProperty('--back-color', texto);
    break

  case 3:
    // vermelho
    var fundo = "#F26363"
    var texto = "#ffffff"
    document.querySelector('html').style.backgroundColor = fundo
    document.querySelector('.time').style.color = texto + 66;
    document.documentElement.style.setProperty('--text-color', fundo);
    document.documentElement.style.setProperty('--back-color', texto);
    break
}

// Dinâmica do relogio

function setHandHour() {
  const now = new Date()
  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * 360 + 180
  document.querySelector('.handHour').style.transform = `rotate(${hoursDegrees}deg)`
}

function setHandMin() {
  const now = new Date()
  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 180
  document.querySelector('.handMin').style.transform = `rotate(${minutesDegrees}deg)`
}

function setHandSec() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 180
  document.querySelector('.handSec').style.transform = `rotate(${secondsDegrees}deg)`
}

function setTime() {
  const now = new Date()
  document.querySelector('span.time > p').innerHTML = now.toTimeString().slice(0, 8)
}

function setTimeText() {
  const now = new Date()
  const hours = now.getHours()

  if(hours > 00 && hours <= 6){
    document.querySelector('span.time_text > p').innerHTML = "Vá dormir!"
  }
  if(hours > 6 && hours <= 11){
    document.querySelector('span.time_text > p').innerHTML = "Bora que bora trabaia"
  }
  if(hours > 11 && hours <= 13){
    document.querySelector('span.time_text > p').innerHTML = "Almoçar que é bom ngm quer né"
  }
  if(hours > 13 && hours <= 17){
    document.querySelector('span.time_text > p').innerHTML = "Trabaia dnv pq a vida n ta facil"
  }
  if(hours > 17 && hours <= 21){
    document.querySelector('span.time_text > p').innerHTML = "Ripa na xulipa"
  }

}

setInterval(setHandHour)
setInterval(setHandMin)
setInterval(setHandSec)
setInterval(setTime)
setInterval(setTimeText)
