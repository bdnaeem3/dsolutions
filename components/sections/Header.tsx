/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import { header } from "../../data";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container">
        <div className="flex items-center justify-between px-10">
          <div className="cursor-pointer">
            <img src={header.logo} alt="" className="max-h-30" />
          </div>

          <ul className="flex">
            {_.map(header.menus, (item, i) => {
              return (
                <li
                  className="p-20 hover:bg-primary hover:text-white cursor-pointer"
                  key={i}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
