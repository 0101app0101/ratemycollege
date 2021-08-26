const SearchBar = () =>  {


    return(

        <div className="header_main">
      
        <div className="bannen_inner">
          <div className="container">
            <div className="row marginii">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="taital_main">
                </div>
                <h1 className="web_text"><strong>Unlimited Web Hosting</strong></h1>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="img-box">
                  <figure><img src="images/woofer.png" alt="img" style={{maxWidth: '100%'}} /></figure>
                </div>
              </div>
            </div>
            <div className="emaim-bt">
              <div className="col-md-9 margin-0">
                <div className="input-group mb-3 margin-top-20">
                  <input type="text" className="form-control" placeholder="Enter domain name here" />
                  <div className="input-group-append">
                    <button className="search_bt" type="Subscribe"><a href="#">Search</a></button>  
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}
export default SearchBar