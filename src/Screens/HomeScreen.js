

import Cards  from "../components/Cards"
import Colleges from "../components/Colleges"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Stuff from "../components/Stuff"
import { BrowserRouter, Route , Router, Switch} from "react-router-dom";
import { useEffect,useState } from "react"
import axios from "axios"
import Loadingbox from "../components/Loadingbox"
import Messagebox from "../components/Messagebox"
import { useDispatch, useSelector } from "react-redux"
import { getdata } from "../Actions/Action"


const HomeScreen=()=>{

const dispatch=useDispatch()
    const product= useSelector((state)=>state.products);
    const{products,loading,error}=product
        
    console.log(product)
//   const [data,setData]=useState([])
//   const [loading,setLoading]=useState(false)
//   const[error,setError]=useState(false)
useEffect(()=>
{
    dispatch(getdata())
},[]

)
  
  
 
    return(
        

        
<>
    {loading?(
        <Loadingbox/>
    ): error? (
        <Messagebox>
            {error}
            </Messagebox>
    ):(
        <>
        <SearchBar/>
   
        <Cards product={product}></Cards>
        <Stuff/>
        <Colleges product={product}/>
        </>
    )}
    </>
    

           
    
    
  
    
     
       
    )
}

export default HomeScreen