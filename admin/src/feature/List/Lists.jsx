import { Link } from "react-router-dom";

export default function Lists() {
  return (
    <>
    <button> <Link to="/newlist"/> </button>
      <h1>All the list</h1>
      <div className="listwrapper"></div>
    </>
  );
}
