let data = {
    'one': '하나',
    'two': '둘',
    'three': '셋',
    'four': '넷'
}

for (const i in data) {
    console.log(i)
    console.log(data[i])   // 대갈화 접근법 -> 괄호 내 변수에 접근이 가능
    console.log(data.i)  // undefined -> Object.key방법은 해당 Object에 해당 key가 있어야 접근이 가능함
    console.log(data.one);  // 이건 되는데... 왜?
}