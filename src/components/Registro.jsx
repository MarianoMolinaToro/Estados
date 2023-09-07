import React from 'react';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = () => {
  return (
    <div className="container mt-5" style={{ width: '350px' }}>
      <h1>Crea una cuenta</h1>
      <SocialButton icon={faFacebook} />
      <SocialButton icon={faGithub} />
      <SocialButton icon={faLinkedinIn} />
      <p>O usa tu email para registrarte</p>
      <Formulario />
    </div>
  );
};

export default Registro;
