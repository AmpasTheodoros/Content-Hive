import Image from "next/image";
import React from "react";

const Card = (props: { title: string; content: string; icon: string }) => {
  return (
    <div className="block rounded-lg shadow-xl bg-white max-w-sm text-center m-10 w-screen h-60">
      <div className="p-6 ">
        <Image height={80} width={80} src={props.icon} alt={"icon"} />
        <h5 className="text-black text-left text-3xl mb-2 font-bold pt-5">
          {props.title}
        </h5>
        <p className="text-gray-light text-left text-base mb-4">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default Card;
