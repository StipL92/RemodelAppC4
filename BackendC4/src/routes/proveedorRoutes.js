const express = require("express");
const Proovedor = require("../models/proveedorModels");

const proveedorRouter = express.Router();

proveedorRouter.get("/", async (req, res) => {
    const proovedors = await Proovedor.find();
    res.send(proovedors);
});

proveedorRouter.get("/:id", async (req, res) => {
    const proveedor = await Proovedor.findById(req.params.id);
    if (proveedor) {
        res.send(proveedor);
    } else {
        res.status(404).send({ message: "Proveedor no encontrado" });
    }
});

proveedorRouter.post("/create", async (req, res) => {
    try {
      const {proveedor, ciudad, direccion, telefono, whatsapp, correo,} = req.body;
      await Proovedor.create({proveedor, ciudad, direccion, telefono, whatsapp, correo,});
      return res.json({proveedor, ciudad, direccion, telefono, whatsapp, correo,});
    } catch {
      return res.status(404).send({ message: "El proveedor no pudo ser creado" });
    }
  });

proveedorRouter.delete('/:id', async (req, res) => {
  try {
      const proveedor = await Proovedor.findByIdAndDelete(req.params.id);
      if (!proveedor) {
          return res.status(404).send();
      }
      res.send(proveedor);
  } catch (error) {
      res.status(500).send(error);
  }
});

proveedorRouter.patch('/:id', async (req, res) => {
  try {
      const proveedor = await Proovedor.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if (!proveedor) {
          return res.status(404).send();
      }
      res.status(200).send(proveedor);
  } catch (error) {
      res.status(500).send(error);
  }
})

module.exports = proveedorRouter;