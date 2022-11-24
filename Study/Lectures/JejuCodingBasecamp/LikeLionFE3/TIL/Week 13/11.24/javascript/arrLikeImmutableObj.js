const aespa = ["카리나", "윈터", "지젤", "닝닝"];
const aespa2 = aespa.map(i => (`${i}💖`))
console.log(aespa2)

/* forEach는 원본 배열을 손상시킴 */
// aespa.forEach((item, indx) => {
//     aespa[index] = item + '💖'
// })

// console.log(aespa)

const aespa3 = [...aespa].map(i => i + '💖')
console.log(aespa3)