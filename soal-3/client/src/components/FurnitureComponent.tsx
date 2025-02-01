import React from "react";
import FurnitureImage from "../assets/furniture-image.png";

const FurnitureComponent: React.FC = (): JSX.Element => {
   return (
      <div className="px-5 lg:px-32 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-8 lg:mt-40 justify-evenly items-center lg:items-start">
         <div className="flex flex-col gap-4 lg:gap-9">
            <h4 className="text-2xl lg:text-[40px] font-semibold text-[#23262F] max-w-xl leading-normal">Produsen Furnitur Terbaik Pilihan Anda</h4>

            <p className="text-sm lg:text-xl text-[#23262F] max-w-xl">Furniture Power adalah perangkat lunak sebagai layanan (SaaS) untuk sistem manajemen bisnis serbaguna, khususnya bagi mereka yang menjalankan dua atau lebih bisnis. Jelajahi masa depan dengan Furniture Power sebagai perangkat lunak layanan.</p>
         </div>

         <div>
            <img src={FurnitureImage} alt="furniture-image" className="w-[650px]" />
         </div>
      </div>
   )
}

export default FurnitureComponent;