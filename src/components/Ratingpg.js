
import Stars from './Stars'



const Ratingpg = () => {
    return (
      <>
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
                  
             <Stars/>
         
              
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
                  
             <Stars/>
         
              
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
                  
             <Stars/>
         
              
              </span>
              
            </div>
          </div>
          <div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
        </form>
      </>
    );
  };
  
  export default Ratingpg;
  
  