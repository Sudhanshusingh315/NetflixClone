import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Moives/MovieSlice";
export default function MakingList() {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [list,setList] = useState({})
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const handleSelect = (e) => {
    console.log(e.target);
    let value = Array.from(e.target.selectedOptions,(option)=>option.value);
    setList({...list,[e.target.name]:value});
  };
  const handleinput=(e) =>{
    setList((prev)=>{return {...prev,[e.target.name]:e.target.value}})
  }
  console.log(list);
  return (
    <>
      <h1>making new lists</h1>
      <div className="container">
        <label>Title</label>
        <input placeholder="title of the list" type="text" name="title" onChange={(e)=>handleinput(e)} />
        <label>genres</label>
        <input placeholder="genres" type="text" name="genres" onChange={(e)=>handleinput(e)}/>
        <label>Type</label>
        <select name="type" id="type-select" onClick={(e)=>handleinput(e)}>
          <option value="">--Please select the type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <div>Selecting the movie (10 at most)</div>
        <select
        name="content"
          multiple
          onChange={(e) => {
            handleSelect(e);
          }}
          style={{height:"200px", width:"150px", marginLeft:"2rem", marginTop:"10px"}}
        >
          {movie?.map((index) => {
            return (
              <option key={index._id} value={index._id}>
                {index.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
