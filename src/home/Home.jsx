import { useEffect, useState } from "react";
import Feactured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";
import "./style.scss";
import { GrAchievement, GrAmazon } from "react-icons/gr";
import axios from "axios";
function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  // useEffect

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3030/api/list${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjMmViNmNkOWIxMzdkY2M1NTliOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1MzQxNywiZXhwIjoxNzExMDg1NDE3fQ.GkaNrJXGejUFaytT4igaIZR_LcZrsLlEZ5p9VRfQy6E",
            },
          }
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomList();
  }, []);

  return (
    <>
      <div className="home">
        <Navbar />
        <Feactured type={type} />
        {/* lists has all the data, looping through each item and passing as a prop */}
        {lists.map((items,i) => {
          return(
            <>
              <List key={i} item={items} />
            </>
          );
        })}
      </div>
    </>
  );
}
export default Home;
