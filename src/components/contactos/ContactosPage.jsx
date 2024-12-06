import React from 'react';
import"./ContactosPage.css";
import { FaWhatsapp } from 'react-icons/fa';

const ContactosPage = () => {
  return (
    <div className="main">
      
      <div style={{ marginTop: '40px' }}>
        <a 
          href="https://wa.me/3564371285" // Reemplaza 1234567890 con tu número de teléfono
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            backgroundColor: '#25D366', // Color de fondo de WhatsApp
            color: 'white',
            padding: '80px 80px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '50px',
            textAlign: 'center',
            fontWeight: 'bold', // Grosor de la letra
            fontFamily: 'Arial, sans-serif',
            texttop: '150px', // Mueve el texto hacia abajo
            left: '20px', // Mueve el texto hacia la derecha
            marginTop: '10px', // Ajusta la distancia desde la parte superior
            marginLeft: '50px', // Ajusta la distancia desde la izquierda
            position: 'relative', // Permite mover el elemento
            top: '5px', // Mueve el elemento 20px hacia abajo
            left: '120px', // Mueve el elemento 30px hacia la derecha
          }}
        >
          <FaWhatsapp size={150} style={{ marginRight: '10px' }} />
          <span style={{ transform: 'translate(40px, 35px)' }}>
          Contáctanos por WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactosPage;