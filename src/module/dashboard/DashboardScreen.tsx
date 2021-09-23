import NavBar from "./NavBar";
import TopBar from "./TopBar";
import "./dashboardscreen.css";
import DashboardList from "./DashboardList";

const DashboardScreen = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div style={{ width: "100%" }}>
        <div className={"top_bar"}>
          <TopBar />
        </div>
        <DashboardList />
      </div>
    </div>
  );
};

export default DashboardScreen;
