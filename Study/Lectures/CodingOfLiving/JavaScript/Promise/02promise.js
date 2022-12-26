console.log(1)
console.log(2)
setTimeout(function () { console.log(3) }, 3000);
console.log(4)


/* fetch 확인 */
let fetched = (fetch('https://jsonplaceholder.typicode.com/posts'))
console.log(fetched)    // Promise {<pending>}



/* fake api */
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson)
    })


