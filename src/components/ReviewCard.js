import { FaSmile } from "react-icons/fa"
import { FaFrown } from "react-icons/fa"
import { FaMeh } from "react-icons/fa"
import Data from "../Data"
import { connect } from "react-redux"
import reducer from "../Reducer/Reducer"
const ReviewCard = ({Comment},param1) => {
// console.log(param1)
// console.log(comments)



return(
    <div className="card mb-3" style={{minHeight:180+"px"}}>
      <div className="card-body">
      <div className="row ">
          <div className="col-sm-1 text-center">
              
          {param1>4?<FaSmile className="my-sm-5 mx-sm-4 " style={{fontSize:50+"px",color:"green"}}/>:param1>=3?<FaMeh className="my-sm-5 mx-sm-4 " style={{fontSize:50+"px",color:"orange"}}/>:<FaFrown className="my-sm-5 mx-sm-4 " style={{fontSize:50+"px",color:"red"}}/>}
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

     param1:state.reducer.param1,
}}

export default connect(mapstatetoprops)(ReviewCard)