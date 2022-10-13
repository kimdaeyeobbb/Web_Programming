// https://school.programmers.co.kr/learn/courses/30/lessons/49993


"CAZGBEUDKKCAEEEEEBEEEDEEEEEEEEEEEE".match(/[CBD]/g)  // ['C','B','D','C','B','D'] 

// https://school.programmers.co.kr/learn/courses/30/lessons/49993

// ["BACDE", "CBADF", "AECB", "BDA"]

"CAZGBEUDKKCAEEEEEBEEEDEEEEEEEEE"

    ("CAZGBEUDKKA").match(/[CBD]/g)
    ("CEEEEEBEEEDEEEEEEEEE").match(/[CBD]/g)

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data) {
    // console.log(i)
    // console.log(i.match(/[CBD]/g))
    for (i of i.match(/[CBD]/g)) {

    }
}

// 코딩이 아니라 알고리즘만 설명한 것입니다.
// [원본, 매핑문자열]
[['C']['B']['D']]
[['C', 'B']['B', 'C']['D', 'D']]
[['C', 'C']['B', 'B']['D', 'D']] 결과 += 1
[['C', 'C']['B', 'B']['D', '']]  결과 += 1
[['C', 'B']['B', 'D']['D', '']]

const zip = (a, b) => a.map((v, i) => [v, b[i]])
zip([10, 20, 30], [1, 2, 3, 4])
zip([10, 20, 30], [1, 2])

/////////////////////

const zip = (a, b) => a.map((v, i) => [v, b[i]])

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data) {
    for ([x, y] of zip('CBD'.split(''), i.match(/[CBD]/g))) {
        console.log(x, y)
    }
    console.log('----------')
}