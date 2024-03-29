import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import "react-loading-skeleton/dist/skeleton.css";

import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Price from "./pages/Price";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import RootLayout from "./layout/RootLayout";
import PostLayout from "./layout/PostLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Outlet/> */}

      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<PostLayout />}>
        <Route index element={<Posts />} />
        <Route path=":postId" element={<PostDetail />} />
      </Route>
      <Route path="/price" element={<Price />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar/> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;
