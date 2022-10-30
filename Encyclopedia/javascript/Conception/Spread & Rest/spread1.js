/* spread 용법 미사용 */

const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

console.log();



/* Spread 용법 사용 */
const slime2 = {
    name: '슬라임'
};

const cuteSlime2 = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime2 = {
    ...cuteSlime,
    color: 'purple'
};

console.log(slime2);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);