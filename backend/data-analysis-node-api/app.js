import cors from "cors";
import express from 'express';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Basic "Hello World" endpoint
app.get('/', (req, res) => {
    res.send('Hello hassan!');
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});