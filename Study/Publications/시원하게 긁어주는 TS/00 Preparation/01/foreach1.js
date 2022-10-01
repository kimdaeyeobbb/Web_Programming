function printall(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}

printall([1, 2, 3]);
printall(1, 2, 3); // error