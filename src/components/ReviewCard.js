import { FaSmile } from "react-icons/fa"
import { FaFrown } from "react-icons/fa"
import { FaMeh } from "react-icons/fa"
import Data from "../Data"
import { connect } from "react-redux"
import reducer from "../Reducer/Reducer"
const ReviewCard = ({Comment}) => {

// console.log(comments)


return(
    <div className="card mb-3" style={{minHeight:180+"px"}}>
      <div className="card-body">
      <div className="row ">
          <div className="col-sm-1 text-center">
          <FaSmile className="my-sm-5 mx-sm-4 " style={{fontSize:50+"px",color:"green"}}/>
          </div>
          <div className="col-sm-9 text-left">
          <h4 className=" comments-text my-sm-5 ml-sm-4 " style={{fontWeight:600}}>
               {Comment}
          </h4>
          </div> 
          <div className="col-sm-2 text-right">
          <p className="my-sm-5 ml-sm-4 "><small>2 days ago</small></p>
          </div>
          </div>
          </div>
          </div>)
       

}

const mapstatetoprops = state=>{
     return{

     comments: state.reducer.comment
}}

export default connect(mapstatetoprops)(ReviewCard)