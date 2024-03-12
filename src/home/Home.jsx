import { useEffect } from "react";
import Feactured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";
import "./style.scss";
import { useDispatch } from "react-redux";
import { fetchingConfiguration } from "../dataSlice/DataSlice";
import { GrAchievement, GrAmazon } from "react-icons/gr";

function Home({ type }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingConfiguration());
  });
  return (
    // fetching url and storing into store
    <>
      <div className="home">
        <Navbar />
        <Feactured type={type} />
        <List />
        <div style={{ height: "1000px" }}></div>
      </div>
    </>
  );
}
export default Home;
