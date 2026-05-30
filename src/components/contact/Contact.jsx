import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // 1. Importamos la librería

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '', 
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formData,
        [name]: onlyNums
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // 2. Modificamos el handleSubmit para que sea asíncrono
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 💡 REEMPLAZA ESTOS 3 STRINGS CON TUS DATOS DE EMAILJS
    const SERVICE_ID = 'service_urmx0c4';
    const TEMPLATE_ID = 'template_a4hnnhe';
    const PUBLIC_KEY = 'yCdvODQG5t0QYPG8Q';

    try {
      // Enviamos los datos directamente del estado formData
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
      
      // Limpiar formulario si todo sale bien
      setFormData({ name: '', phone: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className='m-5 flex justify-center mb-24 px-4'>
      <div className='w-full max-w-xl bg-white p-8 rounded-lg shadow-md border border-gray-100'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
          ¡Contáctame!
        </h2>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Campo: Nombre */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Nombre
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
              placeholder='Tu nombre completo'
            />
          </div>

          {/* Campo: Teléfono */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Teléfono de Contacto
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
              placeholder='Ej: 04121234567 (Solo números)'
            />
          </div>

          {/* Campo: Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Correo Electrónico
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
              placeholder='correo@ejemplo.com'
            />
          </div>

          {/* Campo: Mensaje */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Mensaje
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows='4'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none'
              placeholder='Cuéntame en que podemos ayudarte...'
            ></textarea>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm'
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;