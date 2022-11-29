const userData =
    [
        {
            "_id": "6383fcd64e4ac00671149c7c",
            "index": 0,
            "guid": "5921e1e3-1bb3-443d-8751-104d5c8b9ee0",
            "age": 28,
            "name": "Angel Mcguire",
            "gender": "female",
            "_pw": "<ReferenceError: object is not defined>"
        },
        {
            "_id": "6383fcd6b86fb38f9302a20f",
            "index": 1,
            "guid": "513303eb-e7ef-4166-9317-4188ed64b274",
            "age": 28,
            "name": "Odessa Mcfadden",
            "gender": "female",
            "_pw": "<ReferenceError: object is not defined>"
        },
        {
            "_id": "6383fcd6ccc931c0ba898656",
            "index": 2,
            "guid": "9578b6f3-8f3b-46ca-b19e-8bf1b93f4f6e",
            "age": 29,
            "name": "Fern Summers",
            "gender": "female",
            "_pw": "<ReferenceError: object is not defined>"
        },
        {
            "_id": "6383fcd62fbb52ebe2a4883a",
            "index": 3,
            "guid": "b54cc32d-f430-4fa6-a629-d9d2714f04e2",
            "age": 40,
            "name": "Gamble Pennington",
            "gender": "male",
            "_pw": "<ReferenceError: object is not defined>"
        },
        {
            "_id": "6383fcd677146686b9701522",
            "index": 4,
            "guid": "9be66d28-5d22-4d51-ab5a-7b44c184b318",
            "age": 25,
            "name": "Norman Lyons",
            "gender": "male",
            "_pw": "<ReferenceError: object is not defined>"
        }
    ]

/* sort process */
let click = true;
function sort(key, jsonData) {
    console.log(`jsonData: ${jsonData}`)
    if (click) {
        click = false;
        let sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
        renderTable(sortedData);
    } else {
        click = true;
        let sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
        renderTable(sortedData);
    }
}


function renderTable(userData) {
    // console.log(userData[0])
    let tableBodyData = [];

    for (const user of userData) {
        // push 하고 싶은 데이터를 미리 넣어둠
        tableBodyData.push(`
        <tr>
            <td>${user._id}</td>
            <td>${user.index}</td>
            <td>${user.guid}</td>
            <td>${user.age}</td>
            <td>${user.name}</td>
            <td>${user.gender}</td>
            <td>${user._pw}</td>
        </tr>
        `)
    }
    // console.log(tableBodyData.join(''))
    document.querySelector('#infoTable > tbody').innerHTML = tableBodyData.join('')
}