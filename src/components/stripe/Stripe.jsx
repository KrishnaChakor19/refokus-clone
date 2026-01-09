import React from "react";

const Stripe = ({val}) => {


  return (
    <div className="w-full px-4 py-3 border-t border-b border-r border-zinc-600 flex justify-between items-center">
      <img className="h-5 w-24" src={val.url} alt="" />
      <span className="font-semibold text-xs">{val.number}</span>
    </div>
  );
};

export default Stripe;
