function solution(arr, intervals) {
    return arr.slice(intervals[0][0],intervals[0][1]+1).concat(arr.slice(intervals[1][0], intervals[1][1]+1))
}

console.log(solution([1, 2, 3, 4, 5],[[1, 3], [0, 4]]	))

const solution2 = (arr, intervals) => {
    const [[a1,b1],[a2,b2]] = intervals
    return [...arr.slice(a1,b1+1), ...arr.slice(a2,b2+1)]
}

console.log(solution2([1,2,3,4,5], [[1,3],[0,4]]))

const arr1 = [1,2,3,4]
const arr2 = arr1
const arr3 = [...arr1]
console.log(arr1 === arr2)
console.log(arr1 === arr3)