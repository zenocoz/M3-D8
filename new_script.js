const fetchProducts = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product", {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjA2YjRiY2RlMTAwMTc2MTZiYWEiLCJpYXQiOjE2MDUxMDM3MjMsImV4cCI6MTYwNjMxMzMyM30.UbKj_OMFcs4waSUNmvcnsQaJjquuaUrJLDBzVVcL-dE"
            }
        });
        let products = await response.json();
        return products;

    } catch (error) {
        console.log(error);
    }
}

const fetchSingleProduct = async (id) => {

    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjA2YjRiY2RlMTAwMTc2MTZiYWEiLCJpYXQiOjE2MDUxMDM3MjMsImV4cCI6MTYwNjMxMzMyM30.UbKj_OMFcs4waSUNmvcnsQaJjquuaUrJLDBzVVcL-dE"
            }
        });
        let product = await response.json();
        return product;

    } catch (error) {
        console.log(error);
    }
}



