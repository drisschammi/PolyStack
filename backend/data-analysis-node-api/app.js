import cors from "cors";
import express from 'express';
import coverageRoutes from './src/routes/analysisRoutes.js';
import { errorHandler, notFound } from "./src/middleware/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', coverageRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});