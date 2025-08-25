import React from "react";
import { useTheme } from "../ThemeProvider";
import SecureIcon from "../icons/SecureIcon";
import CloudBackup from "../icons/CloudBackup";
import { THEME } from "@/constants/theme";

const TheSecondChild = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full px-5 md:px-20 lg:px-32 ${
        theme === THEME.DARK ? "" : "bg-logoPurple"
      }`}
    >
      <div
        className={`w-full max-w-[1500px] mx-auto py-14 flex flex-col lg:flex-row text-center md:text-left items-center gap-x-5 ${
          theme === THEME.DARK ? "" : "bg-logoPurple"
        }`}
      >
        <h3
          className={`${
            theme === "dark" ? "" : "text-slate-100"
          } text-2xl font-semibold`}
        >
          Various kinds of feature varience that can help you for ERP
          management.
        </h3>

        <div className="flex flex-col md:flex-row text-left items-start lg:items-center mt-5 gap-y-4 md:gap-x-8">
          {/* Safe and Secure */}
          <div className="flex items-center gap-x-3">
            {/* Icon */}
            <div
              className={`${
                theme === "dark" ? "" : "bg-green-900 rounded-full p-3"
              }`}
            >
              <div
                className={`${
                  theme === "dark" ? "" : "text-slate-100"
                } text-xl lg:text-5xl`}
              >
                <SecureIcon />
              </div>
            </div>

            {/* Content */}
            <span className={`${theme === "dark" ? "" : "text-slate-100"}`}>
              Safe and Secure
            </span>
          </div>

          {/* Access from anywhere and anytime */}
          <div className=" flex items-center gap-3">
            {/* Icon */}
            <div
              className={`${
                theme === THEME.DARK ? "" : "bg-green-900 rounded-full p-3"
              }`}
            >
              <div
                className={`${
                  theme === THEME.DARK ? "" : "text-slate-100"
                } text-xl lg:text-5xl`}
              >
                <CloudBackup />
              </div>
            </div>

            {/* Content */}
            <span className={`${theme === THEME.DARK ? "" : "text-slate-100"}`}>
              Access from anywhere and anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSecondChild;
