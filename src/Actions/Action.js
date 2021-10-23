export const addReview=(data,id)=>{
return{
    type:"ADD_REVIEW",
    payload:{
        // id: new Date().getTime().toString(),
        id:id,
        data:data
        
    }

}
}

export const getclgbyid=(id)=>{
    return{

        type:"GETCLGBY_ID",
        payload:{
            id:id
        }
    }
}