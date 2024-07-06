import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const SECRET_KEY = "your_secret_key";

const prisma = new PrismaClient();
const route_5 = Router();

route_5.post("/", async(req, res) => {
    const { email, password} = req.body;
    try{
        const result = prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(result && await bcrypt.compare(password, result.password)){
            const token = jwt.sign({email : result.email, role: result.role}, SECRET_KEY, {expiresIn: "1h"});
            res.cookie('token', token, {httpOnly: true, secure: false, sameSite:'strict'})
        }
        else{
            res.status(404).json({message : alert("Invalid Email or Password")})
        }
        
    }catch(e){
        res.status(500).json({success : false, message : e.message});
    }
})

export default route_5;