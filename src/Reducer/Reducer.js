



    
        




const reducer=(state={products:[]},action)=>{

 
    switch(action.type){
        
        case "ADD_REVIEW":
       
console.log(action.payload)
            const {id,data,star}= action.payload
      
           const colleges = state.find(college => college.id === action.payload.id)
           
           state=state.filter(college => college.id !==action.payload.id)
           
       
           
        
          console.log([...state, {...colleges,
                param1:star.param1,
                param2:star.param2,
                param3:star.param3,
                param4:star.param4,
                comment:[...colleges.comment,data]}])
                return ([...state, {...colleges,
                    param1:star.param1,
                    param2:star.param2,
                    param3:star.param3,
                    param4:star.param4,
                    ratings:(star.param1+star.param2+star.param3+star.param4)/4,
                    comment:[...colleges.comment,data]}])
                
                    case "GET_DATA":
                       
                        return {loading:false,products:action.payload}
                   
         
            default: return state

    }




}
export default reducer