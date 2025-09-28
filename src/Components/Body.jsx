import Header from "./Header";
import SignIn from "./SignIn";
import { NETFLIX_BG } from "../assets/images";

const Body = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10">
        <img
          className="brightness-75 object-cover w-full h-full"
          src={NETFLIX_BG}
          alt="backgorund image"
        ></img>
      </div>
      <SignIn />
    </div>
  );
};
export default Body;
