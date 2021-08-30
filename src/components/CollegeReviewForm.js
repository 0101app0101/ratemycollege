import { useState } from 'react';
import StarRatings from 'react-star-ratings';

const CollegeReviewForm =()=>{

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
<form className='rate__form'>
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
          starRatedColor="blue"
          changeRating={changeParam1}
          numberOfStars={5}
          name='param1'
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
          starRatedColor="blue"
          changeRating={changeParam2}
          numberOfStars={5}
          name='param2'
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
          starRatedColor="blue"
          changeRating={changeParam3}
          numberOfStars={5}
          name='param3'
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
          starRatedColor="blue"
          changeRating={changeParam4}
          numberOfStars={5}
          name='param4'
        />
        </div>
         
              
              </span>
              
            </div>
          </div>
          <div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
        </form>


    )
}

export default CollegeReviewForm