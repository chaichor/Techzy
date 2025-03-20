// Importo todo lo de la libreria express
import express from "express";
import usersRoutes from "./src/routes/users.js";
import brandRoutes from "./src/routes/brand.js";
import contactFormRoutes from "./src/routes/contactForm.js";
import categoryRoutes from "./src/routes/category.js";
import adminRoutes from "./src/routes/admin.js";
import productsRoutes from "./src/routes/products.js";
// Creo una constante que es igual a la libreria que importè y la ejecuta
const app = express();

// Uso de middlewares que acepette datos Json
app.use(express.json());

// Definir la ruta
app.use("/api/users", usersRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/contact-forms", contactFormRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/products", productsRoutes);


// Exporto la constante para poder usar express en otros lados
export default app;