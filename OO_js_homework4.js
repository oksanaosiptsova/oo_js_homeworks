function checkProbabilityTheory(count) {
    let evenNubmers = 0;
    let oddNumbers = 0;
    let n = 0;
    for (n = 0; n < count; n++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; 
        if (randomNumber % 2 === 0) {
            evenNubmers ++
        } else {
            oddNumbers ++
        }
    }
    let evenPercent = (evenNubmers/count) * 100;
    let oddPercent = 100 - evenPercent;
    let globalPercent = `${evenPercent.toFixed(0)}% до ${oddPercent.toFixed(0)}%`;
    return `Кількість згенерованих чисел: ${count} \n
    Парних чисел: ${evenNubmers} \n
    Непарних чисел: ${oddNumbers} \n
    Відсоток парних до непарних: ${globalPercent}`
}
let result = checkProbabilityTheory(78696);
console.log (result)