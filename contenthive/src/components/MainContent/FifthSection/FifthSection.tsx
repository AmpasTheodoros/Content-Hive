import React from "react";

import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const FifthSection = () => {
  return (
    <div className=" flex content-center justify-center items-center ">
      <div className="bg-orange w-4/5 rounded-md mt-20 p-20">
        <h3 className="text-center text-white text-6xl">
          Manage and Edit Your Hives <br />
          in a Couple of Clicks
        </h3>
        <p className="text-center text-white text-md mt-5 font-sans">
          Try all the features of our app for free. No credit card required.
        </p>
        <div className="flex justify-center">
          <Button
            variant="contained"
            href="/"
            sx={{
              color: "#F49A23",
              width: 180,
              height: 50,
              fontSize: 14,
              backgroundColor: "white",
              marginTop: 3,
              paddingLeft: 2,
              paddingRight: 2,
              "&:hover": {
                backgroundColor: "gray",
                color: "white",
              },
            }}
            className="flex align-middle items-center justify-center"
          >
            BUZZ ON
          </Button>
          <Button
            variant="text"
            href="/"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              color: "#dbdbdb",
              width: 180,
              height: 50,
              fontSize: 14,
              marginTop: 3,
              paddingLeft: 2,
              paddingRight: 2,
              "&:hover": {
                color: "white",
                textDecoration: "underline",
              },
            }}
            className="ml-5 flex align-middle items-center justify-center"
          >
            How It Works
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
