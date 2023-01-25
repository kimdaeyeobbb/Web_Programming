function foundPerson(people) {
    const candidates = ['Don', 'John', 'Kent'];
    return people.find((p) => candidates.includes(p)) || ''; // 아무것도 못찾으면 빈 문자열 반환
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
