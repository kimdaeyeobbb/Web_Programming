let a, b, c
[a, b] = [10, 20]
console.log(a, b)  // 10 20

let one, two, three
[one, two, three] = '010-5044-2903'.split('-')
console.log(one, two, three)


let one1, two1, three1, four1
[one1, two1, three1, four1] = '010-5044-2903-0000'.split('-')

let one2, two2, three2, four2
[one2, two2, three2, ...four2] = '010-5044-2903-01-02-03'.split('-')
console.log(one2, two2, three2, four2)  // 010 5044 2903 [ '01', '02', '03' ]
