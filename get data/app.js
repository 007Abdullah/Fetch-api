console.log('fetch api');

async function getApi() {

    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api, "await");
    const json = await api.json();
    console.log(json, "json");
}
// getApi()


async function postApi() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'BootCamp',
            body: 'Sameer',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    console.log('APi Check POst', api)
    const json = await api.json();
    console.log("Api Json POst", json);
}

postApi();
