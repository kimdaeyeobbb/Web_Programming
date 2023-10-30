function zz(){

    const num = Math.random()*10;

    let result = "";
    if (num > 5){
        result = "more than 5";
    } else {
        result = "less than 5"
    }
    return result
}


console.log(zz())

let result = Math.random()*10 > 5 ? "more than 5" : "less than 5"
console.log(result)