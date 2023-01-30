import React from "react";

import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BuzzButton from "components/BuzzButton";

const FifthSection = (props: {
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <div className=" flex content-center justify-center items-center ">
      <div className="bg-orange w-4/5 rounded-md mt-10 p-10 lg:p-20">
        <h3 className="text-center text-white text-2xl sm:text-4xl lg:text-6xl">
          Manage and Edit Your Hives <br />
          in a Couple of Clicks
        </h3>
        <p className="text-center text-white text-md sm:text-lg lg:text-xl mt-5 pb-5 font-sans">
          Try all the features of our app for free. No credit card required.
        </p>
        <div className="flex max-sm:flex-col items-center justify-center">
          <BuzzButton
            handleOpen={props.handleOpen}
            color={"orange-white"}
            hcolor={"orange-gray"}
            size={"180-50-14"}
            pad={0}
          />
          <Button
            variant="text"
            href="/"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              color: "#dbdbdb",
              width: 180,
              height: 50,
              fontSize: 14,
              marginTop: 0,
              paddingLeft: 3,
              paddingRight: 3,
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
