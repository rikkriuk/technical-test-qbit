import React, { useEffect, useState } from "react";
import TestimonialImage from "../assets/testimonial-image.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { TestimonialState } from "../types/Testimonial";
import { useAppDispatch } from "../redux/store";
import { getTestimonials } from "../redux/slice/TestimonialSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimonialComponent: React.FC = (): JSX.Element => {
  const data = useSelector((state: { testimonial: TestimonialState }) => state.testimonial);
  const { testimonials, totalPages, loading, error } = data;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTestimonials({ page: currentPage, limit: 1 }));
  }, [currentPage, dispatch]);

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-5 lg:px-32 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-8 lg:mt-40 justify-evenly items-center lg:items-start relative pb-32">
      <div className="flex flex-col gap-4 lg:gap-9">
        <h5 className="text-2xl lg:text-[40px] font-semibold text-[#23262F] mb-7">
          Apa yang orang katakan tentang kami
        </h5>

        <div className="flex flex-col gap-9">
          {loading ? (
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center">
                <div>
                  <Skeleton circle width={80} height={80} />
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton width={120} height={20} />
                  <Skeleton width={100} height={15} />
                </div>
              </div>
              <Skeleton width="100%" height={20} />
            </div>
          ) : testimonials.length > 0 ? (
            <>
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full object-cover"
                    src={testimonials[0]?.image}
                    alt={testimonials[0]?.name}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h6 className="text-sm lg:text-xl font-semibold text-[#23262F]">
                    {testimonials[0]?.name}
                  </h6>
                  <p className="text-[10px] lg:text-sm font-normal text-gray-500">
                    {testimonials[0]?.title}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#23262F] font-normal text-sm lg:text-xl max-w-xl">
                  “{testimonials[0]?.message}”
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Tidak ada testimonial tersedia.</p>
          )}
        </div>

        <div className="absolute bottom-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:static flex gap-10 items-center">
          <button
            onClick={handlePrev}
            disabled={currentPage <= 1}
            className={`${
              currentPage > 1 ? "bg-[#286F6C] text-white" : "bg-white text-black shadow-sm"
            } p-4 rounded-full text-lg lg:text-2xl transition-all duration-300`}
          >
            <AiOutlineArrowLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages}
            className={`${
              currentPage < totalPages ? "bg-[#286F6C] text-white" : "bg-white text-black shadow-sm"
            } p-4 rounded-full text-lg lg:text-2xl transition-all duration-300`}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      <div>
         <img src={TestimonialImage} alt="testimonial-image" className="w-[650px]" />
      </div>
    </div>
  );
};

export default TestimonialComponent;
