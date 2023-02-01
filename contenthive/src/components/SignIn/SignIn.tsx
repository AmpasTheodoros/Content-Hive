import React from "react";
import "animate.css";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import Link from "next/link";

const SignIn = (props: {
  open: boolean;
  close: () => void;
  handleSubmit: () => void;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: "20px",
    boxShadow: 24,
    py: 20,
    px: 10,
  };

  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const handleClose = () => props.close();
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        onSubmit={props.handleSubmit}
        noValidate
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          borderRadius: "20px",
          boxShadow: 24,
          py: 20,
          px: 10,
        }}
        className="bg-polygon bg-contain bg-no-repeat bg-center overflow-visible"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          className="text-black"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          className="text-black"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            width: 300,
            height: 50,
            fontSize: 16,
            color: "orange",
            backgroundColor: "gray",
            marginTop: 10,
            paddingLeft: 3,
            paddingRight: 3,
            "&:hover": {
              color: "orange",
              backgroundColor: "gray",
              transform: "scale(1.1)",
              transition: ".3s ease-in-out 0s",
            },
            "&:not(:hover)": {
              transform: "scale(1.0)",
              transition: ".4s ease-in-out 0s",
            },
          }}
          className="text-black"
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" className="text-black">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" className="text-black">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SignIn;
