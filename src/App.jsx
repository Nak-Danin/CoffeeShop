import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, MenuLayout } from "./layouts";
import { Home, Menu, Feature, Category, Product, Reward } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error Element</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuLayout />,
        children: [
          {
            index: true,
            element: <Menu />,
          },
          {
            path: ":category/:type",
            element: <Category />,
          },
        ],
      },
      {
        path: "feature",
        element: <Feature />,
      },
      {
        path: "menu/product/:id",
        element: <Product />,
      },
      {
        path: "rewards",
        element: <Reward />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
