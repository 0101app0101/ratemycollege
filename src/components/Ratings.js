import { FaStar } from 'react-icons/fa';

const Ratings =()=>(
    <div className="container">
    <div className="ratings">
    <span className="heading">User Rating</span>
    <span className="fa fa-star checked" />
    <span className="fa fa-star checked" />
    <span className="fa fa-star checked" />
    <span className="fa fa-star checked" />
    <span className="fa fa-star" />
    <p>4.1 average based on 254 reviews.</p>
    <hr style={{border: '3px solid #f1f1f1'}} />
    <div className="row">
      <div className="side">
      <div><b>1 star</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-5" />
        </div>
      </div>
      <div className="side right">
        <div>150</div>
      </div>
      <div className="side">
      <div><b>1 star</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-4" />
        </div>
      </div>
      <div className="side right">
        <div>63</div>
      </div>
      <div className="side">
      <div><b>1 star</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-3" />
        </div>
      </div>
      <div className="side right">
        <div>15</div>
      </div>
      <div className="side">
      <div><b>1 star</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-2" />
        </div>
      </div>
      <div className="side right">
      <div>15</div>
      </div>
      <div className="side">
        <div><b>1 star</b></div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div className="bar-1" />
        </div>
      </div>
      <div className="side right">
        <div>20</div>
      </div>
    </div>
  </div>
  </div>
)
export default Ratings