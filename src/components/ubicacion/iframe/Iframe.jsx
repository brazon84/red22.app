import React from "react";

const Iframe = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.0751603109611!2d-72.22061834908492!3d7.768331800496828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1728388309157!5m2!1ses-419!2sco"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="h-[450px] w-[250px]"
      ></iframe>
    </div>
  );
};

export default Iframe;
