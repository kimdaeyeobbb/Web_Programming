// type ForOverLoading = {
//     (a: number, b: number): number
//     (a: number, b: number, c: number): number
// }
//
// const newAdd:ForOverLoading = (a,b,c?:number) => {
//     if(c) {
//         return a+b+c;
//     }
//     return a+b;
// }
//
// console.log(newAdd(1,2,3))
// console.log(newAdd(1,2))


// 인자 개수에 상관없이 받는 함수
type ForOverLoading2 = {
    (a: number, b: number): number
    (a:number, b:number, ...args: number[]): number
}

const newAdd: ForOverLoading2 = (a,b, ...args:number[]) => {
    let sum = a+b;
    args.forEach(arg => sum+=arg)
    return sum
}

console.log(newAdd(1,2,3,4,5,6,7,8,9,10]))