const Reviewform=()=>{





    return(


        <div className="col-md-6">
        <div className="input_main">
          <div className="container">
            <form action="/action_page.php">
            <div className="form-group">
                <input type="text" className="email-bt" placeholder="Name" name="Name" />
              </div> 
              
              
              
              
               <div className="form-group">
               <div className="row">
               <div className="col-sm-4">    
   
        <div className="rating"> 
        <input type="radio" name="rating" defaultValue={5} id={5} /><label htmlFor={5}>☆</label> 
        <input type="radio" name="rating" defaultValue={4} id={4} /><label htmlFor={4}>☆</label> 
        <input type="radio" name="rating" defaultValue={3} id={3} /><label htmlFor={3}>☆</label> 
        <input type="radio" name="rating" defaultValue={2} id={2} /><label htmlFor={2}>☆</label>
        <input type="radio" name="rating" defaultValue={1} id={1} /><label htmlFor={1}>☆</label>
        </div>
      </div>
      </div>

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

    )
}


export default Reviewform