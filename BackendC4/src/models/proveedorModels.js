const mongoose = require("mongoose");

const proveedorSchema = new mongoose.Schema(
  {
    proveedor: { type: String, required: true },
    ciudad: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    whatsapp: { type: String, required: true },
    correo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Proveedor = mongoose.model("Proveedor", proveedorSchema);

module.exports = Proveedor; // export default proveedor;
