import React from "react";

const Card = (props: { title: string; content: string }) => {
  return (
    <div className="block rounded-lg shadow-xl bg-white max-w-sm text-center m-10 w-screen h-60">
      <div className="p-6 ">
        <h5 className="text-black text-left text-xl font-medium mb-2">
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
