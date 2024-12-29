import App from "./App";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
      element: <Products />,
    children: [
      {
        path: "/products/:category",
        element: <Products />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;