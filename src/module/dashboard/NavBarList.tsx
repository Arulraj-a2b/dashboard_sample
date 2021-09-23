import { navBarList, navBarListOne } from "./navBarMock";
import "./navbarlist.css";

const NavBarList = () => {
  return (
    <div style={{ justifyContent: "space-between" }}>
      <div>
        {navBarList.map((list) => {
          return (
            <div key={list.key} className="map_list_container">
              <div className="icon_style">{list.icon}</div>
              <text className="title_style">{list.title}</text>
            </div>
          );
        })}
      </div>
      <div className="bottom_list">
        {navBarListOne.map((list) => {
          return (
            <div key={list.key} className="map_list_container">
              <div className="icon_style">{list.icon}</div>
              <text>{list.title}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarList;
