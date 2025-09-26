import { createRoot } from "react-dom/client";
import Body from "./Body";

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
