function shortestPair(dots) {
    let shortest = Infinity;
    let minidx = 0;
    for (let i = 1; i < dots.length; i++) {
        let gap = Math.abs(dots[i] - dots[i - 1])
        if (gap < shortest) {
            shortest = gap
            minidx = i;
        }
    }
    console.log(dots[minidx - 1], dots[minidx])
}

console.log(shortestPair([1, 3, 4, 8, 13, 17, 20]))