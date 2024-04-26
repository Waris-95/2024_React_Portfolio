import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <img src="https://freepngdesign.com/content/uploads/images/p-615-4-aw-logo-png-transparent-logo-816016657573.png" alt="AW Logo" className="h-12 md:h-20" style={{ filter: "invert(55%)" }} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
