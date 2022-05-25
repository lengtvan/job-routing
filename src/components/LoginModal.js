// /* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import React from "react";
import { TextField, Box } from "@mui/material";

import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../contexts/useAuth";
import Modal from "@mui/material/Modal";

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
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const auth = useAuth();
  const methods = useForm();
  let location = useLocation();
  console.log(location);
  let from = location.state?.from?.pathname || "/";
  const { handleSubmit, control } = methods;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    let username = data.username;
    auth.login(username, () => {
      navigate(from, { replace: true });
      console.log(from);
    });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Username"
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                />
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
