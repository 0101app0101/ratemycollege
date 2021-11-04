import Data from "../Data"


const Card=({product})=>{
  
  
    return(
      
      product.map((product)=>( 

      <div className="container" >
          
      <div className="power_full">
      <div className="icon"><a href="#"><img src="images/power-full-icon.png" /></a></div>
      <a href ={`/Review/${product.id}`}><h2 className="powerful_text">{product.name}</h2></a>
      <p className="making_tetx">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
    </div>
    <div className="btn_main">
      <button type="button" className="read_bt"><a href="#">Read More</a></button>
    </div>
    </div>))
       
    )
}
export default Card