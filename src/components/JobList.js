import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import JobCard from "./JobCard";
import jobs from "../jobs.json";
import { Pagination } from "@mui/material";

const JobList = () => {
  const [page, setPage] = useState(1);
  console.log("jobs", jobs);
  //jobs.slice
  const totalJobs = jobs.length;
  let limit = 5;
  const [x, setX] = useState(0);
  const [y, setY] = useState(5);
  const turnPage = () => {
    setX((x) => (x += 5));
    setY((y) => (y += 5));
    setPage(page + 1);
  };
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {jobs.slice(limit * (page - 1), limit * page).map((job) => (
          <JobCard job={job} />
        ))}
      </Stack>
      <Pagination count={3} onClick={turnPage} />
    </>
  );
};

export default JobList;
