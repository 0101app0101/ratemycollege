import Banner from "../components/Banner"
import Ratings from "../components/Ratings"
import Reviews from "../components/Reviews"
import Data from "../Data"
import {connect} from "react-redux"
import { useEffect } from "react"

const ReviewScreen=(props)=>{


 

const college= props.colleges.find((x)=>x.id == props.match.params.id)
if(!college){
  return(
      <div><h1>college not found</h1></div>
  )
}

    return(
        <>
       

  
        <Ratings product={college} />
        <Reviews Comments={college.comment} Id={college.id}/>
        
        </>
        
    )
}
const mapstatetoprops=(state)=>{
    return{
 colleges :state.reducer
    }
}



export default connect(mapstatetoprops)(ReviewScreen)