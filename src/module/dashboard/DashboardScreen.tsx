import classNames from "classnames/bind";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import styles from "./dashboardscreen.module.css";
import DashboardList from "./DashboardList";
import PieChart from "./PieChart";
import { pieChartData } from "./navBarMock";

const height = window.innerHeight;
const cx = classNames.bind(styles);

const DashboardScreen = () => {
  return (
    <div className="flex width100">
      <NavBar />
      <div
        className={`grid width100 ${cx("overflow_style")}`}
        style={{ height }}
      >
        <div className={cx("top_bar")}>
          <TopBar />
        </div>
        <DashboardList />
        <div className={`flex ${cx('pie_chart_container')}`}>
          <div className={`width100 ${cx("pieChart")}`}>
            <PieChart data={pieChartData} title={'Source Trafic Source'}/>
          </div>
          <PieChart data={pieChartData} title={'Source Trafic Source'}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
