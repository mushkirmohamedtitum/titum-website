import React from "react";
import { useTheme } from "../ThemeProvider";
import { THEME } from "@/constants/theme";

const TheHeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full min-h-[100vh] mt-[7.9rem] flex items-center justify-center px-5 md:px-20 lg:px-32">
      {/* Video background */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://www.youtube.com/embed/pW8TJq3NFhc?autoplay=1&mute=1&loop=1&playlist=pW8TJq3NFhc&controls=0&modestbranding=1"
        title="Titum intro video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 ${
          theme === THEME.DARK ? "bg-black/90" : "bg-white/92"
        } z-10`}
      />

      {/* Content */}
      <div
        className={`relative z-20 w-full max-w-[1500px] px-5 py-10 rounded-md ${
          theme === THEME.DARK ? "" : ""
        }`}
      >
        <h2
          className={`${
            theme === THEME.DARK
              ? "selection:bg-white selection:text-black text-white"
              : "text-logoPurple selection:bg-green-800 selection:text-white"
          } text-center text-3xl md:text-5xl md:leading-[4.3rem] font-[800]`}
        >
          Titum is here to make it easier and more efficient for you to grow
          your business with trusted solutions and support.
        </h2>

        <span
          className={`${
            theme === THEME.DARK
              ? "selection:bg-white selection:text-black text-slate-300 mt-8"
              : "text-green-800 mt-5 italic"
          } block text-center font-semibold`}
        >
          Delivering solutions today, built with quality that empowers your
          tomorrow.
        </span>

        <div className="flex justify-center mt-5">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md ${
              theme === THEME.DARK ? "bg-white" : "bg-logoPurple"
            } px-10 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/50 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          >
            Let&apos;s talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheHeroSection;
