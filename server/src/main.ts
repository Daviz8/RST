import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import rateLimit from "./middlewares/rateLimit";
import AppLogger from "./utils/logger";
import { AppDataSource } from "./ormconfig";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import authRoutes from "./routes/auth.routes";
import { initSocket } from "./socket";


dotenv.config();
(async () => {
    await AppDataSource.initialize();
})();

const app = express();


app.use(express.json());
app.use(rateLimit);

// Swagger docs
app.use("/api/docs/user", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/docs/admin", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  

// Routes
app.use("/auth", authRoutes.routeHandler)

// WebSockets

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => AppLogger.logDebug("SERVER", `Server running on port ${PORT}`));