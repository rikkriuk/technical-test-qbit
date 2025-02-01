import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductState } from "../types/Product";
import { useAppDispatch } from "../redux/store";
import { getProducts } from "../redux/slice/ProductSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductComponent: React.FC = (): JSX.Element => {
  const data = useSelector((state: { product: ProductState }) => state.product);
  const { product, totalPages, loading, error } = data;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts({ page: currentPage, limit: 8 }));
  }, [currentPage]);

  const handlePrev = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageDots = (): JSX.Element[] | null => {
    if (!totalPages) return null;
    const dots = [];
    for (let i = 1; i <= totalPages; i++) {
      dots.push(
        <span
          key={i}
          className={`w-3 h-3 mx-1 rounded-full ${
            i === currentPage ? "bg-black" : "bg-gray-300"
          }`}
        />
      );
    }
    return dots;
  };

  return (
    <div className="px-5 lg:px-32 mt-40 flex flex-col gap-16">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h4 className="font-semibold text-[40px] text-[#23262F]">Semua Produk</h4>
        <p className="text-[#23262F] text-base max-w-lg text-center">
          Produk yang kami sediakan hanya untuk Anda sebagai layanan kami, dipilih dari produk terbaik dengan kualitas nomor 1 terpercaya.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {loading ? (
          Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-[160px] lg:w-[285px] flex flex-col gap-3 my-3 lg:my-10">
                <Skeleton height={170} width="100%" className="rounded-lg" />
                <Skeleton height={20} width="100%" className="mt-4" />
                <div className="flex gap-5 items-center">
                  <Skeleton width={50} height={20} />
                  <Skeleton width={50} height={15} />
                </div>
              </div>
            ))
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          product?.map((item, index) => (
            <div key={index} className="w-[160px] lg:w-[285px] flex flex-col gap-3 my-3 lg:my-10">
              <div className="w-full h-[170px] lg:h-[292px] border border-gray-300 rounded-lg p-10">
                <img className="w-full h-full object-cover" src={item?.image} alt={item?.title} />
              </div>
              <h5 className="text-base lg:text-2xl font-semibold text-[#23262F]">{item?.title}</h5>
              <div className="flex gap-5 items-center">
                <p className="font-normal text-xs lg:text-base text-[#23262F]">Rp. {item?.price}</p>
                <p className="font-normal text-[10px] lg:text-sm text-gray-600 line-through">{item?.price_after_discount}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center items-center gap-10 mb-10 lg:text-2xl">
        <button  className={`${currentPage === 1 ? "text-gray-400" : "text-gray-900"}`} onClick={handlePrev} disabled={currentPage === 1}>
          <AiOutlineArrowLeft />
        </button>

        <div className="flex items-center">
          {totalPages && renderPageDots()}
        </div>

        <button className={`${currentPage === totalPages ? "text-gray-400" : "text-gray-900"}`} onClick={handleNext} disabled={currentPage === totalPages}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
