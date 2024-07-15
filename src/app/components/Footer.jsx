import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image
            src="/images/logo.png"
            alt="AW Logo"
            width={100} // specify the width here
            height={65} // specify the height here
            className="h-12 md:h-20"
            style={{ filter: "invert(55%)" }}
          />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
