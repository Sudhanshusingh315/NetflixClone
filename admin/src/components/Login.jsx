import { useState } from "react";
import { logintunk } from "../feature/Auth/Authslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // redux state

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("my email", email);
    console.log("my password", password);

    let userCredentials = {
      email,
      password,
    };

    dispatch(logintunk(userCredentials)).then((result)=>{
        console.log(result);
        if(result.payload){

            setPassword("");
            setEmail("");
            navigate("/")
        }
    });
    
  };
  return (
    <>
      <form>
        <div>Login Page</div>
        {error && <div>{error}</div>}
        <input
          placeholder="email"
          value={email}
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>
            {loading ? "Loging.....":"Login"}
        </button>
      </form>
    </>
  );
}
