const express = require("express");
const app = express();
const connect = require("./config/database")
const userRoutes = require("./router/userRoutes")

connect()
app.use(json())
app.use("/user", userRoutes)


const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Zuri Training on MongoDb")
})

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
