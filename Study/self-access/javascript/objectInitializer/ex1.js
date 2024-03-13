const a = 'zzz', b = 123, c = true;
const obj = { a, b, c };
console.log(obj); // { a: 'zzz', b: 123, c: true }


//  computed property
const prop = 'foo'
const obj2 = {
    [prop]: 'dae',
    ['y'+'ob']: 'yeob'
}
console.log(obj2)