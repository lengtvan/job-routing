import React from "react";
import { useSearchParams } from "react-router-dom";
import { DisplaySearch } from "../components/DisplaySearchedJobs";

const SearchPage = () => {
  return (
    <div>
      <DisplaySearch />
    </div>
  );
};

export default SearchPage;
