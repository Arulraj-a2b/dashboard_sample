import styles from "./cardcomponent.module.css";
import classNames from "classnames/bind";
import SvgProfile from "../../icons/SvgProfile";
import { BLUE, WHITE } from "../../uikit/colors";
import SvgHelp from "../../icons/SvgHelp";

const cx = classNames.bind(styles);
type Props = {
  totalpercentage: string;
  updateValue: string;
  updateName: string;
  isHelp: boolean;
};
const CardComponent = ({
  totalpercentage,
  updateValue,
  updateName,
  isHelp,
}: Props) => {
  return (
    <div className={cx("card_container_common", { card_container: isHelp ,card_container_hover: !isHelp})}>
      <div className={styles.top_style}>
        <div className={cx("svgComputer")}>
          <SvgProfile fill={isHelp ? WHITE : BLUE} />
        </div>
        <text className={cx("text_style_one", { font_color_Black: !isHelp })}>
          {totalpercentage}
        </text>
      </div>
      <text className={cx("text_style_two", { font_color_Black: !isHelp })}>
        {updateValue}
      </text>
      <div className={cx("top_style", "padding8")}>
        <text className={cx("text_style_three", { font_color_Black: !isHelp })}>
          {updateName}
        </text>
        <SvgHelp fill={isHelp ? WHITE : BLUE} />
      </div>
    </div>
  );
};

export default CardComponent;
