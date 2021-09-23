import SvgHelp from "../../icons/SvgHelp";
import { BLUE } from "../../uikit/colors";
import ChartComponent from "./ChartComponent";
import styles from "./dashboardlist.module.css";
import { statusMock } from "./navBarMock";

type StatusProps = {
  name: string;
};
const Status = ({ name }: StatusProps) => {
  return (
    <div>
      <text className={styles.status}>{name}</text>
    </div>
  );
};

const DashboardList = () => {
  return (
    <div>
      <div className={styles.list_container}>
        <div className={styles.project_container}>
          <text className={styles.title_style}>Project statistics</text>
          <SvgHelp fill={BLUE} className={styles.svgHelp}/>
        </div>
        <div className={styles.status_container}>
          {statusMock.map((list) => {
            return (
              <div style={{ marginLeft: 12 }}>
                <Status key={list.key} name={list.data} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.total_visit}>
          <text className={styles.total_text}>Total visits</text>
          <text className={styles.total_value}>42.43M</text>
        </div>
        <ChartComponent />
      </div>
    </div>
  );
};

export default DashboardList;
