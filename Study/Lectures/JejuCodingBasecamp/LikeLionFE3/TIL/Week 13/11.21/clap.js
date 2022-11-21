// vscode 에서 emojisense를 다운받아야 박수가 깨지지 않고 나옵니다

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function (line) {
    const input = line.split(' ');

    const result = Number(input[0]) + Number(input[1]);
    console.log(result);

    rl.close();
}).on("close", function () {
    process.exit();
});




let result = '';
const n = 5
for (let i = 1; i <= n; i++) {
    result += '  '.repeat(n - i)
    result += '👏'.repeat(2 * i - 1);
    result += '\n'
}
console.log(result);