import { useEffect, useRef, useState } from "react";
import { checkValidSignIn } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { SPINNER } from "../utils/constants";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const signUpHandler = () => setIsSignUp(!isSignUp);
  const handleIsValidData = (e) => {
    setLoading(true);
    e.preventDefault();
    const message = checkValidSignIn({
      email: email.current.value.trim(),
      password: password.current.value.trim(),
      name: name?.current?.value.trim(),
      isSignUp,
    });
    setErrorMessage(message);
    if (message) {
      setLoading(false);
      return;
    }

    isSignUp
      ? createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            navigate("/home");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("email already exists");
          })
          .finally(() => setLoading(false))
      : signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("invalid email or password");
          })
          .finally(() => setLoading(false));
  };
  useEffect(() => {
    setErrorMessage(null);
    email.current.value = "";
    password.current.value = "";
    if (name.current) name.current.value = "";
  }, [isSignUp]);
  return (
    <div className="bg-[rgba(0,0,0,0.8)] bg-opacity-80 w-4/12 absolute left-1/2 transform -translate-x-1/2 my-32">
      <form className="w-5/6 mx-auto px-6 py-8 m-4 flex flex-col gap-4">
        <h1 className="text-white text-3xl font-bold pb-4">
          {!isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4"
          ></input>
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4 "
        ></input>
        {errorMessage && (
          <p className="font-bold text-red-600">{errorMessage}</p>
        )}
        <button
          type="submit"
          onClick={handleIsValidData}
          disabled={loading}
          className="text-white bg-red-600 rounded-sm w-full px-4 py-2 font-bold cursor-pointer"
        >
          {loading ? (
            <img
              alt="loading"
              src={SPINNER}
              className="flex justify-center mx-auto h-8 filter invert brightness-0"
            ></img>
          ) : !isSignUp ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
        <p className="text-white text-center">Forgot password?</p>
        <p className="text-gray-400">
          {!isSignUp ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white font-bold cursor-pointer hover:underline"
            onClick={signUpHandler}
          >
            {!isSignUp ? "Sign up now." : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
