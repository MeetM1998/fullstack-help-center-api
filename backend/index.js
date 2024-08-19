import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './src/config/db.js';
import cardRoutes from './src/routes/cardRoutes.js';

dotenv.config()

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/cards', cardRoutes);

app.get('/ping', (req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
