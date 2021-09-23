import SvgHelp from "../../icons/SvgHelp";
import { BLUE } from "../../uikit/colors";
import CardComponent from "./CardComponent";
import ChartComponent from "./ChartComponent";
import styles from "./dashboardlist.module.css";
import { cardData, cardDataOne, statusMock } from "./navBarMock";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type StatusProps = {
  name: string;
  isSelect: boolean;
};
const Status = ({ name, isSelect }: StatusProps) => {
  return (
    <text className={cx("status", { font_color_Black: !isSelect,statusHover: !isSelect })}>{name}</text>
  );
};

const DashboardList = () => {
  return (
    <div style={{ height: window.innerHeight - 130, overflow: "scroll" }}>
      <div className={styles.list_container}>
        <div className={styles.project_container}>
          <text className={styles.title_style}>Project statistics</text>
          <SvgHelp fill={BLUE} className={styles.svgHelp} />
        </div>
        <div className={styles.status_container}>
          {statusMock.map((list) => {
            return (
              <div style={{ marginLeft: 12 }}>
                <Status
                  key={list.key}
                  name={list.data}
                  isSelect={list.isSelect}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex">
        <div className={styles.chartContainer}>
          <div className={styles.total_visit}>
            <text className={styles.total_text}>Total visits</text>
            <text className={styles.total_value}>42.43M</text>
          </div>
          <ChartComponent />
        </div>
        <div className="grid width100" style={{ marginLeft: 24 }}>
          <div className="flex width100">
            {cardData.map((list) => {
              return (
                <CardComponent
                  totalpercentage={list.total}
                  updateName={list.name}
                  updateValue={list.update}
                  key={list.key}
                  isHelp={list.help}
                />
              );
            })}
          </div>
          <div className={`${cx("card_top")}`}>
            {cardDataOne.map((list) => {
              return (
                <CardComponent
                  totalpercentage={list.total}
                  updateName={list.name}
                  updateValue={list.update}
                  key={list.key}
                  isHelp={list.help}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
