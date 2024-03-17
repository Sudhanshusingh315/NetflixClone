import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../MovieSlice";
import Movie from "../Movie";
import "./style.css";
import { useEffect } from "react";
export default function Movies() {
  const dispatch = useDispatch();
  const { loading, error, movie } = useSelector((state) => state.movie);
  console.log(movie);
  useEffect(() => {
    console.log("inside use effect");
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <>
      <div className="wrapper">{loading ? <h1>Loading</h1> : 
      <>
      {movie?.map((items,i)=>{
        return <Movie key={i} item={items} index={i+1}/> 
      })}
      </>
      }
      </div>
    </>
  );
}
