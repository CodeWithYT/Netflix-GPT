import Header from "./Header";
import SignIn from "./SignIn";
import { NETFLIX_BG } from "../assets/images";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(setUser({ uid, displayName, email, photoURL }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="relative">
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
