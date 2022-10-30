const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

console.log()

/* rest2 */
const purpleCuteSlime2 = {
    name2: '슬라임',
    attribute2: 'cute',
    color2: 'purple'
};

const { color2, ...cuteSlime2 } = purpleCuteSlime2;
console.log(color2);
console.log(cuteSlime2);


console.log()

/* rest3 */
const purpleCuteSlime3 = {
    name3: '슬라임',
    attribute3: 'cute',
    color3: 'purple'
};

const { color3, ...cuteSlime3 } = purpleCuteSlime3;
console.log(color3);
console.log(cuteSlime3);

const { attribute3, ...slime3 } = cuteSlime3;
console.log(attribute3);
console.log(slime3);
