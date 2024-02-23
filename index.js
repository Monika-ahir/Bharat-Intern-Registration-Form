import express from "express";
import "dotenv/config";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { dirname } from "path";
import mongodb from "./config/Database.js";
import registerRouter from "./routes/Register.js";

const app = express();
app.use(express.json());
app.use("/pages", express.static("pages"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
app.use(registerRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

mongodb();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
