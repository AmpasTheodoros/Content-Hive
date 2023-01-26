import React from "react";
import Image from "next/image";

import IconText from "../ThirdSection/IconText";

const FourthSection = () => {
  return (
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
  );
};

export default FourthSection;
