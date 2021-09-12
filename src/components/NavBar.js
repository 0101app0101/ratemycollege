import { Link } from "react-router-dom"

const NavBar = () => (


  
<div className="header_main">
    <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo"><a href="#home"><img src="images/logo.png" style={{maxWidth: '100%'}} /></a> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
          <div className="menu-area">
            <div className="limit-box">
              <nav className="main-menu">
                <ul className="menu-area-main">
                  <li><Link to='/'>Home</Link> </li>
                 
                  <li><Link to='/review'>Review</Link> </li>
                  <li><a href="#service">Service</a></li>
                  <li><a href="#testimonial">Testimonial</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)

export default NavBar