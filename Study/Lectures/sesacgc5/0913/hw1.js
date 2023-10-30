for (let i=0.1; i<1; i = i+0.1){
    console.log(Number(i.toFixed(1)))
}

console.log(((0.21354+0.1).toFixed(5)))
console.log((Math.round((0.21354+0.1)*100000))/100000)
console.log(Math.round((0.14+0.28)*100)/100)


function addPoint(x, y) {
    const num1 = x.toString()
    const num2 = y.toString()
    return num1
}

console.log(addPoint(0.14, 0.28))
