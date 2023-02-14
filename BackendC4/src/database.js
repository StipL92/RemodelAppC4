const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://127.0.0.1/db_remodelapp";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Conexion a la base de datos con exito!!");
});

module.exports = connection;
