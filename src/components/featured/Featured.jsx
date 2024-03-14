import "./style.scss";
// Importing Custom Hook
// Gap left intentional
// This is imoprting icons
import { FaPlay } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
// Image lazy loading
import MyImage from "../lazyLoading/MyImage";
function Feactured({ type }) {
  return (
    <>
     
        <div className="featurecontainer">
          <MyImage
            className={"backdropImg"}
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-2469193,resizemode-75,msid-106186604/magazines/panache/jason-stathams-high-octane-thriller-the-beekeeper-to-hit-indian-theatres-in-january-2024.jpg"
            alt={"backdrop path"}
          />
          {/* this is additional */}
          {type && (
            <div className="category">
              <span className="type">
                {type === "movie" ? "Movie" : "Series"}
              </span>
              <select name="genre" id="genre">
                <option>Genres</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comdey</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
              </select>
            </div>
          )}
          <div className="info">
            <span className="title">The Beekeeper</span>

            <span className="overview">The BeeKeeper who protects the hive</span>
            <div className="buttons">
              <button className="play">
                <FaPlay />
                <span> Play</span>
              </button>
              <button className="more">
                <AiOutlineInfoCircle />
                <span> Info</span>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
export default Feactured;
