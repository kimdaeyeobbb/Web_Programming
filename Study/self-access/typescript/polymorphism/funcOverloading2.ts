type SpecialAdd =
    (a:number| string, b: number | string) => number | string

const addFunc: SpecialAdd = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a+b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a+b;
    } else {
        throw TypeError
    }
}

console.log(addFunc(1,2))
console.log(addFunc('a','b'))
console.log(addFunc(1,'b'))