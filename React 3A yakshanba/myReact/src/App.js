import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

import "./App.css";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Backet from "./pages/Backet";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/product/Product";
import ProductDerails from "./pages/product/ProductDerails";
import ProductLayout from "./layout/ProductLayout";
function App() {
  
  const routes = createBrowserRouter([
  {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path:"/product",
          element:<ProductLayout/>,
          children:[
            {
             index:true,
             element:<Product/>
            },{
              path:":id",
              element:<ProductDerails/>
            }
          ]
        },
       
        {
          path: "about",
          element: <About />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "backet",
          element: <Backet />,
        }
      ]
  }
  ])
  return (
    <>
      <div className="App">
      <RouterProvider router={routes} />
    </div>
    </>
  );
}
export default App;
