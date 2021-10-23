import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {FaRegStar} from 'react-icons'
import {addReview} from '../Actions/Action'
import { useDispatch } from 'react-redux';

const CollegeReviewForm =({Id})=>{
 

  const addreview=(e)=>{
    dispatch(addReview(inputvalue, Id),e.preventDefault(),setInputvalue(''))
  }

  

  

  const dispatch= useDispatch()
  const [inputvalue,setInputvalue]=useState('')

  const [starstate, setStarState] = useState({

   param1:0,
   param2:0,
   param3:0,
   param4:0
    
  })

  const changeParam1 = ( newRating, name ) => {
    setStarState({...starstate,
     param1: newRating
     })
    }
  const changeParam2 = ( newRating, name ) => {
   setStarState({...starstate,
    param2: newRating
    })
  }

  
  const changeParam3 = ( newRating, name ) => {
   setStarState({...starstate,
    param3: newRating
    })
  }

  const changeParam4 = ( newRating, name ) => {
    setStarState({...starstate,
     param4: newRating
     })
    }

    return(
<form className='rate__form' >
          <a href='/school/Harvard-University'>
            <div className='u-d--cursor u-d--flex'>
              <div className='u-m-h--sm'>All Harvard University Dorms</div>
            </div>
          </a>
          <div className='rate__title'>
            <span className='u-t--primary'>Rate</span> Holworthy
          </div>
        
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>room</span> out
                of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: size, comfort, natural lighting
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                  
              <div class="container">
       
        <StarRatings
          rating={starstate.param1}
          starRatedColor="gold"
          changeRating={changeParam1}
          numberOfStars={5}
          name='param1'
          starHoverColor="gold"
          svgIconPath="M90.546,15.518C69.858-5.172,36.199-5.172,15.515,15.513C-5.173,36.198-5.171,69.858,15.517,90.547   c20.682,20.684,54.341,20.684,75.027-0.004C111.23,69.858,111.229,36.2,90.546,15.518z M84.757,84.758   c-17.494,17.494-45.96,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.796,3.807,67.261,3.805,84.759,21.302   C102.253,38.796,102.251,67.265,84.757,84.758z M33.24,38.671c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.776,6.2,6.201   c0,3.426-2.777,6.202-6.2,6.202C36.017,44.873,33.24,42.097,33.24,38.671z M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201   c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.776,6.202-6.2,6.202S61.357,42.097,61.357,38.671z M76.017,64.068   c-3.843,8.887-12.843,14.629-22.927,14.629c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.529,0.089-3.285,1.62-3.921   c0.376-0.155,0.766-0.229,1.15-0.229c1.176,0,2.292,0.695,2.771,1.85c2.777,6.686,9.655,11.004,17.523,11.004   c7.69,0,14.528-4.321,17.42-11.011c0.658-1.521,2.424-2.222,3.944-1.563S76.675,62.548,76.017,64.068z"
          svgIconViewBox="0 0 106.059 106.059"
        />
         
     
  </div>
         
              
              </span>
              
            </div>
          </div>
                  
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>room</span> out
                of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: size, comfort, natural lighting
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                <div className="container">
              <StarRatings
          rating={starstate.param2}
          starRatedColor="gold"
          changeRating={changeParam2}
          numberOfStars={5}
          name='param2'
          starHoverColor="gold"
        />
        </div>

              </span>
              
            </div>
          </div>
                  
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>room</span> out
                of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: size, comfort, natural lighting
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                  
              <div className="container">
              <StarRatings
          rating={starstate.param3}
          starRatedColor="gold"
          changeRating={changeParam3}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
         
              
              </span>
              
            </div>
          </div>
                            
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>room</span> out
                of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: size, comfort, natural lighting
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                  
              <div className="container">
              <StarRatings
          rating={starstate.param4}
          starRatedColor="gold"
          changeRating={changeParam4}
          numberOfStars={5}
          name='param4'
          starHoverColor="gold"
        />
        </div>
         
              
              </span>
              
            </div>
          </div>
          <div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} rows="5" id="comment"></textarea>
</div>
<div><button className="btn btn-primary btn-lg" type="submit" onClick={addreview}>submit</button></div>
        </form>


    )
}

export default CollegeReviewForm