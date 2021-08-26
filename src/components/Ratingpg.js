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





</>



    )
}

export default Ratingpg