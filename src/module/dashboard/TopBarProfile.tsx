import SvgDownAngle from "../../icons/SvgDownAngle";
import SvgPlus from "../../icons/SvgPlus";
import { isEmpty } from "../../uikit/helpers";
import "./topbarprofile.css";

type Props = {
  isPlus?: boolean;
  src?: string;
};
const TopBarProfile = ({ isPlus, src }: Props) => {
  return (
    <div className="top_bar_container">
      <div style={{ display: "flex", alignItems: "center" }}>
        {isEmpty(src) ? (
          <div className="box_style" />
        ) : (
          <img
            className="box_style"
            src={src}
            alt="A-25495-copy"
          />
        )}
        <text className="title">TAKASHO</text>
        <div className="svg_down">
          <SvgDownAngle />
        </div>
        {isPlus && (
          <div className="plus_svg">
            <SvgPlus />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBarProfile;
