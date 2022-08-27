import { Link } from "react-router-dom";
import homeImg from "./images/icon.png";
import connect from "./images/icon-2.png";
import event from "./images/icon-3.png";
import society from "./images/icon-4.png";
import help from "./images/icon-5.png";
const Navbar = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };
  const onclick = (e) => {
    const navItem = Array.from(document.querySelectorAll(".nav-item span"));

    navItem.map((el) => (el.style.backgroundColor = "#1a1b20"));

    e.target.style.backgroundColor = "#22232a";
  };

  return (
    <div className="navbar primary">
      <nav>
        <ul className="nav-items">
          <Link to="/" style={style}>
            <li className="nav-item">
              <span onClick={onclick}>
                <img src={homeImg} alt="" />
                Home
              </span>
            </li>
          </Link>
          <Link to="/connect" style={style}>
            <li className="nav-item">
              <span onClick={onclick}>
                <img src={connect} alt="" />
                Connect
              </span>
            </li>
          </Link>
          <Link to="/event" style={style}>
            <li className="nav-item">
              <span onClick={onclick}>
                <img src={event} alt="" />
                Events
              </span>
            </li>
          </Link>
          <Link to="/society" style={style}>
            <li className="nav-item">
              <span onClick={onclick}>
                <img src={society} alt="" />
                Society
              </span>
            </li>
          </Link>
          <Link to="/help" style={style}>
            <li className="nav-item">
              <span onClick={onclick}>
                <img src={help} alt="" />
                Help
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
