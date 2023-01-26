import React from "react";
import { Button } from "@mui/material";

const BuzzButton = (props: { handleOpen: any }) => {
  return (
    <Button
      variant="contained"
      href="/"
      onClick={props.handleOpen}
      sx={{
        color: "white",
        width: 200,
        height: 60,
        fontSize: 20,
        backgroundColor: "black",
        borderRadius: 6,
        marginTop: 4,
        paddingLeft: 3,
        paddingRight: 3,
        "&:hover": {
          backgroundColor: "#475153",
          color: "#F49A23",
        },
      }}
    >
      BUZZ ON
    </Button>
  );
};

export default BuzzButton;
