import "./style.scss";
// Importing Custom Hook
import { useFetch } from "../../hooks/useFetch";
// Gap left intentional
import { useSelector, useDispatch } from "react-redux";
// This is imoprting icons
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
// Image lazy loading
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
            <div className="buttons">
              <button className="play">
                <FaPlay />
                <span> Play</span>
              </button>
              <button className="more">
                <IoMdInformationCircleOutline />
                <span> Info</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        console.log("This is where i will put Skeleton ")
      )}
    </>
  );
}
export default Feactured;
