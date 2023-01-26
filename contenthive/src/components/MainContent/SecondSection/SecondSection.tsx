import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import CheckIcon from "./CheckIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SecondSection = () => {
  return (
    <div className="grid grid-cols-2 gap-15 bg-bg-light pt-40 pb-20 pl-40 pr-40">
      <div className="text-black flex justify-center content-center">
        <Image
          height={100}
          width={600}
          src={"/demo-image.png"}
          alt={"demo-image"}
        />
      </div>

      <div className="text-black flex justify-center flex-col">
        <h2 className="text-left text-orange text-sm">02. HIVE MANAGEMENT</h2>
        <h2 className="pt-5 text-left text-black text-5xl">
          Manage Your Hive Easily
        </h2>
        <p className="pt-5 text-gray font-sans">
          With Boost App, it&apos;s very easy to manage your website, see the
          history, duplicate, and delete websites in a couple of clicks.
        </p>
        {/* CHECKS */}
        <div className="grid grid-cols-2 gap-3 pt-5">
          <div>
            <CheckIcon content="Simple Interface" />
          </div>
          <div>
            <CheckIcon content="Code Import & Export" />
          </div>
          <div>
            <CheckIcon content="Cloud Sync" />
          </div>
          <div>
            <CheckIcon content="Simple Interface" />
          </div>
        </div>
        <Button
          variant="contained"
          href="/"
          sx={{
            color: "black",
            width: 200,
            height: 60,
            fontSize: 20,
            backgroundColor: "#F49A23",
            borderRadius: 6,
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

export default SecondSection;
