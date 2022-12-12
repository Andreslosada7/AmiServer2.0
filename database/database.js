const Sequelize = require("sequelize");
db = new Sequelize("animalstetic", "root", "Admin123*", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos ", error);
  });

module.exports = db;
