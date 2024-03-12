import "./App.scss";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
function App() {
  let user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home/>:<Register />,
    },
    {
      path: "/movies",
      element: <Home type="movie" />,
    },
    {
      path: "/series",
      element: <Home type="series" />,
    },

    {
      path: "/watch",
      // add yours watch component here
      element: <Home type="series" />,
    },
    {
      path:"/register",
      element: <Register />

    },
    {
      path:"/login",
      element:<Login />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
