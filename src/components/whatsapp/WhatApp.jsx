import React from "react";

const WhatApp = () => {
  const url =
    "https://wa.me/584247260686?text=me%20gustar%C3%ADa%20tener%20un%20poco%20mas%20de%20informaci%C3%B3n%20acerca%20de%20los%20planes%20disponibles%20y%20si%20est%C3%A1n%20cubriendo%20mi%20zona";
  return (
    <div className="fixed right-0 mt-6 mr-4 z-10">
      <a className="" href={url} target="_blank">
        <i className="bx bxl-whatsapp bx-tada  text-green-700 font-bold text-6xl bg-slate-100 rounded-full hover:text-green-900 hover:bg-lime-700 hover:rounded-full hover:shadow-md hover:shadow-white"></i>
      </a>
    </div>
  );
};

export default WhatApp;
