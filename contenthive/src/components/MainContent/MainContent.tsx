import React from "react";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import classes from "./MainContent.module.css";

const MainContent = () => {
  const options = {
    color: "#475153",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  };
  return (
    <div className={classes.main}>
      <div className={classes.section}>
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
    </div>
  );
};

export default MainContent;
