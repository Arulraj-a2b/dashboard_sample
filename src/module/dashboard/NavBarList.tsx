import { navBarList, navBarListOne } from "./navBarMock";
import "./navbarlist.css";

const NavBarList = () => {
  return (
    <div style={{ justifyContent: "space-between" }}>
      <div>
        {navBarList.map((list) => {
          return (
            <div key={list.key} className="map_list_container">
              {list.icon}
              <text className="title_style">{list.title}</text>
            </div>
          );
        })}
      </div>
      <div>
        {navBarListOne.map((list) => {
          return (
            <div key={list.key} className="map_list_container">
              {list.icon}
              <text className="title_style">{list.title}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarList;
