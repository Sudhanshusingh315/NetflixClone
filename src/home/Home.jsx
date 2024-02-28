import { useEffect } from "react";
import Feactured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./style.scss";
import { useDispatch } from "react-redux";
import { fetchingConfiguration } from "../dataSlice/DataSlice";
import { GrAchievement, GrAmazon } from "react-icons/gr";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingConfiguration());
  });
  return (
    // fetching url and storing into store
    <>
      <div className="home">
        <Navbar />
        <Feactured />
        <div style={{ height: "1000px" }}></div>
      </div>
    </>
  );
}
export default Home;
