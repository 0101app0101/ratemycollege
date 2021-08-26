import College from "./College"

const Colleges=()=>{

    return(

        <>
        <div id="service" className="choose_section">
        <div className="container">
          <div className="col-sm-12">
            <h1 className="choose_text">Our<span className="color"> Service</span></h1>
            <p className="lorem_text">Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad 
              teimpor sittem elit inuning ut sed.</p>
          </div>
        </div>
      </div>
      <div className="choose_section_2">
        <div className="container">
          <div className="row">
          
          <College/>
          <College/>
          <College/>
          <College/>
          <College/>
          <College/>
    
           
          </div>    		
        </div>
      </div>
      
      </>
    )
}

export default Colleges