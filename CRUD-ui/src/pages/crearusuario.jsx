import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../index.css'

const CrearUsuario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/usuarios', data);
      setSuccess('Usuario creado con éxito');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error('Error al crear el usuario', error);
      setError('Hubo un error al crear el usuario');
    }
  };

  return (
    <div className="crear-usuario-container">
      <form onSubmit={handleSubmit(onSubmit)} className="crear-usuario-form">
        <h2 className="home-title">Crear Usuario</h2>
        {error && <p className="crear-usuario-error">{error}</p>}
        {success && <p className="crear-usuario-success">{success}</p>}

        <div className="crear-usuario-input-group">
          <label htmlFor="name" className="crear-usuario-label">Nombre</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Este campo es obligatorio' })}
            className="crear-usuario-input"
          />
          {errors.name && <span className="crear-usuario-error">{errors.name.message}</span>}
        </div>

        <div className="crear-usuario-input-group">
          <label htmlFor="email" className="crear-usuario-label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Este campo es obligatorio' })}
            className="crear-usuario-input"
          />
          {errors.email && <span className="crear-usuario-error">{errors.email.message}</span>}
        </div>

        <div className="crear-usuario-input-group">
          <label htmlFor="password" className="crear-usuario-label">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Este campo es obligatorio' })}
            className="crear-usuario-input"
          />
          {errors.password && <span className="crear-usuario-error">{errors.password.message}</span>}
        </div>

        <button type="submit" className="crear-usuario-button">Crear Usuario</button>
      </form>
    </div>
  );
};

export default CrearUsuario;
