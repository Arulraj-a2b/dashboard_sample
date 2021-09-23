
type Props={
  className?: string;
  fill?: string
}

const SvgSearch=({className,fill}:Props) =>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={className}>
      <path
        d="M17 11c0 1.82-.81 3.45-2.09 4.55A6 6 0 1117 11zm-1 5l3 3"
        stroke={fill}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSearch;
