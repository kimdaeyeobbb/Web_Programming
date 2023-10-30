setTimeout(() => {
    console.log("A");

    setTimeout(() => {
        console.log("B");

        setTimeout(() => {
            console.log("C")
        },0 )
        console.log("D")
    }, 1000)
    console.log("E")
}, 3000);
console.log("F")