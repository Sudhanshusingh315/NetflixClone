import { useRef, useState } from "react";
import "./style.scss";
// Icons
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
function ListItems() {
  return <div className="listItem">Item</div>;
}
// main Component

export default function List() {
  // Slider From Scratch Learn more about this
  // starts here
  const [slidernumber, setSlidernumber] = useState(0);
  const listref = useRef();
  const handleClick = (direction) => {
    let distance = listref.current.getBoundingClientRect().x;

    if (direction === "left" && slidernumber > 0) {
      setSlidernumber(slidernumber - 1);
      console.log("This is comming from left", slidernumber);
      listref.current.style.transform = `translateX(${250 + distance}px)`;
    }
    if (direction === "right" && slidernumber < 4) {
      setSlidernumber(slidernumber + 1);
      console.log("This is comming from right", slidernumber);
      listref.current.style.transform = `translateX(${-250 + distance}px)`;
    }
    console.log(distance);
    // ends here
  };
  return (
    <div className="wrapper">
      <FaArrowAltCircleLeft
        className="sliderarrow left"
        onClick={() => {
          handleClick("left");
        }}
      />
      <div className="containeItems" ref={listref}>
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
      </div>
      <FaArrowAltCircleRight
        className="sliderarrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
