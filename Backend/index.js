import express from 'express';
import { config} from 'dotenv'
import route from './Routes/user.routes.mjs'
import route_2 from './Routes/counsellors.routes.mjs';  
import route_3 from './Routes/register.routes.mjs';
import route_5 from './Routes/login.routes.mjs';
import authMiddleware from './Routes/middleware.js';
import cors from 'cors';
import bodyParser from 'express'
import cookieParser from 'cookie-parser'


import router from './Routes/booking.routes.js';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204
}));
app.use(express.json())

app.use("/users", route);
app.use("/counsellors", route_2);
app.use("/signup",  route_3);
app.use("/login",  route_5, authMiddleware);
app.use("/booking", router, authMiddleware);
config();

app.listen(3000, (req, res) => {
    console.log("Listening to port 3000....");
})