import styles from "./topbar.module.css";
import classNames from "classnames/bind";
import TopBarProfile from "./TopBarProfile";

const cx = classNames.bind(styles);

const TopBar = () => {
  return (
    <div className={cx("top_bar_container")}>
      <TopBarProfile isPlus />
      <TopBarProfile src={"https://i.ibb.co/ZKNvgf2/A-25495-copy.jpg"} />
    </div>
  );
};

export default TopBar;
