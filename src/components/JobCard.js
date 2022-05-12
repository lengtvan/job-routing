/* eslint-disable no-unused-vars */
import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// eslint-disable-next-line
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import DetailedJobCard from "./DetailedJobCard";

import useAuth from "../contexts/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router";

export default function JobCard({ job }) {
  let location = useLocation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { setOpen } = useAuth();

  return (
    <>
      <Card
        sx={{ maxWidth: 345 }}
        onClick={() => {
          console.log("here");
          navigate(`/jobs/${job.id}`, { state: { from: location } });
          setOpen(true);
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.city}
          </Typography>
        </CardContent>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.skills.slice(0, 4).map((skill) => (
            <Chip label={skill} />
          ))}
        </Typography>
      </Card>
    </>
  );
}
