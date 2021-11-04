const Banner=({product})=>{



    return(
        


<section className="profile">
        <header className="header">
          <div className="details">
            <h1>{product.name}</h1>
            <div className="stats">
              <div className="col-4">
                <h4>{product.state}</h4>
                <p>state</p>
              </div>
              <div className="col-4">
                <h4>{product.ratings}</h4>
                <p>Rating</p>
              </div>
              <div className="col-4">
                <h4>100</h4>
                <p>Discussions</p>
              </div>
            </div>
          </div>
        </header>
      </section>
      
      
        
    )
}
export default Banner