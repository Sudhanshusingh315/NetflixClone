// importing icons
import { FaPlay } from "react-icons/fa";
import "./style.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoListCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { GrLinkDown } from "react-icons/gr";
import axios from "axios";
// Carousel Items
function ListItems({ data }) {
  const [isHoverd, setIsHoverd] = useState(false);
  const [movieData,setMovieData] = useState();
  useEffect(() => {
    async function movie_info(){
      const res =  await axios.get(`http://localhost:3030/api/movie/find/${data}`,{
        headers:{
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWViMTRkZWM2ZWVhMDFjMzRlZjFlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDE0MTc5MywiZXhwIjoxNzEwNTczNzkzfQ.hW1M8HizHeNABgv7DaMPBJMn5a8x9NFvUeuVm8d-cqw"
        }
      })
      setMovieData(res);
    }
    movie_info();
  }, [data]);

console.log("this is movie data",movieData);
  return (
    <>
      <div className="items">
        <div className="image_container">
          <img
            className="listItemsImage"
            src="https://imageio.forbes.com/blogs-images/shanonlee/files/2018/12/Bird-Box-1200x725.jpg?format=jpg&width=320"
            alt="poster"
          />
        </div>
        <div className="itemInfo">
          <div className="icons">
            <FaPlay />
            <IoListCircle />
            <BiLike />
            <BiDislike />
          </div>
        </div>
        <div className="itemInfoTop">
          <span>1 hours 14mins</span>
          <span>+16</span>
          <span>2019</span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa
          minima natus similique fuga exercitationem, laudantium quibusdam? Et
          libero in adipisci molestias. Soluta optio recusandae animi at
          pariatur dignissimos unde.
        </div>
        <div className="genres">Action</div>
      </div>
    </>
  );
}
// Carosel section with arrow movemnts
// Now, this has item that is each item in the list object
export default function List({ item }) {
  const ref = useRef();
  const handleLeft = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - 500;
  };
  const handleRight = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + 500;
  };
  return (
    <>
      <div className="titleOfList">{item?.title}</div>
      <div className="wrapper">
        <FaChevronCircleLeft
          className="arrows left"
          onClick={() => handleLeft()}
        />

        <div className="carousel" ref={ref}>
          {/* taking each ITEM which has a contect array and passing IT as a prop*/}
          {item?.content?.map((data, i) => {
            return <ListItems data={data} />;
          })}
        </div>
        <FaChevronCircleRight
          className="arrows right"
          onClick={() => handleRight()}
        />
      </div>
    </>
  );
}
