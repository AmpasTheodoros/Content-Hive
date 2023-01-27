import React from "react";
import { Button } from "@mui/material";

const BuzzButton = (props: {
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
  color: string;
  hcolor: string;
  size: string;
  pad: number;
}) => {
  return (
    <Button
      variant="contained"
      href="/"
      onClick={props.handleOpen}
      sx={{
        width: parseInt(props.size.split("-")[0]),
        height: parseInt(props.size.split("-")[1]),
        fontSize: parseInt(props.size.split("-")[2]),
        color: props.color.split("-")[0],
        backgroundColor: props.color.split("-")[1],
        marginTop: props.pad,
        paddingLeft: 3,
        paddingRight: 3,
        "&:hover": {
          color: props.hcolor.split("-")[0],
          backgroundColor: props.hcolor.split("-")[1],
          transform: "scale(1.1)",
          transition: ".3s ease-in-out 0s",
        },
        "&:not(:hover)": {
          transform: "scale(1.0)",
          transition: ".4s ease-in-out 0s",
        },
      }}
    >
      BUZZ ON
    </Button>
  );
};

export default BuzzButton;
