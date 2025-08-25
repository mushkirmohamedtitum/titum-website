import React from "react";
import BadgeIcon from "../icons/BadgeIcon";
import { THEME } from "@/constants/theme";
import { useTheme } from "../ThemeProvider";
import { MingcuteFan2Fill } from "../icons/MingcuteFan";
import { milestones } from "@/utils/milestones";
import type { Milestones } from "@/interface/Milestones";

const Milestones = () => {
  const { theme } = useTheme();

  return (
    <section className={`${theme === THEME.DARK ? "" : ""} w-full`}>
      <div
        className={`${
          theme === THEME.DARK ? "bg-black" : "bg-green-900 "
        } w-full p-[1.1rem] rounded-t-lg`}
      ></div>
      <div
        className={`${
          theme === THEME.DARK
            ? "bg-gray-900"
            : "bg-secondaryLightWhite rounded-b-lg"
        } w-full  p-5`}
      >
        <h5
          className={`${theme === THEME.DARK ? "" : ""} text-2xl font-semibold`}
        >
          Milestones
        </h5>

        <div className={`${theme === THEME.DARK ? "" : ""}`}>
          {milestones.map((milestone: Milestones) => {
            return (
              <div
                key={milestone.id}
                className={`${
                  theme === THEME.DARK ? "" : ""
                } flex items-center mt-4 space-y-2`}
              >
                {/* Icon */}
                <div
                  className={`${
                    theme === THEME.DARK ? "text-black" : "text-green-900"
                  } bg-slate-300 text-lg p-2 w-fit rounded-full`}
                >
                  <MingcuteFan2Fill />
                </div>

                {/* Text content */}
                <span
                  className={`${
                    theme === THEME.DARK ? "" : "text-green-900"
                  } ml-3`}
                >
                  {milestone.label}
                </span>

                {/* Badge icon */}
                <div
                  className={`${
                    theme === THEME.DARK ? "" : "text-green-900"
                  } ml-auto`}
                >
                  <BadgeIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
