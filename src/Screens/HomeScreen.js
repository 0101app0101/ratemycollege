

import Cards  from "../components/Cards"
import Colleges from "../components/Colleges"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Stuff from "../components/Stuff"
import { BrowserRouter, Route , Router, Switch} from "react-router-dom";

const HomeScreen=()=>{


        

    return(
        
    <>
    <SearchBar/>
    <Cards></Cards>
    <Stuff/>
    <Colleges/>
    </>
     
       
    )
}
export default HomeScreen