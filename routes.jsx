import App from "./src/App";

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