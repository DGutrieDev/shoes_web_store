process.loadEnvFile();
const { Sequelize } = require("sequelize");

const sq = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    define: {
      timestamps: false,
    },
    logging: false,
  }
);

sq.authenticate()
  .then(() => {
    console.log("✅ Conexión a la base de datos establecida");
  })
  .catch((error) => {
    console.error("❌ Error de conexión a la base de datos:", error);
  });

module.exports = sq;
