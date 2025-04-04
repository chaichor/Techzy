// Importo todo lo de la libreria express
import express from "express";
import usersRoutes from "./src/routes/users.js";
import brandRoutes from "./src/routes/brand.js";
import contactFormRoutes from "./src/routes/contactForm.js";
import categoryRoutes from "./src/routes/category.js";
import adminRoutes from "./src/routes/admin.js";
import productsRoutes from "./src/routes/products.js";
import assessmentRoutes from "./src/routes/assessment.js";
import favoritesRoutes from "./src/routes/favorites.js"
import shoppingRoutes from "./src/routes/shoppingCart.js";
import checkOutRoutes from "./src/routes/checkOut.js";
import registerUserRoutes from "./src/routes/registerUser.js";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
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
app.use("/api/assessment", assessmentRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/shopping-Cart", shoppingRoutes);
app.use("/api/check-Out", checkOutRoutes);

//register y login
app.use("/api/register", registerUserRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);


// Exporto la constante para poder usar express en otros lados
export default app;