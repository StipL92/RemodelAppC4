const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {

    Producto: { type: String, required: true },
    Slug: { type: String, required: true },
    Categoria: { type: String, required: true },
    Proveedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proveedor",
        required: true,
      },
    Valor: { type: Number, required: true },
    Color: { type: String, required: true },
    Tipo_Material: { type: String, required: true },
    URL: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product; // export default Product;
