import "./topbar.css";
import TopBarProfile from "./TopBarProfile";

const TopBar = () => {
  return (
    <div className="top_bar_container">
      <TopBarProfile isPlus/>
      <TopBarProfile />
    </div>
  );
};

export default TopBar;
