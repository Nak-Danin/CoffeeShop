import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, MenuLayout } from "./layouts";
import {
  Home,
  Menu,
  Feature,
  Category,
  Product,
  Reward,
  GiftCards,
  CreateGiftCard,
  Previous,
  Favorites,
} from "./pages";
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
        path: "featured",
        element: <Feature />,
      },
      {
        path: "previous",
        element: <Previous/>
      },
      {
        path: "favorites",
        element: <Favorites/>
      },
      {
        path: "menu/product/:id",
        element: <Product />,
      },
      {
        path: "rewards",
        element: <Reward />,
      },
      {
        path: "giftcards",
        element: <GiftCards />,
      },
      {
        path: "giftcards/:title/:id",
        element: <CreateGiftCard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
