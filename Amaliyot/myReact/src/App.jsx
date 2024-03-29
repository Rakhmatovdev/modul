

// react-router-dom
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/articles/ArticleDetail";
import PageNotFound from "./pages/PageNotFound";

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import PostsLayout from "./layout/PostsLayout";
import Posts from "./pages/articles/Posts";
import PostsDetails from "./pages/articles/PostsDetails";

export const PrivateRoute = ({children}) => {
  const {state}=useContext(AuthContext)
  const navigate =useNavigate()
 useEffect(()=>{
  !state.username && navigate("/login")
 },[])
  return state.username && children
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ":id",
              element: <ArticleDetail />,
            },
          ],
        },
        {
          path: "posts",
          element: <PostsLayout />,
          children: [
            {
              index: true,
              element: <Posts />,
            },
            {
              path: ":id",
              element: <PostsDetails />,
            },
          ],
        },
        {
          path:"login",
          element:<Login/>,
          
        }, {
              path:"regiter",
              element:<Register/>,
            },
            {
              path:"dashboard",
              element:<PrivateRoute><Dashboard/></PrivateRoute>,
            }

      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;