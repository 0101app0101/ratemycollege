



    
        const initialdata=[

            {
                
                id:1,
                name:"east west college",
                state:"karnataka",
                reviews:3,
                comment:["akshay","hfhgfdhgfdxgfdxgfxsfg"],
                ratings:0,
                param1:0,
                param2:0,
                param3:0,
                param4:0,
    
                
            }, {
                id:2,
                name:"east wwwwcollege",
                state:"kerela",
                reviews:9,
                comment:["helollwllwllw","olalalalalal","dhbjashdbasjhd"],
                ratings:0,
                param1:0,
                param2:0,
                param3:0,
                param4:0,
                
        
            },
            {
                id:3,
                name:"eastiowowllege",
                state:"tamil nadu",
                reviews:1,
                comment:["brrrrroooooooj","jahsvdjashdvsjhadv","jashvdjhasdvasjdysguuuuusius"],
                ratings:0,
                param1:0,
                param2:0,
                param3:0,
                param4:0,
                
        
            },
            {
            id:4,
            name:"hellowowo",
            state:"tsssssdu",
            reviews:2,
            comment:["awesooooooommmmmmmeeeeeeeej","lolololololo","lmaoooooooooooo"],
            ratings:0,
            param1:0,
            param2:0,
            param3:0,
            param4:0,
            
        
        }]




const reducer=(state=initialdata,action)=>{

 
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
                        console.log(action.payload)
                        return {...state,products:action.payload}
                       
                   
         
            default: return state

    }




}
export default reducer