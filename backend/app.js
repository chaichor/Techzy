// Importo todo lo de la libreria express
import express from "express";
<<<<<<< HEAD
import usersRoutes from "./src/routes/users.js";

=======
import brandRoutes from "./src/routes/brand.js";
import contactFormRoutes from "./src/routes/contactForm.js";
import categoryRoutes from "./src/routes/category.js";
import adminRoutes from "./src/routes/admin.js";
>>>>>>> 32c9680cf3ea2ca332dd1fc2f77c3bdde01ce5f9
// Creo una constante que es igual a la libreria que importè y la ejecuta
const app = express();

// Uso de middlewares que acepette datos Json
app.use(express.json());

// Definir la ruta
<<<<<<< HEAD
app.use("/api/users", usersRoutes);
=======
app.use("/api/brands", brandRoutes);
app.use("/api/contact-forms", contactFormRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/admins", adminRoutes);
>>>>>>> 32c9680cf3ea2ca332dd1fc2f77c3bdde01ce5f9


// Exporto la constante para poder usar express en otros lados
export default app;