import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";


dotenv.config();
(async () => {
    await AppDataSource.initialize();
})();

const app = express();


app.use(express.json());




// Routes


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => AppLogger.logDebug("SERVER", `Server running on port ${PORT}`));