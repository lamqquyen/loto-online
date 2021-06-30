
const random = require('lodash/random')

function randomGeneratetor() {
  const numbers = {}
  
  Array.from(Array(90).keys())
    .map((value) => {
      const number = value + 1
      return number < 10 ? `0${number}` : number.toString()
    })
    .forEach((number) => {
      numbers[number] = parseInt(number, 10)
    })
  let randomIndex, randomNumber, column
  for (let card = 0; card < 2; card++) {
    console.log('\n\nCards: \n\n')
    for (let i = 0; i < 9; i++) {
      const first = Array.from(Array(10).keys())
      for (let j = 0; j < 5; j++) {
        while (1) {
          const firstIndex = random(0, first.length)
          const index = `${first[firstIndex]}${firstIndex !== 9 ? random(0, 9) : 0}`
  
          if (numbers[index]) {
            randomNumber = numbers[index]
            column = Math.floor(randomNumber / 10)
            first.splice(firstIndex, 1)
            delete numbers[index]
            break
          }
        }
        console.log(`"${i}-${column}": {value: ${randomNumber}, isClicked: false},\n`)
      }
    }
  }
}

randomGeneratetor();
