import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css"

const Layout = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Outlet/> 
            <Footer/>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path:'/',
        element : <Layout/>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/post/:id",
              element: <Single />,
            },
            {
              path: "/write",
              element: <Write />,
            },
            {
              path:'/home',
              element:<Home/>
            }
          ],
    },
    {
        path:'/register',
        element : <Register/>
    },
    {
      path:'/login',
      element : <Login/>
    }
] );

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App;
