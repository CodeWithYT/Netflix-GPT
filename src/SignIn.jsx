import { useState } from "react";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="bg-[rgba(0,0,0,0.8)] bg-opacity-80 w-4/12 absolute left-1/2 transform -translate-x-1/2 my-32">
      <form className="w-5/6 mx-auto px-6 py-8 m-4 flex flex-col gap-4">
        <h1 className="text-white text-3xl font-bold pb-4">
          {!isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=" border border-gray-600 text-white rounded-sm outline-none w-full px-4 py-4 "
        ></input>
        <button
          type="submit"
          className="text-white bg-red-600 rounded-sm w-full px-4 py-2 font-bold cursor-pointer"
        >
          Sign In
        </button>
        <p className="text-white text-center">Forgot password?</p>
        <p className="text-gray-400">
          New to Netflix?
          <span
            className="text-white font-bold cursor-pointer"
            onClick={signUpHandler}
          >
            Sign up now.
          </span>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
