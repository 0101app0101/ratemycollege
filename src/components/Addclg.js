import CollegeReviewForm from "./CollegeReviewForm"

const Addclg=()=>{



    return(


        <>
             <form className='rate__form'>
          <a href='/school/Harvard-University'>
            <div className='u-d--cursor u-d--flex'>
              <div className='u-m-h--sm'>All Harvard University Dorms</div>
            </div>
          </a>
          

          <div className='rate__title'>
            <span className='u-t--primary'>Add</span> College
          </div>
          <div className="u-t--md u-m-top--md u-m-bottom--md u-m-right--sm">
  Enter your school name
  <input class="form-control form-control-lg mt-3 " type="text" placeholder="Add college"></input>    
</div>
<div className="u-t--md u-m-top--md u-m-bottom--md u-m-right--sm">
  Enter your school name
  <input class="form-control form-control-lg mt-3 " type="text" placeholder="Add college"></input>    
</div>
    
        <CollegeReviewForm />
        </form>
      </>
    
    )
}

export default Addclg