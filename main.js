import express from "express";

const app = express();
const port = process.env.PORT || 3011;
const url = `http://localhost:${port}`;

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Listening on ${url}`));
