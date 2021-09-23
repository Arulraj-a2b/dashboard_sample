import SvgDownAngle from "../../icons/SvgDownAngle";
import SvgPlus from "../../icons/SvgPlus";
import "./topbarprofile.css";

type Props = {
  isPlus?: boolean;
};
const TopBarProfile = ({ isPlus }: Props) => {
  return (
    <div className="top_bar_container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="box_style" />
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
