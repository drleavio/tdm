import express from "express"
import authRoute from "../authRoutes/authRoute.js";
import fileRoute from "../fileRoute/fileRoute.js"


const app=express();
app.use(express.json());

app.use("/api",authRoute);
app.use("/file",fileRoute)

app.listen(3000);
