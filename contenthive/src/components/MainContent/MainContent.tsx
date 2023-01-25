import React from "react";

import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import classes from "./MainContent.module.css";
import Card from "./FirstSection/Card/Card";
import CheckIcon from "./SecondSection/CheckIcon/CheckIcon";
import Image from "next/image";
import IconText from "./ThirdSection/IconText/IconText";
import Footer from "components/Footer";

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

      {/* SECTION 1 | HOW IT WORKS*/}
      <div className="p-40">
        <h2 className="text-center text-orange text-sm">01. HOW IT WORKS</h2>
        <h2 className="pt-5 text-center text-black text-4xl">
          LET THE CUSTOMERS <a className="text-orange">STING</a> WITH YOUR
          WEBSITE
        </h2>
        <h3 className="mt-3 text-center text-gray font-sans text-xl">
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

      {/* SECTION 2 | HIVE MANAGMENT  */}
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

      {/* SECTION 3 | BENEFITS */}

      <div className="grid grid-cols-2 gap-15 gap-x-10 bg-bg-light pt-20 pb-20 pl-80 pr-80">
        <div className="text-black flex flex-col justify-start content-center">
          <h2 className="text-left text-orange text-sm pb-5">03. BENEFITS</h2>
          <h3 className="text-gray text-6xl">
            All-in-one App for Your Website
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-gray-light font-sans  text-xl">
            With Content Hive, you can easily create interactive campaings,
            <b> regardless of the website technology</b>. Create your unique
            hive to interact with your users in first person.
            <b> Boost your website </b>
            with the Content Hive App!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-15 gap-x-10 bg-bg-light pt-5 pb-20 pl-80 pr-80">
        <div className="text-black flex flex-col justify-start content-center">
          <IconText
            title="Multiple Layouts"
            icon="/Layout.svg"
            content="Change the look of your site easily with a variety of ready-made templates and beautiful layouts."
          />
          <IconText
            title="Knowledge Base"
            icon="/Knowledge.svg"
            content="Refer to it whenever you are stuck. Also, you can connect Confluence and share the documentation with teammates."
          />
        </div>
        <div className="text-black flex flex-col justify-start content-center">
          <IconText
            title="Safe Access"
            icon="/SafeAccess.svg"
            content="Don't worry about security: you are working on a local version of your site, it cannot be hacked or stolen."
          />
          <IconText
            title="Lifetime Updates"
            icon="/Access.svg"
            content="Once you've create an account, you get access to all the updates, whatever device you work on."
          />
        </div>
        <div className="text-black flex items-center col-start-3">
          <Image
            height={100}
            width={300}
            src={"/demo-image.png"}
            alt={"demo-image"}
          />
        </div>
      </div>

      {/* SECTION 4 | ANALYTICS */}
      <div className="flex flex-col justify-center pt-32 pb-20 pl-80 pr-80">
        <h2 className="text-center text-orange text-sm pb-5">04. BENEFITS</h2>
        <h3 className="text-center text-gray text-6xl">
          Everything is Super Easy
        </h3>
        <p className="text-center text-gray pt-5 font-sans">
          Configure all metrics without the help of a marketer.
        </p>
        <Image
          height={1080}
          width={1920}
          src={"/coreui.png"}
          alt={"demo-image"}
          className="mt-20 rounded-xl drop-shadow-xl"
        />
        <div className="text-black grid grid-cols-4 gap-15 gap-x-10 content-center pt-16">
          <IconText
            title="10+"
            icon="/widgets.svg"
            content="Widgets"
            type="auto"
          />
          <IconText
            title="50+"
            icon="/Access.svg"
            content="Types of feedback"
            type="auto"
          />
          <IconText
            title="100+"
            icon="/styles.svg"
            content="Styles"
            type="auto"
          />
          <IconText
            title="Unlimited"
            icon="/unlimited.svg"
            content="Hives"
            type="auto"
          />
        </div>
      </div>

      {/* SECTION 5 |  */}

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

      {/* SECTION 6 */}
      <div className="grid grid-cols-4 gap-5 bg-bg-light pt-40 pb-20 pl-20 pr-20">
        <div className="text-black flex justify-center col-start-2 content-center">
          <Image height={100} width={250} src={"/phone.png"} alt={"phone"} />
        </div>

        <div className="text-black flex justify-center flex-col col-span-1">
          <h2 className="text-left text-orange text-sm">
            05. RESPONSIVE DESIGN
          </h2>
          <h2 className="pt-5 text-left text-black text-5xl">
            Manage Your Hive Easily
          </h2>
          <p className="pt-5 text-gray font-sans">
            Boost App is one of the few website management and editing services
            available on smartphones. <br /> <br />
            You can easily connect dozens of services and widgets to your
            website, edit its content, create new pages, and even delete and
            duplicate sites right from your smartphone! Boost App is available
            for iOS and Android devices. <br />
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
      <Footer />
    </div>
  );
};

export default MainContent;
