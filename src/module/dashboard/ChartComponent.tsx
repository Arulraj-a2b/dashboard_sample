import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BLUE, GRAY, SKYBLUE, WHITE } from "../../uikit/colors";

const data = [
  {
    name: "January",
    value: 4000,
  },
  {
    name: "March",
    value: 1000,
  },
  {
    name: "May",
    value: 4000,
  },
  {
    name: "July",
    value: 800,
  },
  {
    name: "October",
    value: 1500,
  },
];

const ChartComponent = () => {
  return (
    <LineChart
      width={400}
      height={320}
      data={data}
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
