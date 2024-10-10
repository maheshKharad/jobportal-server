import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import  dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
    
// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"


app.listen(PORT,async ()=>{
    await connectDB();
    console.log(`server running at port ${PORT}`);
})