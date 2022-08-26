import { Link } from "react-router-dom";
import homeImg from "./images/icon.png";
import connect from "./images/icon-2.png";
import event from "./images/icon-3.png";
import society from "./images/icon-4.png";
import help from "./images/icon-5.png";
const Navbar = () => {
  return (
    <div className="navbar primary">
      <nav>
        <ul className="nav-items">
          <li className="nav-item">
            <img src={homeImg} alt="" />
            <span>Home</span>
          </li>

          <li className="nav-item">
            <img src={connect} alt="" />
            <span>Connect</span>
          </li>
          <li className="nav-item">
            <img src={event} alt="" />
            Events
          </li>
          <li className="nav-item">
            <img src={society} alt="" />
            Society
          </li>
          <li className="nav-item">
            <img src={help} alt="" />
            Help
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
