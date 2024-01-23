import express from "express";
import { engine } from "express-handlebars";
import fetch from "node-fetch";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
    const resApi = await fetch ('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
    const payload = await resApi.json();
    const movies = await payload.data;
    response.render("home", {movies});
});

app.get("/movie/:movieId", async (request, response) => {
    const movie = await fetch ('https://plankton-app-xhkom.ondigitalocean.app/api/movies/' + request.params.movieId)
    const payload = await movie.json();
    response.render("movie", {payload});
});


app.use("/static", express.static('./static')).listen(5080);