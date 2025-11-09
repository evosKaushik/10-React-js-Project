import logo from "../assets/images/brand_logo.svg";
import "../styles/Navbar.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">LOCATION</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <Button buttonName={"Login"} btnId={'loginBtn'}/>
    </nav>
  );
};

export default Navbar;
