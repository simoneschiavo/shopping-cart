import App from "./src/App";
import Products from "./src/pages/Products/Products";

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