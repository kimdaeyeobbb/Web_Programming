

const seat = [['피카츄', '라이츄', '파이리'],
['꼬부기', '버터플', '야도란'],
['피죤투', '또가스', '메타몽']];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}
