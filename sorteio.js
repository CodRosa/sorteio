function sorteio (num1,num2) {
    if(num1 > num2) [num2,num1] = [num1,num2]
    return new Promise(sorteio => {
        const escolher = num2 * num1 
        const aleatorio= parseInt(Math.random() * escolher) 
        sorteio(aleatorio)
    })
}
sorteio(1,10)
.then(num => num* num)
.then(num => `O númeo gerado foi ${num}`)
.then(console.log)