process.loadEnvFile();
const express = require("express");
const db = require("./src/Config/config");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./src/Routes/Index.Routes");

app.use(express.json());
app.use(cors());
app.use('/api',routes);

try {
  db.sync({ force: false, alter: true })
    .then(() => {
      console.log("✅ Se ha sincronizado la base de datos correctamente");
    })
    .catch((error) => {
      console.error("❌ Error al sincronizar la base de datos: ", error);
    });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error("❌ Error al iniciar el servidor: ", error);
}
