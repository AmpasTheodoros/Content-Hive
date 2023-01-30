import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import Footer from "components/Footer";
import BuzzButton from "components/BuzzButton";
import JoinWaitlist from "components/JoinWaitlist";

const MainContent = () => {
  const options = {
    color: "#475153",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="w-screen mt-20">
      <div className="h-90vh flex flex-col items-center justify-center bg-hero-pattern bg-no-repeat bg-center bg-90vh">
        <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold">
          BEE DIFFERENT
        </h1>
        <p className="text-gray text-sm md:text-lg lg:text-xl">
          Make your website the hive of activity it deserves to be
        </p>

        <JoinWaitlist
          open={open}
          close={() => {
            setOpen(false);
          }}
        />
        <BuzzButton
          handleOpen={handleOpen}
          color={"orange-black"}
          hcolor={"orange-#475153"}
          size={"200-60-20"}
          pad={3}
        />

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
      <FirstSection />

      {/* SECTION 2 | HIVE MANAGMENT  */}
      <SecondSection handleOpen={handleOpen} />

      {/* SECTION 3 | BENEFITS */}
      <ThirdSection />

      {/* SECTION 4 | ANALYTICS */}
      <FourthSection />

      {/* SECTION 5 | MANAGE AND EDIT YOUR HIVES */}
      <FifthSection handleOpen={handleOpen} />

      {/* SECTION 6 | MANAGE YOUR HIVE EASILY */}
      <SixthSection handleOpen={handleOpen} />

      <Footer />
    </div>
  );
};

export default MainContent;
