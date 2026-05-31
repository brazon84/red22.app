
# 🌐 Red22 — Proveedor de Servicios de Internet

[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://red22.netlify.app)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-red22.netlify.app-blue?style=flat&logo=netlify)](https://red22.netlify.app)
![Status](https://img.shields.io/badge/estado-activo-brightgreen)
![Tipo](https://img.shields.io/badge/tipo-SPA%20%2F%20Sitio%20Web-orange)

**Sitio web oficial de Red22**, empresa proveedora de servicios de internet. Plataforma dinámica que permite a los usuarios conocer los planes disponibles, comunicarse directamente con la empresa y ubicarla fácilmente.

[🌐 Ver sitio en vivo](https://red22.netlify.app) · [💬 WhatsApp directo](#) · [📧 Contacto por correo](#)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Funcionalidades](#-funcionalidades)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y uso local](#-instalación-y-uso-local)
- [Variables de entorno](#-variables-de-entorno)
- [Despliegue](#-despliegue)
- [Capturas de pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

---

## 📖 Descripción

**Red22** es el sitio web oficial de una empresa proveedora de servicios de internet. Fue diseñado para brindar a los usuarios una experiencia clara, moderna y directa, permitiéndoles conocer los planes de conectividad disponibles, contactar a la empresa al instante y encontrar la ubicación física del negocio — todo desde un solo lugar.

El sitio funciona como una **Single Page Application (SPA)** dinámica, con navegación fluida y sin recargas de página.

---

## ✨ Funcionalidades

- 🏠 **Sección Inicio** — presentación de la empresa con llamadas a la acción claras
- 💬 **WhatsApp directo** — enlace de contacto inmediato al número de la empresa, listo para consultas
- 📧 **Envío de correos reales** — formulario de contacto que envía emails funcionales a la empresa
- 📦 **Planes de internet** — sección con los paquetes y precios disponibles para los clientes
- 📍 **Ubicación** — mapa integrado con la dirección física de la empresa
- 📱 **Diseño responsive** — adaptado para móviles, tablets y escritorio

---

## 🛠 Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| **React.js** | Framework principal de la SPA |
| **React Router** | Navegación entre secciones con hash routing (`#/`) |
| **CSS3 / Tailwind CSS** | Estilos y diseño responsivo |
| **EmailJS** | Envío de correos reales desde el frontend |
| **WhatsApp API** | Enlace directo de contacto vía WhatsApp |
| **Google Maps / Leaflet** | Mapa de ubicación embebido |
| **Netlify** | Plataforma de despliegue y hosting |

> ⚙️ *Actualizá esta tabla según las tecnologías reales que usaste en el proyecto.*

---

## 📁 Estructura del proyecto

```
red22/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── components/       # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── pages/
│   │   ├── Home/         # Sección inicio
│   │   ├── Plans/        # Planes de internet
│   │   ├── Contact/      # Formulario de contacto y WhatsApp
│   │   └── Location/     # Mapa y ubicación
│   ├── App.jsx
│   └── main.jsx
├── .env                  # Variables de entorno (no subir a GitHub)
├── package.json
└── README.md
```

> 📁 *Ajustá la estructura según cómo está organizado realmente tu proyecto.*

---

## 🚀 Instalación y uso local

Seguí estos pasos para correr el proyecto en tu computadora:

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/red22.git

# 2. Entrar a la carpeta
cd red22

# 3. Instalar dependencias
npm install

# 4. Crear archivo de variables de entorno
cp .env.example .env
# (completar con tus claves — ver sección siguiente)

# 5. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173` (o el puerto que use Vite/CRA).

---

## 🔑 Variables de entorno

Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# EmailJS — https://www.emailjs.com
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key

# WhatsApp (número con código de país, sin espacios ni guiones)
VITE_WHATSAPP_NUMBER=5800000000000
```

> ⚠️ **Nunca subas el archivo `.env` a GitHub.** Asegurate de que esté en tu `.gitignore`.

---

## 🌍 Despliegue

El sitio está desplegado en **Netlify** con despliegue automático desde la rama `main`.

Para hacer tu propio despliegue:

1. Pusheá tu código a GitHub
2. Conectá el repositorio en [netlify.com](https://netlify.com)
3. Configurá las variables de entorno en **Site settings → Environment variables**
4. Configurá el comando de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (Vite) o `build` (CRA)
5. Agregá la regla de redirects para el hash routing en `public/_redirects`:
   ```
   /*  /index.html  200
   ```



## 👨‍💻 Autor

Desarrollado por **José Gregorio Brazón López**

[![Portfolio](https://img.shields.io/badge/Portfolio-jose--brazon.netlify.app-blue?style=flat&logo=netlify)](https://jose-brazon.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-josebrazon-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/josebrazon)
[![Email](https://img.shields.io/badge/Email-abg.brazon@gmail.com-red?style=flat&logo=gmail)](mailto:abg.brazon@gmail.com)


<div align="center">

Hecho con ❤️ para **Red22** · [red22.netlify.app](https://red22.netlify.app)

</div>
