import express from "express";

const app = express();

app.listen(3002, () => {
    console.log('emoji server is running on http://localhost:3002');
})
