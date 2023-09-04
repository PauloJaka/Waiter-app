import express from "express";
import mongoose from "mongoose";
import path from "node:path";

import { router } from "./router";


mongoose.connect('mongodb://localhost:27017')
.then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json());
    app.use(router);

    app.listen(3002, () => {
        console.log('emoji server is running on http://localhost:3002');
    })
} )
.catch(() => console.log('erro ao conectar'));


