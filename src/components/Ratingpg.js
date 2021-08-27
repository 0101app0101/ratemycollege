import { Slider } from '@material-ui/core';



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
                  
              <Slider/>
         
              
              </span>
              
            </div>
          </div>
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>building</span>{" "}
                out of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: amenities, security, age of building
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                <span className='MuiSlider-rail' />
                <span
                  className='MuiSlider-track'
                  style={{ left: "0%", width: "50%" }}
                />
                <input type='hidden' defaultValue={3} />
                <span
                  data-index={0}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "0%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={0}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "0%" }}
                >
                  1
                </span>
                <span
                  data-index={1}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "25%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={1}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "25%" }}
                >
                  2
                </span>
                <span
                  data-index={2}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "50%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={2}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "50%" }}
                >
                  3
                </span>
                <span
                  data-index={3}
                  className='MuiSlider-mark'
                  style={{ left: "75%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={3}
                  className='MuiSlider-markLabel'
                  style={{ left: "75%" }}
                >
                  4
                </span>
                <span
                  data-index={4}
                  className='MuiSlider-mark'
                  style={{ left: "100%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={4}
                  className='MuiSlider-markLabel'
                  style={{ left: "100%" }}
                >
                  5
                </span>
                <span
                  className='MuiSlider-thumb MuiSlider-thumbColorPrimary'
                  tabIndex={0}
                  role='slider'
                  data-index={0}
                  aria-orientation='horizontal'
                  aria-valuemax={5}
                  aria-valuemin={1}
                  aria-valuenow={3}
                  style={{ left: "50%" }}
                />
              </span>
            </div>
          </div>
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>bathroom</span>{" "}
                out of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: cleanliness, private vs communal
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                <span className='MuiSlider-rail' />
                <span
                  className='MuiSlider-track'
                  style={{ left: "0%", width: "50%" }}
                />
                <input type='hidden' defaultValue={3} />
                <span
                  data-index={0}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "0%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={0}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "0%" }}
                >
                  1
                </span>
                <span
                  data-index={1}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "25%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={1}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "25%" }}
                >
                  2
                </span>
                <span
                  data-index={2}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "50%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={2}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "50%" }}
                >
                  3
                </span>
                <span
                  data-index={3}
                  className='MuiSlider-mark'
                  style={{ left: "75%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={3}
                  className='MuiSlider-markLabel'
                  style={{ left: "75%" }}
                >
                  4
                </span>
                <span
                  data-index={4}
                  className='MuiSlider-mark'
                  style={{ left: "100%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={4}
                  className='MuiSlider-markLabel'
                  style={{ left: "100%" }}
                >
                  5
                </span>
                <span
                  className='MuiSlider-thumb MuiSlider-thumbColorPrimary'
                  tabIndex={0}
                  role='slider'
                  data-index={0}
                  aria-orientation='horizontal'
                  aria-valuemax={5}
                  aria-valuemin={1}
                  aria-valuenow={3}
                  style={{ left: "50%" }}
                />
              </span>
            </div>
          </div>
          <div className='rate__slider'>
            <div className='rate__slider__question'>
              <div className='u-m-bottom--xs u-t--md'>
                Rate the <span className='u-t--bold u-t--primary'>location</span>{" "}
                out of 5 stars
              </div>
              <div className='u-t--gray'>
                Keep in mind: distance to classes, safety of area
              </div>
            </div>
            <div className='rate__slider__field'>
              <span className='MuiSlider-root jss125 MuiSlider-colorPrimary MuiSlider-marked'>
                <span className='MuiSlider-rail' />
                <span
                  className='MuiSlider-track'
                  style={{ left: "0%", width: "50%" }}
                />
                <input type='hidden' defaultValue={3} />
                <span
                  data-index={0}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "0%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={0}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "0%" }}
                >
                  1
                </span>
                <span
                  data-index={1}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "25%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={1}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "25%" }}
                >
                  2
                </span>
                <span
                  data-index={2}
                  className='MuiSlider-mark MuiSlider-markActive'
                  style={{ left: "50%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={2}
                  className='MuiSlider-markLabel MuiSlider-markLabelActive'
                  style={{ left: "50%" }}
                >
                  3
                </span>
                <span
                  data-index={3}
                  className='MuiSlider-mark'
                  style={{ left: "75%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={3}
                  className='MuiSlider-markLabel'
                  style={{ left: "75%" }}
                >
                  4
                </span>
                <span
                  data-index={4}
                  className='MuiSlider-mark'
                  style={{ left: "100%" }}
                />
                <span
                  aria-hidden='true'
                  data-index={4}
                  className='MuiSlider-markLabel'
                  style={{ left: "100%" }}
                >
                  5
                </span>
                <span
                  className='MuiSlider-thumb MuiSlider-thumbColorPrimary'
                  tabIndex={0}
                  role='slider'
                  data-index={0}
                  aria-orientation='horizontal'
                  aria-valuemax={5}
                  aria-valuemin={1}
                  aria-valuenow={3}
                  style={{ left: "50%" }}
                />
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
  
  