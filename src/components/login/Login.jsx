// function
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.scss";
export default function Login() {
  return (
    <>
      <div className="register">
        <div className="top">
          <LazyLoadImage
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Neflix logo"
          />
          <button className="singin">Sign In</button>
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="email or phone number" />
            <input type="password" placeholder="placeholder" />
            <button className="loginButton">Sign In</button>
            <span>
              {" "}
              New to Netflix <b>Sign Up now</b>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
