
import { FaStar } from 'react-icons/fa';
import { star } from '../Actions/Action';
import Data from '../Data';


const Ratings =({product})=>{
  const bgcolor=(color)=>{
    console.log(color)
if(color>=5){
  return "#04AA6D"//#04AA6D
}
    if(color>=4){
      return "#2196F3"
    }
    if(color>=3){
      return "#00bcd4"

    }
    if(color>=2){
      return "#ff9800"

    }
    

  else{
    return "#f44336"
  }
  }


  return(
    

    <div className="container">
    <div className="ratings">
    <span className="heading">User Rating</span>
    <span className={product.ratings >=1?"fa fa-star ":product.ratings>=0.5?"fa fa-star-half-o":"fa fa-star-o"}  />
    <span className={product.ratings >=2?"fa fa-star ":product.ratings>=1.5?"fa fa-star-half-o":"fa fa-star-o"} />
    <span className={product.ratings >=3?"fa fa-star ":product.ratings>=2.5?"fa fa-star-half-o":"fa fa-star-o"} />
    <span className={product.ratings >=4?"fa fa-star ":product.ratings>=3.5?"fa fa-star-half-o":"fa fa-star-o"} />
    <span className={product.ratings >=5?"fa fa-star ":product.ratings>=4.5?"fa fa-star-half-o":"fa fa-star-o"} />
  
    <p>{product.ratings} average based on reviews   </p>
    <hr style={{border: '3px solid #f1f1f1'}} />
    <div className="row">
      <div className="side">
      <div><b>Infrastructure</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-5" style={{width:product.param1*20 +"%",backgroundColor:bgcolor(product.param1)}}/>
        </div>
      </div>
      <div className="side right">
        <div>{product.param1*20}/100</div>
      </div>
      <div className="side">
      <div><b>Teaching</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-4"style={{width:product.param2*20 +"%",backgroundColor:bgcolor(product.param2)}} />
        </div>
      </div>
      <div className="side right">
        <div>{product.param2*20}/100</div>
      </div>
      <div className="side">
      <div><b>Placement</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-3"style={{width:product.param3*20 +"%",backgroundColor:bgcolor(product.param3)}} />
        </div>
      </div>
      <div className="side right">
        <div>{product.param3*20}/100</div>
      </div>
      <div className="side">
      <div><b>Hot chicks</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-2" style={{width:product.param4*20 +"%",backgroundColor:bgcolor(product.param4)}} />
        </div>
      </div>
      <div className="side right">
      <div>{product.param4*20}/100</div>
      </div>
     </div>
  </div>
  </div>

  
    

  )
  }
  
export default Ratings