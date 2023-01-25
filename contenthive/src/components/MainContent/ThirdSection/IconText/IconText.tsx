import Image from "next/image";
import React from "react";

const IconText = (props: {
  title: string;
  content: string;
  icon: string;
  type?: string;
}) => {
  let type = "grid grid-flow-col gap-4 auto-cols-auto";
  if (props.type != undefined || props.type == "auto") {
    type = "grid grid-flow-col gap-4 auto-cols-max";
  }
  return (
    <div className={type}>
      <div className="">
        <Image height={60} width={60} src={props.icon} alt={"icon"} />
      </div>
      <div className="">
        <h5 className="text-black text-left text-2xl mb- font-bold">
          {props.title}
        </h5>
        <p className="text-gray-light text-left text-base font-sans mb-4 ">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default IconText;
