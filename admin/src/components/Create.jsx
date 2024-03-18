import { useState } from "react";
import "./create.css";
import {useDispatch} from "react-redux"
import { createMovie } from "../feature/Moives/MovieSlice";
import { getDownloadURL, uploadBytes , ref} from "firebase/storage";
import storage from "../firebase";
export default function Create() {
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState(null);
  const [backdrop, setBackdrop] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const upload = (items) => {
    console.log("to be uploaded file",items);
    items.forEach(async(item) => {
      const storageRef = ref(storage, `/images/${Date.now()}-${item.file.name}`);
      const response = await uploadBytes(storageRef,item.file);
      const url = await getDownloadURL(response.ref);
      setMovie(prev => {{return {...prev,[item.label]:url}}})
      setUploaded(prev => prev+1);

    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: poster, label: "poster" },
      { file: backdrop, label: "backdrop" },
    ]);
  };

  const handleSend = () =>{
    dispatch(createMovie(movie)).then(response=>{
      if(response.payload){

        console.table(response);
        console.log("movie is now uploaded")
      }else{
        console.log("error occured,payload is empty")
      }
    }); 

  }
  return (
    <>
      <div className="create--form">
        <div>
          <label>title</label>
          <input
            placeholder="title"
            name="title"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label>description</label>
          <textarea
            placeholder="description"
            name="description"
            style={{ resize: "none" }}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="">Year</label>
          <input
            placeholder="year"
            type="number"
            name="year"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label>Limit</label>
          <input
            placeholder="limit"
            type="number"
            name="limit"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label>Genres</label>
          <input
            placeholder="geres"
            type="text"
            name="genres"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label>Type of Video</label>
          <input
            type="radio"
            id="yes"
            name="isSeries"
            value="true"
            onClick={(e) => handleInput(e)}
          />

          <input
            type="radio"
            id="no"
            name="isSeries"
            value="false"
            onClick={(e) => handleInput(e)}
          />
        </div>
        {/* for input images and poster */}
        <label htmlFor="">Poster</label>
        <input
          type="file"
          name="poster"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setPoster(e.target.files[0]);
          }}
        />
        <label>Backdrop</label>
        <input
          type="file"
          name="backdrop"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setBackdrop(e.target.files[0]);
          }}
        />
      </div>
      {uploaded === 2 ? (
        <button onClick={()=>handleSend()}>Create</button>
      ) : (
        <button onClick={(e) => handleUpload(e)}>Upload</button>
      )}
    </>
  );
}
