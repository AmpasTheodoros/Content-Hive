import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import CheckIcon from "./CheckIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuzzButton from "components/BuzzButton";

const SecondSection = (props: {
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-bg-light pt-20 pb-20 px-10">
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
        <BuzzButton
          handleOpen={props.handleOpen}
          color={"black-orange"}
          hcolor={"orange-#475153"}
          size={"180-50-16"}
          pad={3}
        />
      </div>
    </div>
  );
};

export default SecondSection;
