import React, { useEffect } from "react";
import DataComponent from "./DataComponent";
import { useSelector } from "react-redux";
import { Hero } from "../types/Hero";
import { getHeroData } from "../redux/slice/HeroSlice";
import { useAppDispatch } from "../redux/store";

const HeroComponent: React.FC = (): JSX.Element => {
   const data = useSelector((state: { hero: Hero }) => state.hero);
   const { hero, loading, error } = data;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getHeroData());
   }, []);

   if (loading) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
         </div>
      );
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <section className="relative h-screen hero-section">
         <img className="absolute top-0 object-cover h-screen w-full brightness-75" src={`${hero?.banner}`} alt={`${hero?.title}`} />
         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
         
         <div className="px-14 relative flex justify-center items-center flex-col gap-10 z-10 h-full">
            <h2 className="max-w-5xl font-semibold text-2xl lg:text-[64px] leading-tight text-[#FFFFFF] text-center">
               {hero?.title}
            </h2>
            <p className="font-normal text-sm lg:text-xl text-[#FFFFFF] text-center max-w-2xl">
               {hero?.description}
            </p>
            <button className="px-14 lg:px-20 py-4 bg-white/30 text-white font-semibold text-sm lg:text-xl rounded-xl shadow-lg border border-white/20 backdrop-blur-lg">
               Belanja Sekarang
            </button>
         </div>

         <DataComponent />
      </section>
   );
};

export default HeroComponent;
