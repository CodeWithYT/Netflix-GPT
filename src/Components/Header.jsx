import { NETFLIX_LOGO } from "../assets/images";

const Header = () => (
  <div className="absolute top-0 bg-gradient-to-b from-black w-full z-10">
    <img className="w-48 ml-32 mt-2" src={NETFLIX_LOGO} alt="netflix"></img>
  </div>
);
export default Header;
