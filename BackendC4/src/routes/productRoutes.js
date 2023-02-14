const express = require("express");
const Product = require("../models/productModels");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Producto no encontrado" });
    }
});

productRouter.post("/create", async (req, res) => {
    try {
      const {Producto, Slug, Categoria, Proveedor, Valor, Color, Tipo_Material, URL,} = req.body;
      await Product.create({Producto, Slug, Categoria, Proveedor, Valor, Color, Tipo_Material, URL,});
      return res.json({Producto, Slug, Categoria, Proveedor, Valor, Color, Tipo_Material, URL,});
    } catch {
      return res.status(404).send({ message: "El producto no pudo ser creado" });
    }
});

productRouter.delete('/:id', async (req, res) => {
  try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
          return res.status(404).send();
      }
      res.send(product);
  } catch (error) {
      res.status(500).send(error);
  }
});

productRouter.patch('/:id', async (req, res) => {
  try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if (!product) {
          return res.status(404).send();
      }
      res.status(200).send(product);
  } catch (error) {
      res.status(500).send(error);
  }
})

module.exports = productRouter;