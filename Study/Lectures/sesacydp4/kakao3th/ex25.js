
const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

let idx = 0;

const nextWeekday = () => {
    const currentDay = WEEKS[idx];
    idx = (idx+1)% WEEKS.length
    return currentDay
}

console.log(nextWeekday());
nextWeekday();
console.log(nextWeekday());
nextWeekday();
console.log(nextWeekday());
nextWeekday();
console.log(nextWeekday());
nextWeekday();
console.log(nextWeekday());
