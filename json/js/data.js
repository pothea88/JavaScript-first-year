//
const url = "src/data.json";
fetch(url)
.then(respone => respone.json())
.then( data => {
    data.forEach(items => {
        let resource = document.querySelector('table');
        resource.innerHTML += `
            <tr>
                <td>${items.id}</td>
                <td>${items.first_name}</td>
                <td>${items.last_name}</td>
                <td>${items.email}</td>
                <td>${items.gender}</td>
            </tr>
        `;
    });  
})
.catch( error => console.log("cannot get data"));