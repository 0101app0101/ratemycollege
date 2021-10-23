
import Data from "../Data"

const College =()=>{



    return(
        
         Data.products.map((product)=>( 

        <div className="col-sm-4">
 <div className="dedicated">
                <div className="icon"><a href="#"><img src="images/icon-2.png" /></a></div>
                <a href ={`/Review/${product.id}`} ><h2 className="hosting_text">{product.name}</h2></a>
                <p className="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
              </div>
              </div>
         )

         )

    )
}
export default College