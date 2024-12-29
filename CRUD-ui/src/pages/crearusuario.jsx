import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '1rem',
    },
    label: {
      fontSize: '1em',
      color: '#333',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1em',
    },
    button: {
      padding: '0.8rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2em',
      cursor: 'pointer',
      marginTop: '1rem',
    },
    error: {
      color: 'red',
      fontSize: '1em',
      marginBottom: '1rem',
    },
    success: {
      color: 'green',
      fontSize: '1em',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <h2 style={styles.label}>Crear Usuario</h2>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nombre</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Este campo es obligatorio' })}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Este campo es obligatorio' })}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Este campo es obligatorio' })}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password.message}</span>}
        </div>

        <button type="submit" style={styles.button}>Crear Usuario</button>
      </form>
    </div>
  );
};

export default CrearUsuario;
