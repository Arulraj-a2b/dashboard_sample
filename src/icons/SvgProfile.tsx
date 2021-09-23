const defaultProps = {
  fill: "#000",
  className: "",
};
const SvgProfile = ({ fill, className }: typeof defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
    >
      <path
        d="M13.487 13.617a7.723 7.723 0 016.423 3.4l.09.132V21H4v-3.851l.09-.133a7.727 7.727 0 016.422-3.399zM12 3c2.647 0 4.8 2.129 4.8 4.746 0 2.617-2.153 4.746-4.8 4.746s-4.8-2.129-4.8-4.746C7.2 5.13 9.353 3 12 3z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};
SvgProfile.defaultProps = defaultProps;

export default SvgProfile;
