function doubleArray<T extends any[]> (input: T){
    return [...input, ...input]
}

let x: string = "hello"
let y: number = 10

console.log(doubleArray([x, y]))