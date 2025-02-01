import React from "react";
import ServicesComponent from "../components/ServicesComponent";

const ServiceContainer:React.FC = ():JSX.Element => {
   return (
      <section id="about-section" className="mt-56">
         <ServicesComponent />
      </section>
   )
}

export default ServiceContainer;