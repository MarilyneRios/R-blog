import express from 'express';
// database
import connectDB from './config/db.js';
import dotenv from 'dotenv';

//importation des routes
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

// Charger les variables d'environnement
dotenv.config();
// Connexion à la base de données
connectDB();


// Initialiser express et définir le port
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les données JSON dans les requêtes entrantes
app.use(express.json());

//  Démarre le serveur et écoute le port ur process.env.PORT
app.listen (port, () => {
    console.log(`server is running on port ${port} !`);
});


// test API route
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);