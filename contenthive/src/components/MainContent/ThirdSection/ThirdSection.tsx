import React from "react";
import Image from "next/image";

import IconText from "./IconText";

const ThirdSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default ThirdSection;
