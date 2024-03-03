import { useRef, useState } from "react";
import "./style.scss";
// Icons
import {
  FaPlay,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { SlDislike, SlLike } from "react-icons/sl";

function ListItems() {
  return (
    <>
      <div className="listItem">
        <img
          className="cardImg"
          src="https://dnm.nflximg.net/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZgKGR3hzZTX8uzQhYgcUgqZMYtYOp0ZJM87hDmFq6tEc34LDGeg7fANap1Qe8zMzEUikkavBDrQSflRXf0atDDLGggqCdgQqP5xiZONFaMB06dPacuDLvbcvZ4yKtDh_kyC.webp?r=ca8"
        />
        <div className="itemInfo">
          <FaPlay />
          <IoMdAdd />
          <SlDislike />
          <SlLike />
        </div>
      </div>
    </>
  );
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
    if (direction === "right" && slidernumber < 7) {
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
