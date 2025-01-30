import cors from "cors";
import express from 'express';
import coverageRoutes from './src/routes/analysisRoutes.js';
import { errorHandler, notFound } from "./src/middleware/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Swagger JSDoc configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Insurance Policy Analysis API",
            version: "1.0.0",  // API version
            description: "API documentation for insurance policy analysis",  // API description
            contact: {
                name: "Chammi Driss",  // Contact name
                email: "drisschami24@gmail.com",  // Contact email
                url: "https://ma.linkedin.com/in/drisschammi"  // Contact URL
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}/`,  // Your server URL
            },
        ],
    },
    apis: ["./src/routes/*.js"],  // Path to your route files
};

// Generate Swagger specification
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Swagger documentation
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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