import { CartesianGrid, Line, LineChart, Tooltip } from "recharts";
import { BLUE, GRAY, SKYBLUE, WHITE } from "../../uikit/colors";
import { chartList, yearList } from "./navBarMock";
import styles from "./chartcomponent.module.css";

const ChartComponent = () => {
  return (
    <div className={styles.flex_style}>
      <div className={styles.value_list}>
        <text className={styles.fontStyle}>40,000</text>
        <text className={styles.fontStyle} style={{ paddingTop: 23 }}>
          30,000
        </text>
        <text className={styles.fontStyle} style={{ paddingTop: 26 }}>
          20,000
        </text>
        <text className={styles.fontStyle} style={{ paddingTop: 26 }}>
          10,000
        </text>
        <text className={styles.fontStyle} style={{ paddingTop: 24 }}>
          0
        </text>
      </div>
      <div>
        <LineChart
          width={400}
          height={200}
          data={chartList}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#e6e6e6" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#424242",
              color: WHITE,
              borderRadius: 10,
            }}
            itemStyle={{ color: WHITE }}
            cursor={false}
          />
          <Line
            isAnimationActive
            type="natural"
            dataKey="Iphone"
            stroke={BLUE}
            strokeWidth="5"
            dot={{ fill: BLUE, stroke: GRAY, strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: SKYBLUE,
              stroke: SKYBLUE,
            }}
          />
        </LineChart>
        <div className={styles.month_list}>
          {yearList.map((list) => {
            return <text className={styles.month_list_text}>{list.name}</text>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
