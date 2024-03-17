import "./movie.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMovies } from "../Moives/MovieSlice";
export default function Movie({item,index}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {

    dispatch(deleteMovies(id))
  }
  return (
    <>
      <div className="movietab">
        <div className="index">{index}</div>
        <div className="imageOfMovie">
          <img
            src={item.backdrop}
            alt=""
            className="posterImage"
          />
        </div>
        <div className="titleOfTheMovie">{item.title}</div>
        <div className="iconsWrapper">
          <div className="editOption" onClick={()=>navigate(`/edit/${item._id}`)}>
            <MdEdit />
          </div>
          <div className="deleteOption" onClick={()=>handleDelete(item._id)}>
            <MdDelete />
          </div>
        </div>
      </div>
    </>
  );
}
