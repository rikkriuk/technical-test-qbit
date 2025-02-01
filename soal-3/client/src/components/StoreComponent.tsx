import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CategoryState } from "../types/Category";
import { getCategory } from "../redux/slice/CategorySlice";
import { useAppDispatch } from "../redux/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StoreComponent: React.FC = (): JSX.Element => {
   const data = useSelector((state: { category: CategoryState }) => state.category);
   const { categories, loading, error } = data;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getCategory());
   }, []);

   if (loading) {
      return (
         <div className="pl-5 lg:pl-32 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-16 lg:mt-40">
            <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-evenly">
               <Skeleton height={40} width={200} />
               <Skeleton height={20} width={250} className="mt-2" />
               <Skeleton height={40} width={120} className="mt-5 hidden lg:block" />
            </div>

            <div className="category-list flex gap-7 overflow-x-auto whitespace-nowrap">
               {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="relative flex-shrink-0">
                     <Skeleton height={275} width={210} className="rounded-md" />
                     <Skeleton height={20} width={180} className="mt-2" />
                  </div>
               ))}
            </div>
         </div>
      );
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div className="pl-5 lg:pl-32 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-16 lg:mt-40">
         <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-evenly">
            <h4 className="text-2xl lg:text-[40px] leading-normal font-semibold text-[#23262F] max-w-36 lg:max-w-60">Baru di Toko Sekarang</h4>
            <p className="text-sm lg:text-base text-[#23262F] max-w-52 lg:max-w-64">Dapatkan barang terbaru segera dengan harga promo</p>
            <button className="hidden lg:flex items-center gap-4 mt-5 underline">
               Periksa Semua
               <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
                     fill="#23262F"
                  />
               </svg>
            </button>
         </div>

         <div className="category-list flex gap-7 overflow-x-auto whitespace-nowrap">
            {categories?.map((item, index) => (
               <div key={index} className="relative flex-shrink-0">
                  <img
                     className="w-[210px] lg:w-[275px] h-full rounded-md brightness-90"
                     src={item.image}
                     alt={item.title}
                  />
                  <h5 className="font-semibold text-lg lg:text-[28px] text-[#FFFFFF] absolute right-1/2 translate-x-1/2 bottom-9">
                     {item.title}
                  </h5>
               </div>
            ))}
         </div>
      </div>
   );
};

export default StoreComponent;
