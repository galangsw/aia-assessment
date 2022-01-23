import express  from "express";
import  mongoose  from "mongoose";
import cors from "cors";
import feed from "./routes/feed.js"
import search from "./routes/search.js"


const app = express();

app.use(cors());

app.use(express.json())

app.get('/feed', feed)
app.get('/search/:text/:perPage/:page', search)

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`listen on port ${PORT}`))
