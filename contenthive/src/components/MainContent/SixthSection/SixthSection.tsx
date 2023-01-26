import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const SixthSection = () => {
  return (
    <div className="grid grid-cols-4 gap-5 pt-40 pb-20 pl-20 pr-20">
      <div className="text-black flex justify-center col-start-2 content-center">
        <Image height={100} width={250} src={"/phone.png"} alt={"phone"} />
      </div>

      <div className="text-black flex justify-center flex-col col-span-1">
        <h2 className="text-left text-orange text-sm">05. RESPONSIVE DESIGN</h2>
        <h2 className="pt-5 text-left text-black text-5xl">
          Manage Your Hive Easily
        </h2>
        <p className="pt-5 text-gray font-sans">
          Boost App is one of the few website management and editing services
          available on smartphones. <br /> <br />
          You can easily connect dozens of services and widgets to your website,
          edit its content, create new pages, and even delete and duplicate
          sites right from your smartphone! Boost App is available for iOS and
          Android devices. <br />
          <br /> Its hard to imagine an easier way to manage your website!
        </p>
        <Button
          variant="contained"
          href="/"
          sx={{
            color: "black",
            width: 150,
            height: 50,
            fontSize: 15,
            backgroundColor: "#F49A23",
            marginTop: 4,
            paddingLeft: 3,
            paddingRight: 3,
            "&:hover": {
              backgroundColor: "black",
              color: "#F49A23",
            },
          }}
        >
          BUZZ ON
        </Button>
      </div>
    </div>
  );
};

export default SixthSection;
