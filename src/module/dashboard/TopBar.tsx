import styles from "./topbar.module.css";
import classNames from "classnames/bind";
import TopBarProfile from "./TopBarProfile";

const cx = classNames.bind(styles);

const TopBar = () => {
  return (
    <div className={cx("top_bar_container")}>
      <TopBarProfile isPlus />
      <TopBarProfile />
    </div>
  );
};

export default TopBar;
