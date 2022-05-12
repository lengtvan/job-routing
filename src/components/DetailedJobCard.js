/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// eslint-disable-next-line
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import jobs from "../jobs";
import { useLocation, useParams } from "react-router";
import Modal from "@mui/material/Modal";
import useAuth from "../contexts/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 345,
};
export default function DetailedJobCard() {
  let params = useParams();
  let jobID = params.jobID;
  const { open, setOpen } = useAuth();

  const jobToDisplay = jobs.find((job) => job.id === jobID);
  const handleClose = () => setOpen(false);
  console.log(open);
  console.log("haha");
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {jobToDisplay.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {jobToDisplay.city}
            </Typography>
          </CardContent>
          <Typography variant="body2" color="text.secondary">
            {jobToDisplay.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Required years of experience:{jobToDisplay.yrsXPExpected}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary Range: {jobToDisplay.salaryLow}-{jobToDisplay.salaryHigh}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {jobToDisplay.skills.slice(0, 4).map((skill) => (
              <Chip label={skill} />
            ))}
          </Typography>
        </Card>
      </Modal>
    </>
  );
}
