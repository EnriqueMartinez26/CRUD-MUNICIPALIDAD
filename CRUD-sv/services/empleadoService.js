const Empleado = require('../models/Empleado');

const empleadoService = {
  getAll: async () => {
    return await Empleado.findAll();
  },

  getById: async (id) => {
    return await Empleado.findByPk(id);
  },

  create: async (empleadoData) => {
    return await Empleado.create(empleadoData);
  },

  update: async (id, empleadoData) => {
    const empleado = await Empleado.findByPk(id);
    if (empleado) {
      return await empleado.update(empleadoData);
    }
    return null;
  },

  delete: async (id) => {
    const empleado = await Empleado.findByPk(id);
    if (empleado) {
      await empleado.destroy();
      return true;
    }
    return false;
  }
};

module.exports = empleadoService;