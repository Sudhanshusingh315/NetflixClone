import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.scss";
import { useState } from "react";
import { useRef } from "react";
export default function Register() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
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
        <h1 className="bigHeading">Unlimited movies, Tv Shows, and more.</h1>
        <h2>Watch anywhere. Cancle anytime.</h2>
        <p>
          Ready to Watch? Enter your email to create or restart you membership.
        </p>
        {email ? (
          <div className="email">
            <input
              type="password"
              placeholder="enter your password"
              ref={passwordRef}
            ></input>
            <button className="registerButton" onClick={() => handleFinish()}>
              Finish
            </button>
          </div>
        ) : (
          <div className="email">
            <input
              type="email"
              placeholder="email address"
              ref={emailRef}
            ></input>
            <button className="registerButton" onClick={() => handleStart()}>
              {" "}
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
