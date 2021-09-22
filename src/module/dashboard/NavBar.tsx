import SvgSearch from "../../icons/SvgSearch";
import "./navbar.css";
import { navBarList } from "./navBarMock";

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
      <div>
        {navBarList.map((list) => {
          return <text>{list.title}</text>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
