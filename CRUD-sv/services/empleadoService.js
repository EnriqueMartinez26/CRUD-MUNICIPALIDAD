import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getEmpleados = async () => {
  try {
    const response = await axios.get(`${API_URL}/empleados`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEmpleadoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/empleados/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const crearEmpleado = async (empleadoData) => {
  try {
    const response = await axios.post(`${API_URL}/empleados`, empleadoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const actualizarEmpleado = async (id, empleadoData) => {
  try {
    const response = await axios.put(`${API_URL}/empleados/${id}`, empleadoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEmpleado = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/empleados/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};