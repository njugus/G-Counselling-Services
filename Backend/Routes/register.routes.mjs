import { Router} from 'express'
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient();
const route_3 = Router();

route_3.post("/", async(req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const result = await prisma.user.create({
            data : {
                name : name,
                email : email,
                password : hashedPassword
            }
        })
        res.status(201).json({message : alert("Registration Successfull")})
    }catch(e){
        res.status(500).json({success : true, message : e.message});
    }
})

export default route_3;