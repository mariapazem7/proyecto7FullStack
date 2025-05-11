# proyecto 7 FullStack: Frontend ReLectores App

Es una aplicación web Fullstack desarrollada como proyecto educativo, orientada a facilitar el acceso a la lectura mediante la compra de libros nuevos y usados a bajo costo. Esta plataforma permite a los usuarios explorar un catálogo, autenticarse mediante registro e inicio de sesión, gestionar su carrito y realizar pagos a través de MercadoPago.

## Funcionalidades Principales

-  Registro e inicio de sesión con JWT.
-  Catálogo de libros disponibles.
-  Carrito de compras con gestión de ítems.
-  Pasarela de pago segura con MercadoPago (modo test).

## Tecnologías Utilizadas

### Frontend
- **ReactJS** con **Vite**
- **React Router DOM** para navegación
- **useContext + useReducer** para manejo de estado global
- **Axios** para solicitudes HTTP
- **Bootstrap** para estilos y diseño responsivo

### Backend
- **Node.js + Express.js**
- **MongoDB** con **Mongoose**
- **JWT** para autenticación
- **bcryptjs** para encriptación de contraseñas
- **dotenv**, **cors**, **nodemon**

### Otros
- **MercadoPago Dev** 
- **Multer** para subida de archivos

---

## Objetivos de Aprendizaje

- Implementar un flujo completo de autenticación con JWT.
- Construir un CRUD funcional para productos (libros).
- Integrar pasarelas de pago en entornos seguros.
- Desplegar una app Fullstack usando **Render**, **Netlify** y **MongoDB Atlas**.
- Manejo del estado global en React.
- Validar formularios y datos del lado del cliente y servidor.
  
## Estructura del Proyecto

```bash
react-context/
├── node_modules/
├── public/
├── src/
│   ├── config/
│   │   ├── db.config.js
│   │   ├── envs.config.js
│   │   └── mercadoPago.config.js
│   │   
│   ├── coontrollers/
│   │   ├── auth.controller.js
│   │   ├── libros/controller.js
│   │   └── payment.controller.js
│   │   
│   ├── Error/
│   │   ├── CustomError.js
│   │   └── TypeError.js    
│   │   
│   ├── middlewares/ 
│   │   ├── auth.middleware.js
│   │   ├── errorhandler.js
│   │   ├── uploadFile.middleware.js
│   │   └── verifyAdmin.middleware.js
│   │
│   ├── model/
│   │   ├── Libro.models.js
│   │   └── Usuario.model.js
│   │
│   ├── routers/ 
│   │   ├── auth.routes.js
│   │   ├── index.routes.js
│   │   ├── libros.routes.js
│   │   └── payments.routes.js
│   │      
│   ├── services/
│   │   ├── db
│   │   │   └── updateDocs.js
│   │   ├── files
│   │   │   └── multerConfig.js
│   │   ├── payments
│   │   │   └── mercadopago.service.js
│   │   ├── auth.srvice.js
│   │   └── libros.service.js
│   │ 
│   ├── utils/
│   │   └── db
│   │       ├── formateUserCreate.js
│   │       ├── hashPassword.js
│   │       ├── validateLibroCrate.js
│   │       └── validateLibroUpdate.js
│   │        
│   └──server.js
│  
├── .enve.templete
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
└── README.md


```

##  Despliegue

- **Frontend**: [Netlify](https://relectores.netlify.app)
- **Backend**: [Render](https://backendproyecto7fullstack.onrender.com)
- **Base de Datos**: MongoDB Atlas

---

## Consideraciones de instalación

## Variables de Entorno (.env)

Crea un archivo `.env` siguiendo este ejemplo:

```env
VITE_BACKEND_URL=https://backendproyecto7fullstack.onrender.com/api/v1
VITE_CURRENCY=CLP
VITE_LOCALE=es-CL
VITE_MINIMUM_FRACTION_DIGITS=0
VITE_MAXIMUM_FRACTION_DIGITS=0
VITE_MP_PUBLIC_KEY=TEST-xxxxxxxxxxxxxxxx (mercadopago dev)
```
Para el backend:

Accede al backend en el repositorio: https://github.com/mariapazem7/backendProyecto7FullStack.git

Este proyecto fue desarrollado de forma individual como parte del aprendizaje del Bootcamp DWF UDD.
