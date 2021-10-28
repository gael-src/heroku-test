import express from "express";

const app = express();
const port = process.env.PORT || 3011;
const url = `http://localhost:${port}`;

app.get("/", (req, res) => res.send("secrets everglades git"));

app.listen(port, () => console.log(`Listening on ${url}`));
