const Ratingpg=()=>{



    return(
<>
        <div>
        <h1>Star rating </h1>
        <div className="rating"> 
        <input type="radio" name="rating" defaultValue={5} id={5} /><label htmlFor={5}>☆</label> 
        <input type="radio" name="rating" defaultValue={4} id={4} /><label htmlFor={4}>☆</label> 
        <input type="radio" name="rating" defaultValue={3} id={3} /><label htmlFor={3}>☆</label> 
        <input type="radio" name="rating" defaultValue={2} id={2} /><label htmlFor={2}>☆</label>
        <input type="radio" name="rating" defaultValue={1} id={1} /><label htmlFor={1}>☆</label>
        </div>
      </div>




<div>
<div className="container pb-cmnt-container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card card-info">

        <div className="card-block">
          <textarea placeholder="Write your comment here!" className="pb-cmnt-textarea" defaultValue={""} />
          <form className="form-inline">

            <div className="btn-group">
              <button className="btn" type="button"><span className="fa fa-picture-o fa-lg" /></button>
              <button className="btn" type="button"><span className="fa fa-video-camera fa-lg" /></button>
              <button className="btn" type="button"><span className="fa fa-microphone fa-lg" /></button>
              <button className="btn" type="button"><span className="fa fa-music fa-lg" /></button>
            </div>
            <button className="btn btn-primary float-xs-right" type="button">Share</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<style dangerouslySetInnerHTML={{__html: "\n    .pb-cmnt-container {\n        font-family: Lato;\n        margin-top: 100px;\n    }\n\n    .pb-cmnt-textarea {\n        resize: none;\n        padding: 20px;\n        height: 130px;\n        width: 100%;\n        border: 1px solid #F2F2F2;\n    }\n" }} />
</div>
</>



    )
}

export default Ratingpg