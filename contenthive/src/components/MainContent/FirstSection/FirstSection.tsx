import React from "react";

import Card from "./Card";

const FirstSection = () => {
  return (
    <div className="w-screen mt-20">
      <div className="pt-40 pb-20">
        <h2 className="text-center text-orange text-sm">01. HOW IT WORKS</h2>
        <h2 className="pt-5 text-center text-black text-4xl">
          LET THE CUSTOMERS <a className="text-orange">STING</a> WITH YOUR
          WEBSITE
        </h2>
        <h3 className="mt-3 text-center text-gray font-sans text-xl">
          Talk to your customers in first person
        </h3>

        {/* CARDS */}
        <div className="grid grid-rows-3 lg:grid-rows-1 grid-flow-col justify-center ">
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
    </div>
  );
};

export default FirstSection;
