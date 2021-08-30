import React from "react";
import { Hero } from "./hero.component";
import { InstalledTools } from "./installed.component";
import { Search } from "./search.component";

export const MainContent = () => {
  return (
    <div>
      <Search />
      <Hero />
      <InstalledTools />
    </div>
  );
};
