import React from "react";
import FilterBanner from "./Banner/FilterBanner";
import RollingBanner from "./Banner/RollingBanner";
import SearchBanner from "./Banner/SearchBanner";

function Main() {
  return (
    <section className="main">
      <RollingBanner />
      <FilterBanner />
      <SearchBanner />
    </section>
  );
}

export default Main;
