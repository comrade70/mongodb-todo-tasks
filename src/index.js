const express = require("express");
const {json} = require("express")
const connect = require("./config/database")
const titleRoutes = require("./router/titleRoutes")

connect();

const app = express();
app.use(json())
app.use("/title", titleRoutes)


const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Week 7 Task on MongoDb")
})

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
