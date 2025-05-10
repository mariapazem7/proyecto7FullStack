
export const registerRules = {
    nombre: (value) => {
      if (!value) return "El nombre es requerido";
      if (!/^[a-zA-Z]+$/.test(value)) return "El nombre solo debe contener letras";
      if (value.length < 3 || value.length > 20) return "El nombre debe tener entre 3 y 20 caracteres";
      return "";
    },
  
    apellido: (value) => {
      if (!value) return "El apellido es requerido";
      if (!/^[a-zA-Z]+$/.test(value)) return "El apellido solo debe contener letras";
      if (value.length < 3 || value.length > 50) return "El apellido debe tener entre 3 y 50 caracteres";
      return "";
    },
  
    correo: (value) => {
      if (!value) return "El correo es requerido";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "El correo no es válido";
      return "";
    },
  
    telefono: (value) => {
      if (!value) return "El teléfono es requerido";
      if (!/^\d{10}$/.test(value)) return "El teléfono debe tener 10 dígitos numéricos";
      return "";
    },
  
    fecha_nacimiento: (value) => {
      if (!value) return "La fecha de nacimiento es requerida";
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) return "Debes ser mayor de edad para registrarte";
      return "";
    },
  
    password: (value) => {
      if (!value) return "La contraseña es requerida";
      if (value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
      if (value.length > 20) return "La contraseña no puede tener más de 20 caracteres";
      return "";
    },
  
    confirmPassword: (value, formData) => {
      if (!value) return "La confirmación de la contraseña es requerida";
      if (formData && value !== formData.password) return "Las contraseñas no coinciden";
      return "";
    },
  
    imagen: (value) => {
      if (!value) return "La imagen es requerida";
  
      if (value instanceof File) {
        if (!value.type.startsWith("image/")) return "El archivo no es una imagen";
        if (value.size > 2 * 1024 * 1024) return "La imagen no puede pesar más de 2MB";
      } else {
        return "Debes enviar un archivo de tipo imagen";
      }
  
      return "";
    }
  };