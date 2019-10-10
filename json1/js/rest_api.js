const url="https://jsonplaceholder.typicode.com/posts";
fetch(url) 
.then (respone => respone.json())
.then (data => {
    data.forEach(element => {
        let user = document.querySelector('#card');
        user.innerHTML += `
                <div class="card mt-4">
                    <div class="card-header">${element.title}</div>
                    <div class="card-body"
                        ${element.body};
                    </div>
                </div>
        `;
    });
    
})
.catch( () => console.log("Cannot request"));