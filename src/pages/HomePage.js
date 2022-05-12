import React from "react";
import JobList from "../components/JobList";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  return (
    <div>
      <JobList />
    </div>
  );
};

export default HomePage;
