

import ReviewCard from "./ReviewCard"

const Reviews =()=>{

    return(
      <>
      
        <section style={{backgroundColor: '#f7f6f6'}}>
        <div className=" my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="text-dark mb-0">Unread comments (4)</h4>
                <div className="card">
                  <div className="">
                   <button className="btn btn-primary">Add Review</button>
                  </div>
                </div>
              </div>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Reviews