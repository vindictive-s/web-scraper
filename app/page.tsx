import React from "react";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl text-center mt-2 text-black/80 font-bold mb-5">
        Amazon Web Scraper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">
        Some H2 Header
      </h2>
    </div>
  );
};

export default HomePage;
