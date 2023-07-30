import express from "express";
import mongoose from "mongoose";

import { router } from "./router";


mongoose.connect('mongodb://localhost:27017')
.then(() => {
    const app = express();

    app.use(router);

    app.listen(3002, () => {
        console.log('emoji server is running on http://localhost:3002');
    })
} )
.catch(() => console.log('erro ao conectar'));


