


import Slider from "react-slick";
import Card from './Card';
const Cards=()=>{
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" ,color:"black"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",color:"black" }}
        onClick={onClick}
      />
    );
  }


  

     
      return (
        <>
        
        <div className="App">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
    
               <Slider {...settings}>
                
        <Card />
        <Card/>
        <Card />
        <Card/>
    
        </Slider>
        
        </div>
        </div>
        </div>
        </>
      
    //     <>
    //     <div id="about" className="choose_section">
    //   <div className="container">
    //     <div className="col-sm-12">
    //       <h1 className="choose_text">Why you should <span className="color">choose us</span></h1>
    //       <p className="lorem_text">Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover any web sites still</p>
    //     </div>
    //   </div>
    // </div>
    // <div className="choose_section_2">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-sm-4">
    //         <div className="power_full">
    //           <div className="icon"><a href="#"><img src="images/power-full-icon.png" /></a></div>
    //           <h2 className="powerful_text">Powerful Features</h2>
    //           <p className="making_tetx">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
    //         </div>
    //         <div className="btn_main">
    //           <button type="button" className="read_bt"><a href="#">Read More</a></button>
    //         </div>
    //       </div>
    //       <div className="col-sm-4">
    //         <div className="power">
    //           <div className="icon"><a href="#"><img src="images/optimised-icon.png" /></a></div>
    //           <h2 className="totaly_text">Totaly Optimised</h2>
    //           <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
    //         </div>
    //         <div className="btn_main">
    //           <button type="button" className="read_bt"><a href="#">Read More</a></button>
    //         </div>
    //       </div>
    //       <div className="col-sm-4">
    //         <div className="power">
    //           <div className="icon"><a href="#"><img src="images/headfone-icon.png" /></a></div>
    //           <h2 className="totaly_text">Worldwide Support</h2>
    //           <p className="making">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
    //         </div>
    //         <div className="btn_main">
    //           <button type="button" role="button" className="read_bt"><a href="#">Read More</a></button>
    //         </div>
    //       </div>
    //     </div>    		
    //   </div>
    // </div>
    // </>

    )
}
export default Cards