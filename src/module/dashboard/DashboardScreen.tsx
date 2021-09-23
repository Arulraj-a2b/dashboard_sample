import NavBar from "./NavBar";
import TopBar from "./TopBar";

const DashboardScreen = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div style={{width:'100%'}}>
        <TopBar />
      </div>
    </div>
  );
};

export default DashboardScreen;
