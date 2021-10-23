
const initialData=[
    {
            
            id:1,
            name:"east west college",
            state:"karnataka",
            reviews:3,
            comment:["akshay","hfhgfdhgfdxgfdxgfxsfg"]
            
        }, {
            id:2,
            name:"east wwwwcollege",
            state:"kerela",
            reviews:9,
            comment:["helollwllwllw","olalalalalal","dhbjashdbasjhd"]
            
    
        },
        {
            id:3,
            name:"eastiowowllege",
            state:"tamil nadu",
            reviews:1,
            comment:["brrrrroooooooj","jahsvdjashdvsjhadv","jashvdjhasdvasjdysguuuuusius"]
            
    
        },
        {
        id:4,
        name:"hellowowo",
        state:"tsssssdu",
        reviews:2,
        comment:["awesooooooommmmmmmeeeeeeeej","lolololololo","lmaoooooooooooo"]
        
    
    }
    ]
        




const reducer=(state=initialData,action)=>{
 
 
    switch(action.type){
        
        case "ADD_REVIEW":
            const{id,data}= action.payload
           const colleges = state.find(college => college.id === action.payload.id)
           
           state=state.filter(college => college.id !==action.payload.id)
           
        
            return([...state, {...colleges,comment:[...colleges.comment,data]}])
         
            default: return state

    }




}
export default reducer