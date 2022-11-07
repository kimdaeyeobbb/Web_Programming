// get 요청

async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
    });
    const data = await response.json();
    console.log(data);
}

get();



// post 요청