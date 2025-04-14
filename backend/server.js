import express from 'express';
import cookieParser from 'cookie-parser';
import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';

//Express is a minimalistic web Framework for Node JS
const app = express();

const PORT = ENV_VARS.PORT

//Allows the parse of req.body
app.use(express.json());
app.use(cookieParser());

// Calls from the directory path from the first param, then adds the second param to the end of the path based off what is selected (Signup, Login, Logout) 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// app.listen() used to start the server and listen for connection to a specific port
app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
    connectDB();
})
