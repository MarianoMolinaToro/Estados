import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from './Alert'; 

const Formulario = ({ setAlert }) => {
  //estado inicial form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
   //estado alertas
  const [alert, setFormAlert] = useState(null); 

  //función para manejar los cambios en el form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    //validación de los campos
    if (password !== confirmPassword || !name || !email || !password || !confirmPassword) {
      setFormAlert({
        error: true,
        msg: 'Completa todos los campos !',
        color: 'danger',
      });
    } else {
      setFormAlert({
        error: false,
        msg: 'Registro exitoso !',
        color: 'success',
      });
      console.log('Datos enviados:', formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mx-3" controlId="name">
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="email">
        <Form.Control
          type="email"
          placeholder="tuemail@ejemplo.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="password">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="confirmPassword">
        <Form.Control
          type="password"
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </Form.Group>

      <Button type="submit" variant="success" style={{ width: '90%' }}>
        Registrarse
      </Button>{' '}

      {alert && <Alert type={alert.color} message={alert.msg} />}
    </Form>
  );
};

export default Formulario;
