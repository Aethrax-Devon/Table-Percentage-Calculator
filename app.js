function totalPercent(arr, overall) {
    let num = [...arr]
    let total = []
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        percent = (num[i] / overall) * 100
        total.push(percent.toFixed(2))
        for (b = 0; b < total.length; b++) {
            let newTotal = total.map(Number)
            sum = newTotal.reduce((a, b) => a + b, 0)
        }
    }
    return `Array: ${total} \nTotal: ${sum}`
}

function total(arr) {
    let num = [...arr]
    return num.reduce((a, b) => a + b, 0)
}

console.log(totalPercent([25, 1, 6, 10], 42))
console.log(total([184, 230, 247, 227]))
