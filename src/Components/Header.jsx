import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../assets/images";
import { PROFILE_PLACEHOLDER } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const gptHandler = () => {
    dispatch(toggleGptSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(setUser({ uid, displayName, email, photoURL }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute top-0 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img className="w-48 ml-32 " src={NETFLIX_LOGO} alt="netflix"></img>
      {selector && (
        <div className="flex space-x-3 items-center mr-12">
          <button
            onClick={gptHandler}
            className="px-2 py-2 mr-8 rounded-lg bg-violet-600 text-white cursor-pointer hover:bg-violet-700 font-bold"
          >
            GPT Search✨
          </button>
          <img alt="profile" src={PROFILE_PLACEHOLDER} className="w-10"></img>
          <span
            className="text-white font-bold cursor-pointer hover:underline"
            onClick={handleSignOut}
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};
export default Header;
