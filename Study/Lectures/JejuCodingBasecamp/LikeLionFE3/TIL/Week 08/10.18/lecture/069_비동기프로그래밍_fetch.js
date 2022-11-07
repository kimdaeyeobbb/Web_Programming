fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())

const userData = fetch('https://jsonplaceholder.typicode.com/users/3').then(resopnse => Response.json())   // 여기에 pending 값이 들어감
console.log(userData)

const userData2 = await fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
console.log(userData2)

async function getImg() {
    const response = await fetch('https://picsum.photos/200');
    const blobImg = await (responseblob());
    console.log(blobImg)
}