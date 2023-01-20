import Image from "next/image";
import React from "react";

const IconText = (props: { title: string; content: string; icon: string }) => {
  return (
    <div className="grid grid-flow-col gap-x-5 max-w-sm text-center w-screen">
      <div className="flex flex-col justify-start content-center">
        <Image height={60} width={60} src={props.icon} alt={"icon"} />
      </div>
      <div className="flex flex-col justify-start content-center">
        <h5 className="text-black text-left text-2xl mb- font-bold">
          {props.title}
        </h5>
        <p className="text-gray-light text-left text-base mb-4">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default IconText;
