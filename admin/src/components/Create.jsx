import { useState } from "react";
import "./create.css";
export default function Create() {
    const [movie,setMovie] = useState({});
    const [poster, setPoster] = useState(null);
    const [backdrop, setBackdrop] = useState(null);
    const handleInput =(e)=>{
       setMovie({...movie,[e.target.name]:e.target.value}) 
    }
    console.log(movie);
  return (
    <>
      <div className="create--form">
        <div >
          <label>title</label>
          <input placeholder="title" name="title" onChange={(e)=>handleInput(e)} />
        </div>
        <div>
          <label>description</label>
          <textarea placeholder="description" name="description"style={{ resize: "none" }} onChange={(e)=>handleInput(e)}/>
        </div>
        <div>
            <label htmlFor="">Year</label>
            <input placeholder="year" type="number" name="year" onChange={(e)=>handleInput(e)}/>
        </div>
        <div>
            <label>Limit</label>
            <input placeholder="limit" type="number" name="limit" onChange={(e)=>handleInput(e)}/>
        </div>
        <div>
            <label>Genres</label>
            <input placeholder="geres" type="text" name="genres" onChange={(e)=>handleInput(e)}/>
        </div>
        <div>
        <label>Type of Video</label> 
        <input type="radio" id="yes" name="isSeries" value="Yes"   onClick={(e)=>handleInput(e)}/>

        <input type="radio" id="no" name="isSeries" value="No"  onClick={(e)=>handleInput(e)}/>
        </div>
        {/* for input images and poster */}
        <label htmlFor="">Poster</label>
        <input type="file" name="poster"  accept="image/png, image/jpeg"/>
        <label>Backdrop</label>
        <input type="file" name="backdrop" accept="image/png, image/jpeg"/>
      </div>
    </>
  );
}
