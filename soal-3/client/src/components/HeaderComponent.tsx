import React, { useState, useEffect } from "react";

const HeaderComponent: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleNavigate: () => void = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-5 lg:px-32 py-5 flex fixed top-0 z-50 right-0 left-0 justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div>
        <h1
          className={`font-semibold text-2xl lg:font-bold lg:text-4xl transition-all duration-300 ${
            isScrolled ? "text-[#23262F]" : "text-[#FFFFFF]"
          }`}
        >
          HomeStyle
        </h1>
      </div>

      <button
        data-testid="open-button"
        onClick={handleNavigate}
        className="visible lg:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12H7"
            stroke={isScrolled ? "black" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 6H3"
            stroke={isScrolled ? "black" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 18H3"
            stroke={isScrolled ? "black" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav
        data-testid="navigation"
        className={`flex ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white lg:bg-transparent absolute lg:translate-x-0 lg:static top-0 left-0 lg:w-auto w-full h-screen lg:h-auto transition ease-in duration-150`}
      >
               <button
          data-testid="close-button"
          className="visible lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={handleNavigate}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5324 23.0749L9.35319 7.89567C8.85852 7.401 8.05652 7.401 7.56185 7.89567L7.46757 7.98995C6.97291 8.48461 6.97291 9.28662 7.46757 9.78129L22.6468 24.9605C23.1415 25.4552 23.9435 25.4552 24.4381 24.9605L24.5324 24.8662C25.0271 24.3716 25.0271 23.5696 24.5324 23.0749Z"
              fill={isOpen ? "#23262F" : "#FFFFFF"}
            />
            <path
              d="M22.6468 7.92511L7.46757 23.1043C6.9729 23.599 6.9729 24.401 7.46757 24.8957L7.56185 24.9899C8.05651 25.4846 8.85852 25.4846 9.35319 24.9899L24.5324 9.81072C25.0271 9.31606 25.0271 8.51405 24.5324 8.01939L24.4381 7.92511C23.9435 7.43044 23.1415 7.43044 22.6468 7.92511Z"
              fill={isOpen ? "#23262F" : "#FFFFFF"}
            />
          </svg>
        </button>
        <ul className="flex gap-10 lg:gap-14 flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start w-full h-full">
          {["Home", "About", "Feature", "Contact"].map((link) => (
            <li
              key={link}
              className={`text-base font-normal transition-all duration-300 ${
                activeLink === link
                  ? "font-semibold text-[#286F6C]"
                  : isScrolled
                  ? "text-black"
                  : "text-[#FFFFFF]"
              } hover:font-semibold ${isOpen && "text-black"}`}
            >
              <a
                href={`#${link.toLowerCase()}-section`}
                onClick={() => {
                  setActiveLink(link);
                  setIsOpen(false);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
