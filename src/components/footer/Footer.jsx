import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-800 bottom-0 fixed w-full">
      <section className="p-3">
        {/* Texto con copyright */}
        <div className="text-white font-bold text-center text-xs space-y-2">
          <p>Copyright © 2024 La Red 2022 C.A. Todos los derechos reservados.</p>
          <p>Habilitación Conatel - HGST-00733</p>
          <p>Desarrollado por: Jose G. Brazon L.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
