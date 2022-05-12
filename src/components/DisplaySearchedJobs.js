import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import jobs from "../jobs";
import JobCard from "./JobCard";
export function DisplaySearch() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  let q = searchParams.get("q");
  const [x, setX] = useState(0);
  const [y, setY] = useState(5);
  const turnPage = () => {
    setX((x) => (x += 5));
    setY((y) => (y += 5));
  };
  console.log(q);
  console.log(jobs);
  const searchedJobs = jobs.filter(
    (job) =>
      job.city.toLowerCase().includes(q.toLowerCase()) ||
      job.description.toLowerCase().includes(q.toLowerCase()) ||
      job.title.toLowerCase().includes(q.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(q.toLowerCase()))
  );
  console.log(searchedJobs);
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {searchedJobs.slice(x, y).map((job) => (
          <JobCard job={job} />
        ))}
      </Stack>
      <Pagination count={3} onClick={turnPage} />
    </>
  );
}
