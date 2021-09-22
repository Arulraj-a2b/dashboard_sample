import SvgSearch from "../../icons/SvgSearch";
import "./navbar.css";
import NavBarList from "./NavBarList";

const height = window.innerHeight;
const NavBar = () => {
  return (
    <div className="nav_div" style={{ height }}>
      <div className="search_container">
        <div className="svgSearchStyle">
          <SvgSearch className={"svgStyle"} />
        </div>
        <text className="concured_text">Concured</text>
      </div>
      <NavBarList />
    </div>
  );
};

export default NavBar;
