import { createRoot } from "react-dom/client";
import Body from "./Body";
import Home from "./Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [],
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
