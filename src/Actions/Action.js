import axios from "axios"


// export const addReview=(data,id,star)=>{
// return{
//     type:"ADD_REVIEW",
//     payload:{
//         // id: new Date().getTime().toString(),
//         id:id,
//         data:data,
//         star:star
        
//     }

// }
// }

 




// export const addReview = (data,star,id) => {
//     return (dispatch) =>{ 
//     return axios.post("http://localhost:5000/api/products/",)

//     .then(
//         response =>console.log(response))
        

// }
// }

export const addReview = (data,id,star) => {
    

    return (dispatch) =>{ 
        
        // console.log({data,id,star})
    return axios.post('http://localhost:8000/api/products/', JSON.stringify({data,id,star}),{headers: {'Content-Type': 'application/json'}})
                .then( response => dispatch({type:"ADD_REVIEW",payload:response.data}))
                .then(response=>console.log(response.data))
}
}


export const getdata=()=>{


    return(dispatch)=>{
        return axios.get('http://localhost:8000/api/products') 
        .then(response=> dispatch({ type:"GET_DATA",payload:response.data}))
        .then(response=>{console.log(response)})

        
    }
}


// export const getdata=()=> async (dispatch)=>{
//     const response =await axios.get('/api/products')
//     console.log(response)
//     .then(response=>dispatch({type:"GET_DATA", payload:response.data}))
// }

// export const getReview=()=>{

// }


// export const addReview=(data,id,star)=> async (dispatch)=>{
    
   
    
        
//     const{data}= await axios.get('/api/products');

    
    
//         dispatch(
//             {
//                 type:"ADD_REVIEW",
//                 payload:
//                 {id:id,data:lol,star:star}
//             }
           
           
//     )


//     }



    
   



    // return{
    //     type:"ADD_REVIEW",
    //     payload:{
    //         // id: new Date().getTime().toString(),
    //         id:id,
    //         data:data,
    //         star:star
            
    //     }
    
    // }
    // }