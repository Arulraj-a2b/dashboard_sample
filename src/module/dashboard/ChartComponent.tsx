import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BLUE, GRAY, SKYBLUE, WHITE } from "../../uikit/colors";
import { chartData } from "./mock";

const ChartComponent = () => {
  return (
    <LineChart
      width={400}
      height={320}
      data={chartData}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke="#e6e6e6" />
      <XAxis dataKey="name" tick={{ fill: "#CCC" }} />
      <YAxis tick={{ fill: "#CCC" }} />
      <Tooltip
        contentStyle={{
          backgroundColor: "#424242",
          color: WHITE,
          borderRadius: 10,
        }}
        itemStyle={{ color: WHITE }}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke={BLUE}
        strokeWidth="5"
        dot={{ fill: BLUE, stroke: GRAY, strokeWidth: 2, r: 5 }}
        activeDot={{
          fill: SKYBLUE,
          stroke: SKYBLUE,
        }}
      />
    </LineChart>
  );
};

export default ChartComponent;
