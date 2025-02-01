import React from "react";
import HeroComponent from "../components/HeroComponent";

const HeaderContainer: React.FC = (): JSX.Element => {
  return (
    <section id="home-section">
      <HeroComponent />
    </section>
  );
};

export default HeaderContainer;