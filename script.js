const post_page = () => {
    let form_element = document.getElementById("form");
    form_element.addEventListener("submit", (event)=> {
    handle_submit(event);
    })
    
    const handle_submit = (event) => {
        event.preventDefault();
        submit();
    
    }
    
    
    const submit = async () => {
        let product = { 
            name: document.querySelector("#name").value,
            description: document.querySelector("#description").value,
            brand: document.querySelector("#brand").value,
            imageUrl: document.querySelector("#image").value,
            price: document.querySelector("#price").value,
        }
    
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            body: JSON.stringify(product),
            headers: new Headers({"Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZGZkMjRiY2RlMTAwMTc2MTZhYTUiLCJpYXQiOjE2MDUxNjgzNzksImV4cCI6MTYwNjM3Nzk3OX0.tl61sgw4EimhtGv9JPssrbLiJ_umWM0BnvSKouAefYc"
            ,
        })
    })
        if (response.ok) {
            alert("Product entered successfully");
            location.assign("index.html");
        } else {
            const error = await response.json();
            console.log(error);
        }
    }
        catch(error){
        console.log(error)
        }
    }
}

// const new_token = async () => {

//     try {
//         let new_post = await fetch("https://striveschool-api.herokuapp.com/api/account/login", {
//             method: "POST",
//             headers: new Headers({
//                 username: "federico.soncini@gmail.com",
//                 passord: "striveorama"
//             })
//         });
//     }
        
//     catch(error) {
//         console.log(error);
//     }

// }


const request_page = async () => {
    let current_products = document.querySelector("#current-products");

    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product", {
            method: "GET",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZGZkMjRiY2RlMTAwMTc2MTZhYTUiLCJpYXQiOjE2MDUxNjgzNzksImV4cCI6MTYwNjM3Nzk3OX0.tl61sgw4EimhtGv9JPssrbLiJ_umWM0BnvSKouAefYc"
        });
        let events = await response.json();
        if (events.length > 0) {
            events.forEach(event => {
                let li = document.createElement("li");
                li.classList.add(
                    "list-group-item",
                    "d-flex",
                    "justify-content-between"
                );
                li.innerHTML = `<span><img src="${element.imageUrl}</span><span>${element.name}</span>
                <span>${element.description}</span><span>${element.brand}</span><span>${element.price}</span>`
                current_products.appendChild(li);
            })
        } else {
            current_products.innerHTML = "<h1>STORE EMPTY/h1>";
        }

        console.log(events);
    } catch (error) {
        console.log(error);
    }
}

window.onload = () => {
  request_page();
}