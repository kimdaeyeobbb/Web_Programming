// 레이블
timestable:   // 탈출할 공간을 명시해줌
for (let x = 2; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        if (x === 4) break timestable;   // 4단일떄 label매긴 타임타이블로 돌아감
        console.log(`${x} X ${y} = ${x * y}`);
    }
}