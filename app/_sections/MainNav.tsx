import React from "react";
import { Logo } from "../_components/Logo";
import { MainMenu } from "../_components/MainMenu";

export const MainNav = () => {
  return (
    <section className="w-full bg-white shadow-sm">
      <div className="w-full h-full max-w-screen-xl mx-auto flex flex-row justify-between items-end pl-6 md:pl-12 pr-0 md:pr-12">
        <div className="w-24 md:w-24 xl:w-28">
          <Logo></Logo>
        </div>
        <MainMenu></MainMenu>
      </div>
    </section>
  );
};
