import React from "react";

const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none font-montserrat border
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
