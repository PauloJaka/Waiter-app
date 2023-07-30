import express from "express";
import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017')
.then(() => {
    const app = express();
    app.listen(3002, () => {
        console.log('emoji server is running on http://localhost:3002');
    })
} )
.catch(() => console.log('erro ao conectar'));


