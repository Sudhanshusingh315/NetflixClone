import { Link, useParams } from "react-router-dom";
import "./edit.css";
export default function Edit() {
  const { id } = useParams();

  return (
    <>
      <div>
        <div >
          <Link to="/create" className="createButton">Create</Link>
        </div>
        <form className="form">
          <div>
            <label htmlFor="title">Title: </label>
            <input placeholder="title" id="title" />
          </div>
          <div>
            <label htmlFor="desc">Description </label>
            <textarea maxLength="100" id="desc" style={{resize:"none"}} />
          </div>

          <div>
            <label htmlFor="poster">Poster </label>
            <input type="file" id="poster" />
          </div>
          <div>
            <label htmlFor="backdrop">Backdrop </label>
            <input type="file" id="backdrop" />
          </div>
          <div>
            <label htmlFor="series">Movie or Series </label>
            <input type="series" />
          </div>
        </form>
      </div>
    </>
  );
}
