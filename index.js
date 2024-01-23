import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
    response.render("home");
});
app.get("/movie", async (request, response) => {
    response.render("movie");
});
app.use(express.static('./static')).listen(5080)