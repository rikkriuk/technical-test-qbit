import React, { useEffect } from "react";
import { DataState } from "../types/Data";
import { useSelector } from "react-redux";
import { getAllData } from "../redux/slice/DataSlice";
import { useAppDispatch } from "../redux/store";

const DataComponent: React.FC = (): JSX.Element => {
   const dataState = useSelector((state: {data: DataState}) => state.data);
   const { data, loading, error } = dataState;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAllData())
   }, []);

   if (loading) {
      return <div>Memuat...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div className="px-5 lg:px-32 flex justify-center items-center absolute -bottom-32 lg:-bottom-24 left-0 right-0">
         <div className="bg-[#286F6C] grid grid-cols-2 lg:grid-cols-4 items-center py-10 rounded-3xl w-full">
            <div className="text-[#FFFFFF] border-e-2 w-full flex flex-col gap-3 items-center">
               <h3 className="font-semibold text-2xl lg:text-[40px] text-center">{data?.experience}</h3>
               <p className="text-sm lg:text-xl max-w-24 lg:max-w-32 text-center">Tahun Pengalaman</p>
            </div>

            <div className="text-[#FFFFFF] w-full lg:border-e-2 flex flex-col gap-3 items-center">
               <h3 className="font-semibold text-2xl lg:text-[40px] text-center">{data?.country}</h3>
               <p className="text-sm lg:text-xl max-w-24 lg:max-w-32 text-center">Dibuka di negara</p>
            </div>

            <div className="text-[#FFFFFF] w-full mt-14 lg:mt-0 border-e-2 flex flex-col gap-3 items-center">
               <h3 className="font-semibold text-2xl lg:text-[40px] text-center">{data?.sold}</h3>
               <p className="text-sm lg:text-xl max-w-28 text-center">Furnitur terjual</p>
            </div>

            <div className="text-[#FFFFFF] w-full mt-14 lg:mt-0 flex flex-col gap-3 items-center">
               <h3 className="font-semibold text-2xl lg:text-[40px] text-center">{data?.variant}</h3>
               <p className="text-sm lg:text-xl max-w-36 text-center">Varian Furnitur</p>
            </div>
         </div>
      </div>
   )
}

export default DataComponent;