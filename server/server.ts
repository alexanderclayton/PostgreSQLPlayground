import app from "./src/app/index.js";
import pool from "./src/config/index.js";

const PORT = 5000 || process.env.PORT;

const startServer = async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL Database");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
