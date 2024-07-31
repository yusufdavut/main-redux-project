"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import { toggleTheme } from "../lib/features/themeSlice";

function ToggleTheme() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const hanldeChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className="w-44 px-2 py-3 flex items-center justify-center border border-white rounded-md outline-none select-none cursor-pointer"
      onClick={hanldeChangeTheme}
    >
      ToggleTheme: {currentTheme}
    </div>
  );
}

export default ToggleTheme;
