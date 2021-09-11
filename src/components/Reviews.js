import { useState } from "react"
import ReviewCard from "./ReviewCard"
import ReactModal from "react-modal"
import CollegeReviewForm from "./CollegeReviewForm"
const Reviews =()=>{

  const [showModal,setShowModal] = useState(false) 

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

    return(
      <>
      
        <section style={{backgroundColor: '#f7f6f6'}}>
        <div className=" my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="text-dark mb-0">Comments (4)</h4>
                <div className="card">
                  <div className="">
                   <button className="btn btn-primary" onClick={handleOpenModal}  >Add Review</button>
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

        <ReactModal isOpen={showModal} onRequestClose={handleCloseModal} >
          <CollegeReviewForm />
          <button className="btn btn-danger" onClick={handleCloseModal}>Close</button>
        </ReactModal>

      </section>
      </>
    )
}

export default Reviews