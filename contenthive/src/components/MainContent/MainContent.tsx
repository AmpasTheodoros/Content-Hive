import React from "react";

import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import classes from "./MainContent.module.css";
import Card from "./FirstSection/Card/Card";
import CheckIcon from "./SecondSection/CheckIcon/CheckIcon";
import Image from "next/image";

const MainContent = () => {
  const options = {
    color: "#475153",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  };
  return (
    <div className="w-screen mt-20">
      <div className={`${classes.section} ${classes.heroSection}`}>
        <h1>BEE DIFFERENT</h1>
        <p>Make your website the hive of activity it deserves to be</p>
        <Button
          variant="contained"
          href="/"
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
        <Grid container spacing={2} sx={{ paddingTop: 1 }}>
          <Grid sx={options}>
            <CheckCircleIcon fontSize="small" sx={{ marginRight: 0.3 }} /> Free
            to use
          </Grid>
          <Grid sx={options}>
            <CheckCircleIcon fontSize="small" sx={{ marginRight: 0.3 }} />
            Easy to install
          </Grid>
        </Grid>
      </div>

      {/* SECTION 2 | HOW IT WORKS*/}
      <div className="p-40">
        <h2 className="text-center text-gray text-sm">01.HOW IT WORKS</h2>
        <h2 className="pt-5 text-center text-black text-4xl">
          LET THE CUSTOMERS <a className="text-orange">STING</a> WITH YOUR
          WEBSITE
        </h2>
        <h3 className="mt-3 text-center text-gray font-thin text-2xl">
          Talk to your customers in first person
        </h3>

        {/* CARDS */}
        <div className="flex flex-row justify-center ">
          <Card
            icon="/design-thinking.png"
            title="Design"
            content="Your unique hive, adjust it to your website as you like!"
          />
          <Card
            icon="/insert-code.png"
            title="Insert"
            content="Your hive at your page. Simply copy and paste it, that easy."
          />
          <Card
            icon="/preview.png"
            title="Increase"
            content="Your appeal, with a modern way of getting feedback"
          />
        </div>
      </div>

      {/* SECTION 3 | HIVE MANAGMENT  */}
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
          <h2 className="text-left text-gray text-sm">02.HIVE MANAGEMENT</h2>
          <h2 className="pt-5 text-left text-black text-5xl">
            Manage Your Hive Easily
          </h2>
          <p className="pt-5 text-gray font-thin">
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
    </div>
  );
};

export default MainContent;
