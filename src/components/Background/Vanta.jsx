import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min"; // O el efecto que prefieras, como Vanta.NET

const VantaBackground = () => {
  const vantaRef = useRef(null); // Crea una referencia para el elemento DOM

  useEffect(() => {
    // Inicializa la animación solo después de que el componente se ha montado
    const vantaEffect = BIRDS({
      el: vantaRef.current, // Asigna el elemento DOM a Vanta.js
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: "#0a090a", // Ejemplo de opción personalizada
      // Agrega aquí cualquier otra opción del efecto
    });

    // Función de limpieza para desmontar la animación
    // Esto es crucial para liberar recursos cuando el componente se destruye
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default VantaBackground;
