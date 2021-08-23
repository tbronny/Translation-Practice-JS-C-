// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const Roll = (min, max) => {
    min = Math.ceil(1)
    max = Math.floor(6)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 10; i++) {
    const die1 = Roll()
    const die2 = Roll()

    let message = `${die1} + ${die2} == ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }

    console.log(message)
}
