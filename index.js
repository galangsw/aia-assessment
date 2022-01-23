import express  from "express";
import cors from "cors";
import feed from "./routes/feed.js"
import search from "./routes/search.js"


const app = express();

app.use(cors());

app.use(express.json())

app.get('/api', feed)
app.get('/api/:text/:perPage/:page', search)

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`listen on port ${PORT}`))
