import { iconInt } from "../interfaces/props";

const AngleRight: React.FC<iconInt> = ({ color, height, width, rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    fill={color || "currentColor"}
    height={height}
    width={width}
    {...rest}
  >
    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
  </svg>
);

export default AngleRight;
