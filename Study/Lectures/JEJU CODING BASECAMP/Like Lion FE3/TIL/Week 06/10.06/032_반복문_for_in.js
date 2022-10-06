
let data2 = {
    'one': '하나',
    'two': '둘',
    'three': '셋',
    'four': '넷'
}

for (const key in data2) {
    console.log(key);  // key
}


for (const i in data2) {
    console.log(data2[i]);   // value
}


let data3 = [10, 20, 30, 40]

for (const key in data3) {
    console.log(`${key} : ${data3[key]}`);   // index: value
}


for (const i in 'hello world') {
    console.log(i);   // index
}
