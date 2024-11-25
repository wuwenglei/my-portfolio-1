import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Wenglei Wu</span>
        <p className="text-slate-600">Website adapted from <a href="https://github.com/judygab/nextjs-portfolio"><u>judygab</u></a> under the <a href="https://opensource.org/license/MIT"><u>MIT License</u></a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
