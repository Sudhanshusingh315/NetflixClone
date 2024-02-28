import "./style.scss";
import { useFetch } from "../../hooks/useFetch";
// Gap left intentional
import { useSelector, useDispatch } from "react-redux";
import { colors } from "@mui/material";
import MyImage from "../lazyLoading/MyImage";
function Feactured() {
  const url = useSelector((state) => state.dataslice.url);
  const { data, loading } = useFetch("movie/upcoming");
  console.log(data, loading);
  console.log(url);
  let item;
  if (!loading) {
    const movieList = data?.results;
    item = movieList[Math.floor(Math.random() * 20)];
  }
  console.log(item);
  return (
    <>
      {!loading ? (
        <div className="container">
          <MyImage
            className={"backdropImg"}
            src={url + item.backdrop_path}
            alt={"backdrop path"}
          />
          <div className="info">
            <span className="title">{item.title}</span>
            <span className="overview">{item.overview}</span>
          </div>
        </div>
      ) : (
        console.log("This is where i will put Skeleton ")
      )}
    </>
  );
}
export default Feactured;
