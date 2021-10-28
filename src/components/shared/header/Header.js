import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const navigation = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Marketplace", to: "/" },
    { name: "Company", to: "/company" },
  ];
  return (
    <header>
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
