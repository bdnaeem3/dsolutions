/* eslint-disable @next/next/no-img-element */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <img src="/img/logo.png" alt="" className="max-h-30" />
          </div>

          <ul className="flex">
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Home
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              About
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Service
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Portfolio
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Team
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Testimonial
            </li>
            <li className="p-20 hover:bg-primary hover:text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
