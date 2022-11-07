let user = [
    {
        "_id": "633e5b1711926cc42d1fbb4b",
        "index": 0,
        "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
        "age": 28,
        "name": "Mai Montoya",
        "gender": "female"
    },
    {
        "_id": "633e5b1718d6c001d2f771c7",
        "index": 1,
        "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
        "age": 22,
        "name": "Shelley Potts",
        "gender": "female"
    },
    {
        "_id": "633e5b17fecc26a897aa2283",
        "index": 2,
        "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
        "age": 22,
        "name": "Hensley Flores",
        "gender": "male"
    },
    {
        "_id": "633e5b17267fe16c24f00591",
        "index": 3,
        "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
        "age": 20,
        "name": "Holmes Morrow",
        "gender": "male"
    },
    {
        "_id": "633e5b17b30766b9c38594f5",
        "index": 4,
        "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
        "age": 25,
        "name": "Elisa Miller",
        "gender": "female"
    }
]


let 여성 = 0;
for (let i = 0; i < user.length; i++) {
    // console.log(user[i]);
    if (user[i]['gender'] === 'female') {
        여성 += 1
    }
}

console.log(`여성의 수 : ${여성}`);
console.log(`남성의 수 : ${user.length - 여성}`)

console.log(`여성의 수: ${user.filter(i => i.gender === 'female').length}`);