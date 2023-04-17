import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

// export const updateProduct = (product, id) => {
//     console.log("product in service => ", product);
//     console.log("id in service => ", id);

//     return axios.put(`http://localhost:1337/ring-sleeves/:${id}`, JSON.stringify(product));
// }

export const updateProduct = (product, id) => {
    // return axios.put(`http://localhost:1337/ring-sleeves/${id}`, JSON.stringify(product));

    console.log("product in updatePro => " , product);
    console.log("id in updatePro => " , id);

    axios.put(`http://localhost:1337/ring-sleeves/${id}`, (product))
        .then(response => {
            console.log("RES", response);
        })
}


export const getSingleProduct = (endPath,id) =>{
    // return axios.put(`http://localhost:1337/ring-sleeves/:${id}`, JSON.stringify(product));

   return axios.get(`http://localhost:1337/${endPath}/${id}`);
    
}