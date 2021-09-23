import { deflateSync } from "zlib";
import SvgFire from "../../icons/SvgFire";
import SvgHelp from "../../icons/SvgHelp";
import SvgHome from "../../icons/SvgHome";
import SvgLogout from "../../icons/SvgLogOut";
import SvgNote from "../../icons/SvgNote";
import SvgProfile from "../../icons/SvgProfile";
import SvgSave from "../../icons/SvgSave";
import SvgSetting from "../../icons/SvgSettings";

export const navBarList = [
  {
    icon: <SvgHome />,
    key: "1",
    title: "Overview",
  },
  {
    icon: <SvgFire />,
    key: "2",
    title: "Opportunities",
  },
  {
    icon: <SvgProfile />,
    key: "3",
    title: "My competitors",
  },
  {
    icon: <SvgNote />,
    key: "4",
    title: "Briefs",
  },
  {
    icon: <SvgSave />,
    key: "5",
    title: "Saved",
  },
];

export const navBarListOne = [
  {
    icon: <SvgSetting />,
    key: "1",
    title: "Settings",
  },
  {
    icon: <SvgHelp />,
    key: "2",
    title: "Help",
  },
  {
    icon: <SvgLogout />,
    key: "3",
    title: "Log out",
  },
];

export const statusMock = [
  {
    key: "1",
    data: "30 days",
  },
  {
    key: "2",
    data: "60 days",
  },
  {
    key: "3",
    data: "60 months",
  },
  {
    key: "4",
    data: "12 months",
  },
];

export const chartList = [
  {
    name: 'January',
    Iphone: 4000
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
    name: 'Feb',
    value: '40,000.000'
  },
  {
    name: "Mar",
    value: '30,000.000',
  },
  {
    name: "Apr",
    value: '20,000.000',
  },
  {
    name: "May",
    value: '10,000.000',
  },
  {
    name: "June",
    value: '0',
  },
];

