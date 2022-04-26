// Components
import AngleRight from "./AngleRight";

// Interfaces
import { iconHocInt } from "../interfaces/props";

const Icon: React.FC<iconHocInt> = ({
  name,
  color,
  height,
  width,
  ...rest
}) => {
  switch (name) {
    case "angle-right":
      return (
        <AngleRight color={color} height={height} width={width} {...rest} />
      );
    default:
      return (
        <AngleRight color={color} height={height} width={width} {...rest} />
      );
  }
};

export default Icon;
