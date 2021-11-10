

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
import Store from '../Store'


const HomeScreen=()=>{

const dispatch=useDispatch()
    // const product= useSelector((state)=>state.products);
    // const{products,loading,error}=product
        
    // console.log(product)
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const[error,setError]=useState(false)
useEffect(()=>{
const fetchData= async()=>{
    try{
        setLoading(true);
        const {data}= await axios.get('http://localhost:8000/api/products')
        setLoading(false)
        setData(data)
    }
    catch(err){
        setError(err.message)
        setLoading(false)

    }
}


fetchData()

}
,[]



// {
// Store.dispatch(getdata())

// }

)


  
 
    return(
        

        
<>
{console.log(data)}
    {loading?(
        <Loadingbox/>
    ): error? (
        <Messagebox>
            {error}
            </Messagebox>
    ):(
        <>
        
        <SearchBar/>
   
        <Cards product={data}></Cards>
        <Stuff/>
        <Colleges product={data}/>
        </>
    )}
    </>
    

           
    
    
  
    
     
       
    )

    
    }

export default HomeScreen