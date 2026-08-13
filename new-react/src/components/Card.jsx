function Card({name,image,course,age,city,btnText}) {

  return (
    <>
    
         <div id='card'>
        <img src={image||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10"}
         alt="" />
       
          <h2>{name|| "N/A"}</h2>
        
        <p>
          <b>Course:</b>{course|| "N/A"}
          </p>
        <p>
          <b>city:</b>{city|| "N/A"}
          </p>

          <p>
            <b>Age:</b>{age || "N/A" }
          </p>
          <button style={{width:"100%",background:"blue",color:"white",height:"25px"}}>{btnText || "N/A"}</button>
      </div>
    </>
  )
}

export default Card