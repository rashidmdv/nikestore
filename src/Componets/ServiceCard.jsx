import React from "react";

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" width={24} height={24} className="object-contain" />
      </div>
      <h3 className="mt-5 font-montserrat text-3xl font-bold leading-normal">{label}</h3>
      <p className="text-gray-500 mt-4 break-words font-montserrat  leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
