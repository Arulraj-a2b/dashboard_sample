import { useState } from "react";
import SvgSearch from "../../icons/SvgSearch";
import "./navbar.css";
import NavBarList from "./NavBarList";
import SvgBackArrow from "../../icons/SvgBackArrow";

const height = window.innerHeight;
const NavBar = () => {
  const [isSearch, setSearch] = useState(false);
  const handleSearchOpen = () => setSearch(true);
  const handleSearchClose = () => setSearch(false);
  return (
    <div className="nav_div" style={{ height }}>
      <div>
        {!isSearch && (
          <div onClick={handleSearchOpen} className="search_container">
            <div className="svgSearchStyle">
              <SvgSearch fill={"#FFF"} className={"svgStyle"} />
            </div>
            <text className="concured_text">Concured</text>
          </div>
        )}
        {isSearch && (
          <div className="input_style_container">
            <div onClick={handleSearchClose} className="svg_back">
              <SvgBackArrow />
            </div>
            <div>
              <div className="input_svg">
                <SvgSearch fill={"#000"} />
              </div>
              <input
                className="inputContainer"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        )}
      </div>
      <NavBarList />
    </div>
  );
};

export default NavBar;
