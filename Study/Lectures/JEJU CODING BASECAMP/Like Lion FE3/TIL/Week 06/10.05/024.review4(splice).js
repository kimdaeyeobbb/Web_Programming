const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(-3, 2, "bread");
console.log(cafe);  // [ 'coffee', 'bread', 'cookie' ]


const cafe2 = ["coffe", "cake", "tea", "cookie"];
console.log(cafe2.splice(1, 2));   // [ 'cake', 'tea' ]
console.log(cafe2);   // [ 'coffe', 'cookie' ]
