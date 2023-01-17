import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CheckIcon = (props: { content: string }) => {
  return (
    <div>
      <div className="flex align-middle flex-wrap">
        <CheckCircleIcon sx={{ color: "#1fc05b" }} />
        <span className="text-gray pl-1 text-md">{props.content}</span>
      </div>
    </div>
  );
};
export default CheckIcon;
