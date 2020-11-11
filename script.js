

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
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjA2YjRiY2RlMTAwMTc2MTZiYWEiLCJpYXQiOjE2MDUxMDM3MjMsImV4cCI6MTYwNjMxMzMyM30.UbKj_OMFcs4waSUNmvcnsQaJjquuaUrJLDBzVVcL-dE"
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