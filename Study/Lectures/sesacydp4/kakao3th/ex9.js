const printStr = () => {
    let str = "";

    for (let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (j>i){
                str += "*";
            } else {
                str += " ";
            }
        }
        str += "\n"
    }
    console.log(str)
}

printStr()