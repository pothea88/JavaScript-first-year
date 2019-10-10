const url = "https://jsonplaceholder.typicode.com/photos";
const syncronous = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method, url, syncronous);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    console.log(data);
    data.forEach(element => {
        if (element.id <= 5) {
            let items = document.querySelector('#card');
            items.innerHTML += `
                <div class="card">
                    <div class="card-header">
                        ${element.title}
                    </div>
                    <div class="card-body">
                        <img src = ${element.thumbnailUrl}>
                    </div>
                </div>
            `
        }
    });
}
ajax.send();