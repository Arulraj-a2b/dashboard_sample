import { navBarList, navBarListOne } from "./mock";
import styles from "./navbarlist.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const NavBarList = () => {
  return (
    <div style={{ justifyContent: "space-between" }}>
      <div>
        {navBarList.map((list) => {
          return (
            <div
              key={list.key}
              className={cx("map_list_container", {
                map_list_container_active: list.isScreen,
              })}
            >
              <div className={cx("icon_style")}>{list.icon}</div>
              <text className={cx("title_style")}>{list.title}</text>
            </div>
          );
        })}
      </div>
      <div className={cx("bottom_list")}>
        {navBarListOne.map((list) => {
          return (
            <div key={list.key} className={cx("map_list_container")}>
              <div className={cx("icon_style")}>{list.icon}</div>
              <text>{list.title}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarList;
