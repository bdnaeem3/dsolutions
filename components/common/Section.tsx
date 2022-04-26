// Components
import SectionHeading from "./SectionHeading";

// Interfaces
import { sectionInt } from "../../interfaces/props";

const Section: React.FC<sectionInt> = ({
  title,
  children,
  className = "",
  rest,
}) => {
  return (
    <div className={`py-50 ${className}`} {...rest}>
      {title && <SectionHeading title={title} />}
      <div className="container">{children}</div>
    </div>
  );
};

export default Section;
