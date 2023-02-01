import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import Input from "@mui/joy/Input";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <div className="bg-orange px-10 sm:px-20 md:px-40 pt-10 md:pt-40 pb-1">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 auto-rows-max pb-10">
        <div className="col-span-2 text-6xl lg:text-7xl">
          <h4>
            Have a question? <br />
            Contact us.
          </h4>
          <p className="text-base">We&apos;ll be glad to help.</p>
        </div>
        <div>
          <h4 className="text-2xl font-sans pb-5">Join Waitlist</h4>
          <Input
            color="neutral"
            disabled={false}
            placeholder="example@gmail.com"
            size="lg"
            variant="outlined"
            startDecorator={<MailIcon />}
            endDecorator={<Button>Message</Button>}
          ></Input>
        </div>
      </div>
      <Image
        height={100}
        width={300}
        src={"/logo-white.png"}
        alt={"demo-image"}
        className="pb-1 "
      />
      <Divider orientation="horizontal" color="#fffff" />
      <div className="flex justify-between p-5">
        <p>© Created by</p>
        <p>All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
