// Importo todo lo de la libreria express
import express from "express";

// Creo una constante que es igual a la libreria que importè y la ejecuta
const app = express();

// Uso de middlewares que acepette datos Json
app.use(express.json());

// Definir la ruta


// Exporto la constante para poder usar express en otros lados
export default app;