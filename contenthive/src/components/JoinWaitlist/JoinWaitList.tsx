import React from "react";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Modal, TextField } from "@mui/material";

const JoinWaitlist = (props: { open: boolean; close: () => void }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: "20px",
    boxShadow: 24,
    pt: 20,
    pb: 20,
    pl: 10,
    pr: 10,
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
        sx={style}
        className="bg-polygon bg-contain bg-no-repeat bg-center overflow-visible"
      >
        <h2 className="text-black text-center text-5xl pb-10 ">
          Join The Waitlist
        </h2>
        <CssTextField
          sx={{ border: 0, borderColor: "#F49A23" }}
          fullWidth
          label="Email Address"
          id="fullWidth"
          type="email"
          className="border-orange"
        />
        <div className="flex items-center justify-center">
          <Button
            variant="contained"
            href="/"
            // onClick={handleSubscribe}
            sx={{
              color: "white",
              width: 200,
              height: 60,
              fontSize: 20,
              backgroundColor: "black",
              borderRadius: 15,
              marginTop: 4,
              paddingLeft: 3,
              paddingRight: 3,
              "&:hover": {
                backgroundColor: "#bd7d21",
                color: "white",
                border: "3px solid black",
              },
            }}
          >
            BUZZ ON
          </Button>
        </div>
        <p className="text-black text-center text-sm pt-2">
          *Promise That We Will Not Spam*
        </p>
      </Box>
    </Modal>
  );
};

export default JoinWaitlist;
