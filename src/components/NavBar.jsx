import React from "react";
import refokusLogo from "../assets/refokus.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="max-w-4xl mx-auto h-10 px-3 py-8 flex items-center justify-between border-b-[1px] border-zinc-700 border-zinc-300">
      <div className="nleft flex items-center">
        <img
        src={refokusLogo}
        alt="Refokus Logo"
        className="h-6 w-auto object-contain"
      />
      <h3 className="text-xs ml-1">Refokus</h3>
      <div className="links flex gap-12 ml-20">
        {["Home", "Work", "About", "", "News"].map((elem, index) => (
          <a
            key={elem}
            className="text-xs flex items-center justify-center"
            href="#"
          >
            {index === 1 ? (
              <span style={{boxShadow : "0 0 0.45em $00ff19"}} className="inline-block h-1 w-1 bg-green-500 rounded-full mr-1"></span>
            ) : null}
         
             {elem.length === 0 ? (
                 <span className="w-[2px] h-5 bg-zinc-600"></span>
                ) : (
                     elem
                    )}
            </a>
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
};

export default NavBar;
