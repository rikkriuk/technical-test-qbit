import React, { useEffect, useState } from "react";
import BannerImage from "../assets/banner-image.png";
import { useSelector } from "react-redux";
import { BannerState } from "../types/Banner";
import { useAppDispatch } from "../redux/store";
import { postEmail, resetSuccess } from "../redux/slice/BannerSlice";
import DOMPurify from "dompurify";

const BannerComponent: React.FC = (): JSX.Element => {
  const data = useSelector((state: { banner: BannerState }) => state.banner);
  const [email, setEmail] = useState<string>("");
  const { succces, loading, error } = data;
  const [isError, setIsError] = useState<boolean | string>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (succces) {
      setEmail("");
      const timer = setTimeout(() => {
        dispatch(resetSuccess());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [succces]);

  useEffect(() => {
    if (error) {
      setIsError(error);
    } else {
      setIsError(false);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsError("");

    const sanitizedEmail = DOMPurify.sanitize(email);

    if (!isValidEmail(sanitizedEmail)) {
      setIsError("Silakan masukkan alamat email yang valid.");
      return;
    }

    dispatch(postEmail(sanitizedEmail));
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section id="contact-section" className="relative mt-14">
      <img
        src={BannerImage}
        alt="banner-image"
        className="w-full lg:h-full h-[350px] object-cover"
        data-testid="banner-image"
      />

      <div className="absolute text-center lg:text-start lg:left-2/4 top-1/4 w-full lg:w-1/2 p-5 text-white">
        <h6 className="text-2xl leading-snug lg:text-[40px] font-semibold">
          Dapatkan lebih banyak diskon <br />
          Dari pesanan Anda
        </h6>
        <p className="text-sm lg:text-xl my-4">Bergabung dengan daftar lewat email kami</p>

        <form onSubmit={handleSubmit} className="flex mt-6 flex-row gap-4 w-full">
          <input
            type="text"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan alamat email Anda"
            className="text-black text-xs md:text-base rounded-md px-4 py-2 w-3/5"
            data-testid="email-input"
          />
          <button
            disabled={loading}
            type="submit"
            className="whitespace-nowrap bg-[#23262F] text-xs lg:text-xl text-white p-4 px-8 lg:px-5 rounded-md"
            data-testid="submit-button"
          >
            Belanja
          </button>
        </form>
        {isError && <p className="text-red-500 mt-4" data-testid="error-message">{isError}</p>}
        {succces && (
          <p className="text-white mt-4" data-testid="success-message">
            Email berhasil ditambahkan!
          </p>
        )}
      </div>
    </section>
  );
};

export default BannerComponent;