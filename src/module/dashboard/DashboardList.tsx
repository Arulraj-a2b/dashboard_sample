import SvgHelp from "../../icons/SvgHelp";
import { BLUE } from "../../uikit/colors";
import CardComponent from "./CardComponent";
import ChartComponent from "./ChartComponent";
import styles from "./dashboardlist.module.css";
import { cardData, cardDataOne, statusMock } from "./mock";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type StatusProps = {
  name: string;
  isSelect: boolean;
};
const Status = ({ name, isSelect }: StatusProps) => {
  return (
    <text
      className={cx("status", {
        font_color_Black: !isSelect,
        statusHover: !isSelect,
      })}
    >
      {name}
    </text>
  );
};

const DashboardList = () => {
  return (
    <div>
      <div className={styles.list_container}>
        <div className={styles.project_container}>
          <span className={styles.title_style}>Project statistics</span>
          <SvgHelp fill={BLUE} className={styles.svgHelp} />
        </div>
        <div className={styles.status_container}>
          {statusMock.map((list) => {
            return (
              <div className={styles.status_map_style}>
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
      <div className={`flex ${cx("bottom_container")}`}>
        <div className={styles.chartContainer} style={{ width: "50%" }}>
          <div className={styles.total_visit}>
            <text className={styles.total_text}>Total visits</text>
            <text className={styles.total_value}>42.43M</text>
          </div>
          <ChartComponent />
        </div>
        <div className={`grid ${cx("card_container")}`}>
          <div className="flex">
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
