const defaultProps = {
  fill: "#000",
  className: "",
};
function SvgHelp({ fill, className }: typeof defaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
    >
      <path
        d="M12 2c5.522 0 10 4.48 10 10 0 5.524-4.478 10-10 10S2 17.524 2 12C2 6.48 6.478 2 12 2zm-.217 12.753c-.868 0-1.575.728-1.575 1.623 0 .896.707 1.624 1.575 1.624s1.575-.728 1.575-1.624c0-.895-.707-1.623-1.575-1.623zM12.01 6c-1.815 0-2.99.766-3.913 2.133a.574.574 0 00.118.77l.98.768c.236.184.572.14.756-.098.57-.735.992-1.159 1.882-1.159.7 0 1.564.464 1.564 1.164 0 .528-.423.8-1.114 1.199-.805.465-1.87 1.044-1.87 2.494v.229c0 .31.244.563.545.563h1.648a.554.554 0 00.545-.563v-.135C13.152 12.36 16 12.318 16 9.6 16 7.553 13.94 6 12.01 6z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
}
SvgHelp.defaultProps = defaultProps;

export default SvgHelp;
