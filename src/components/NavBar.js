const NavBar = () => (

    <div>
    <header id="home" className="section">
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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
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
      
        <section>
          <div className="bannen_inner">
            <div className="container">
              <div className="row marginii">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="taital_main">
                  </div>
                  <h1 className="web_text"><strong>Unlimited Web Hosting</strong></h1>
                  <p className="donec_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. 
                    Aenean dignissim pellentesque felis.Donec nec justo
                    eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                  <a className="get_bg" href="#" role="button">Get Started</a>
                  <a className="btn btn-lg btn-dark" href="about.html" role="button">Contact Us</a>
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
        </section>
      </div></header>

    <div id="about" className="choose_section">
      <div className="container">
        <div className="col-sm-12">
          <h1 className="choose_text">Why you should <span className="color">choose us</span></h1>
          <p className="lorem_text">Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover any web sites still</p>
        </div>
      </div>
    </div>
    <div className="choose_section_2">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="power_full">
              <div className="icon"><a href="#"><img src="images/power-full-icon.png" /></a></div>
              <h2 className="powerful_text">Powerful Features</h2>
              <p className="making_tetx">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <div className="btn_main">
              <button type="button" className="read_bt"><a href="#">Read More</a></button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="power">
              <div className="icon"><a href="#"><img src="images/optimised-icon.png" /></a></div>
              <h2 className="totaly_text">Totaly Optimised</h2>
              <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <div className="btn_main">
              <button type="button" className="read_bt"><a href="#">Read More</a></button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="power">
              <div className="icon"><a href="#"><img src="images/headfone-icon.png" /></a></div>
              <h2 className="totaly_text">Worldwide Support</h2>
              <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
            </div>
            <div className="btn_main">
              <button type="button" role="button" className="read_bt"><a href="#">Read More</a></button>
            </div>
          </div>
        </div>    		
      </div>
    </div>
    {/* choose start */}
    {/* about start */}
    <div className="about_main layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="images">
              <img src="images/img-1.png" style={{maxWidth: '100%'}} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_section_main">
              <h1 className="dolar_tetx"><strong style={{color: '#2ba879'}}>599.00* .com</strong></h1>
              <h2 className="special_text">Special Offer For Limited Time. 30% Discount On All Hosting Plans</h2>
              <p className="donec_text">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
              <div className="right_aero"><img src="images/right-aerow.png" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about end */}
    {/* service start */}
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
          <div className="col-sm-4">
            <div className="about_inner">
              <div className="icon"><a href="#"><img src="images/icon-1.png" /></a></div>
              <h2 className="totaly_text">Shared Hosting</h2>
              <p className="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dedicated">
              <div className="icon"><a href="#"><img src="images/icon-2.png" /></a></div>
              <h2 className="hosting_text">Dedicated Hosting</h2>
              <p className="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="about_inner">
              <div className="icon"><a href="#"><img src="images/icon-3.png" /></a></div>
              <h2 className="totaly_text">Domain Registration</h2>
              <p className="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
        </div>    		
      </div>
    </div>
    <div className="choose_section_2">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="about_inner">
              <div className="icon"><a href="#"><img src="images/icon-4.png" /></a></div>
              <h2 className="totaly_text">Shared Hosting</h2>
              <p className="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="about_inner">
              <div className="icon"><a href="#"><img src="images/icon-5.png" /></a></div>
              <h2 className="totaly_text">Dedicated Hosting</h2>
              <p className="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="about_inner">
              <div className="icon"><a href="#"><img src="images/icon-6.png" /></a></div>
              <h2 className="totaly_text">Domain Registration</h2>
              <p className="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
          </div>
        </div>
        <div className="bt_main">
          <button className="read_more"><a href="#">Read More</a></button>
        </div>   		
      </div>
    </div>
  
    <div id="contact" className="contact_section">
      <div className="container">
        <div className="col-sm-12">
          <h1 className="choose_text">Request A Call  Back</h1>
          <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>
      </div>
    </div>
    <div className="contact_section_2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="input_main">
              <div className="container">
                <form action="/action_page.php">
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Phone" name="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="text" defaultValue={""} />
                  </div>
                </form>
              </div> 
              <div className="send_btn">
                <button type="button" className="main_bt"><a href="#">Send</a></button>
              </div>                   
            </div>
          </div>
          <div className="col-md-6">
            <div className="section_right">
              <img src="images/img-2.png" style={{maxWidth: '100%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact_section_3">
      <div className="container">
        <div className="contact_taital">
          <div className="row web">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="map_main">
                <img src="images/map-icon.png" />
                <span className="londan_text">London 145 United Kingdom</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="map_main">
                <img src="images/phone-icon.png" />
                <span className="londan_text">+7586656566</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="map_main">
                <img src="images/email-icon.png" />
                <span className="londan_text">demo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_product">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-logo"><img src="images/footer-logo.png" style={{maxWidth: '100%'}} /></div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <h1 className="useful_text">USEFUL LINK</h1>
              <div className="menu">
                <ul>
                  <li><a href="#home"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Home</a></li>
                  <li><a href="#about"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />About</a></li>
                  <li><a href="#service"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Services</a></li>
                  <li><a href="#contact"><img src="images/bulit-icon.png" style={{paddingRight: '10px'}} />Contact Us</a></li>
                </ul>
              </div>	
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h1 className="useful_text">PRODUCT</h1>
              <div className="menu multi_column_menu">
                <ul>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Webhosting</a></li>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Reseler Hosting</a></li>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />VPS Hosting</a></li>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Wordpress Hosting</a></li>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Dedicated hosting</a></li>
                  <li className="footer_menu"><a href="#"><img src="images/bulit-icon.png" className="footer_menu" />Windows</a></li>
                </ul>
              </div>
              <div className="input-group mb-3 margin-top-30">
                <input type="text" className="form-control" placeholder="Enter you email" />
                <div className="input-group-append">
                  <button className="subsrcibe_bt" type="Subscribe"><a href="#">SUBSCRIBE</a></button>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon_main">
          <div className="row">
            <div className="col-sm-12">
              <div className="menu_text">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/in-icon.png" /></a></li>
                  <li><a href="#"><img src="images/google-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright_main">
      <div className="container">
        <p className="copy_text">© 2018 All Rights Reserved. <a href="https://html.design">Free Website Templates</a></p>
      </div>
    </div>
   
  </div>
)

export default NavBar