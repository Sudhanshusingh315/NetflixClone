// importing icons
import { FaPlay } from "react-icons/fa";
import "./style.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoListCircle } from "react-icons/io5";
import { useRef, useState } from "react";
// Carousel Items
function ListItems({ index }) {
  const [isHoverd, setIsHoverd] = useState(false);
  console.log(index)
  return (
    <>
      <div
        className="items"
      >
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
export default function List() {
  const ref = useRef();
  const handleLeft = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - 500;
  };
  const handleRight = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + 500;
  };
  return (
    <>
      <div className="wrapper">
        <FaChevronCircleLeft
          className="arrows left"
          onClick={() => handleLeft()}
        />

        <div className="carousel" ref={ref}>
          <ListItems index={0} />
          <ListItems index={1} />
          <ListItems index={2} />
          <ListItems index={3} />
          <ListItems index={4} />
          <ListItems index={5} />
          <ListItems index={6} />
          <ListItems index={7} />
          <ListItems index={8} />
          <ListItems index={9} />
          <ListItems index={10} />
          <ListItems index={11} />
          <ListItems index={12} />
          <ListItems index={13} />
          <ListItems index={14} />
          <ListItems index={15} />
        </div>
        <FaChevronCircleRight
          className="arrows right"
          onClick={() => handleRight()}
        />
      </div>
    </>
  );
}
