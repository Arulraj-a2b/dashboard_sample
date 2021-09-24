import { Doughnut } from "react-chartjs-2";
import { piechartList } from "./navBarMock";
import styles from "./piechart.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const options = {
  legend: {
    //   display: true,
    //   position: "left"
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};
type props = {
  data: any;
  title: string
};

const PieChart = ({ data,title }: props) => {
  return (
    <div className={styles.overAll}>
      <p className={styles.title}>{title}</p>
      <div className={styles.inputContainer}>
        <div className="grid height0">
          <input
            className={styles.input_style}
            placeholder={"      Source          Trafic Sources, %"}
          />
          {piechartList.map((list) => {
            return (
              <div className={`flex center ${cx("chart_list")}`}>
                <div
                  className={styles.box}
                  style={{ backgroundColor: list.color }}
                />
                <span className={styles.unit}>{list.key}</span>
                <span className={styles.unit_name}>{list.name}</span>
                <span className={styles.value}>{list.value}</span>
              </div>
            );
          })}
        </div>
        <div className={cx("doughut_style")}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default PieChart;
