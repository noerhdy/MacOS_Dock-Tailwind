import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setIsChecked(isDark);

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const handleCheckboxChange = () => {
    const newCheckedStatus = !isChecked;
    const newTheme = newCheckedStatus ? "dark" : "light";

    setIsChecked(newCheckedStatus);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="box block h-8 w-14 rounded-full border dark:border-zinc-800 bg-primary"></div>
        <div
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 ${
            isChecked ? "translate-x-6" : ""
          }`}
        >
          {isChecked ? (
            <Moon size={15} className="dark:text-white" />
          ) : (
            <Sun size={15} className="dark:text-white" />
          )}
        </div>
      </div>
    </label>
  );
};

export default ToggleButton;
