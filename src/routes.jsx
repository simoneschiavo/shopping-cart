import App from "./App";
import Products from "./pages/Products/Products";

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
];

export default routes;