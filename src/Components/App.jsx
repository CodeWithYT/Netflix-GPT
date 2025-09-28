import { createRoot } from "react-dom/client";
import Body from "./Body";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  // const router = createBrowserRouter();
  return (
    <div>
      <Body />
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
