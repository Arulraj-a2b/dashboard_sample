import { deflateSync } from "zlib";
import SvgFire from "../../icons/SvgFire";
import SvgHelp from "../../icons/SvgHelp";
import SvgHome from "../../icons/SvgHome";
import SvgLogout from "../../icons/SvgLogOut";
import SvgNote from "../../icons/SvgNote";
import SvgProfile from "../../icons/SvgProfile";
import SvgSave from "../../icons/SvgSave";
import SvgSetting from "../../icons/SvgSettings";
import { BLUE, chartColors, PINK, SKYBLUE } from "../../uikit/colors";

export const navBarList = [
  {
    icon: <SvgHome />,
    key: "1",
    title: "Overview",
    isScreen: true,
  },
  {
    icon: <SvgFire />,
    key: "2",
    title: "Opportunities",
    isScreen: false,
  },
  {
    icon: <SvgProfile />,
    key: "3",
    title: "My competitors",
    isScreen: false,
  },
  {
    icon: <SvgNote />,
    key: "4",
    title: "Briefs",
    isScreen: false,
  },
  {
    icon: <SvgSave />,
    key: "5",
    title: "Saved",
    isScreen: false,
  },
];

export const navBarListOne = [
  {
    icon: <SvgSetting />,
    key: "1",
    title: "Settings",
    isScreen: false,
  },
  {
    icon: <SvgHelp />,
    key: "2",
    title: "Help",
    isScreen: false,
  },
  {
    icon: <SvgLogout />,
    key: "3",
    title: "Log out",
    isScreen: false,
  },
];

export const statusMock = [
  {
    key: "1",
    data: "30 days",
    isSelect: true,
  },
  {
    key: "2",
    data: "60 days",
    isSelect: false,
  },
  {
    key: "3",
    data: "60 months",
    isSelect: false,
  },
  {
    key: "4",
    data: "12 months",
    isSelect: false,
  },
];

export const chartList = [
  {
    name: "January",
    Iphone: 4000,
  },
  {
    name: "March",
    Iphone: 1000,
  },
  {
    name: "May",
    Iphone: 4000,
  },
  {
    name: "July",
    Iphone: 800,
  },
  {
    name: "October",
    Iphone: 1500,
  },
];

export const yearList = [
  {
    name: "Feb",
    value: "40,000.000",
  },
  {
    name: "Mar",
    value: "30,000.000",
  },
  {
    name: "Apr",
    value: "20,000.000",
  },
  {
    name: "May",
    value: "10,000.000",
  },
  {
    name: "June",
    value: "0",
  },
];

export const cardData = [
  {
    key: "1",
    total: "12%",
    update: "42.34%",
    name: "Bounce Rate",
    help: true,
  },
  {
    key: "2",
    total: "1.2%",
    update: "4.20%",
    name: "Pages per Visit",
    help: false,
  },
];

export const cardDataOne = [
  {
    key: "1",
    total: "2.1%",
    update: "326.60K",
    name: "Total Monthly Visits",
    help: false,
  },
  {
    key: "2",
    total: "2.4%",
    update: "00:00:27",
    name: "Avg Visit Duration",
    help: false,
  },
];

export const piechartList = [
  {
    key: "1",
    name: "Direct",
    value: 12,
    color: SKYBLUE,
  },
  {
    key: "2",
    name: "Search",
    value: 24,
    color: BLUE,
  },
  {
    key: "1",
    name: "Social",
    value: 12,
    color: PINK,
  },
  {
    key: "1",
    name: "Referals",
    value: 45,
    color: "blue",
  },
];

export const pieChartData = {
  maintainAspectRatio: false,
  responsive: false,
  //   labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [80, 50, 100, 50],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};
