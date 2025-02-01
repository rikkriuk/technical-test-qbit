import React from "react";
import ServiceImage from "../assets/services-image.png";

const ServicesComponent:React.FC = ():JSX.Element => {
   return (
      <div data-testid={"services-container"} className="px-5 lg:px-32 flex justify-evenly flex-col-reverse lg:flex-row items-center">
         <div className="mt-10">
            <img src={ServiceImage} alt="service-image" className="w-[650px]" />
         </div>

         <div>
            <div className="flex flex-col gap-3">
               <h3 className="font-semibold text-2xl lg:text-[40px] text-[#23262F] max-w-md leading-normal">Kami buat rumah Anda menjadi lebih estetis.</h3>
               <p className="text-[#23262F] font-normal text-sm lg:text-xl max-w-xl">Furniture Power adalah perangkat lunak sebagai layanan untuk sistem manajemen bisnis serbaguna. </p>
            </div>

            <div className="flex gap-5 mt-10">
               <i>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Ic_chechlist">
                  <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z" fill="#23262F"/>
                  </g>
                  </svg>
               </i>

               <div>
                  <h4 className="text-base lg:text-xl font-semibold text-[#23262F]">Layanan Penilaian</h4>
                  <p className="text-sm lg:text-base max-w-lg mt-4">Terkadang fitur memerlukan deskripsi singkat. Ini bisa berupa deskripsi yang lebih mendetail.</p>
               </div>
            </div>

            <div className="flex gap-5 mt-10">
               <i>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Ic_chechlist">
                  <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z" fill="#23262F"/>
                  </g>
                  </svg>
               </i>

               <div>
                  <h4 className="text-base lg:text-xl font-semibold text-[#23262F]">Layanan Penilaian</h4>
                  <p className="text-sm lg:text-base max-w-lg mt-4">Terkadang fitur memerlukan deskripsi singkat. Ini bisa berupa deskripsi yang lebih mendetail.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServicesComponent;