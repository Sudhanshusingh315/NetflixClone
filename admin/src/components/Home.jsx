import { Link } from "react-router-dom";

export function Home(){
    return (
        <>
        <h1>
            <button><Link to="/login">LOGIN</Link></button>
        </h1>

        </>
    )
}