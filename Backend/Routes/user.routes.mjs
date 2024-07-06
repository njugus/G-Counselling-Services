import { Router } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const route = Router();

route.get("/", async(req, res) => {
    try{
        const result = await prisma.user.findMany();
        res.status(200).json({success: true, res: result});
    }catch(e){
        res.status(500).json({ success: false, message : e.message});
    }
})

route.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const client = await prisma.user.findUnique({
            where : {
                id : id,
            },
        });

        if(client){
            res.status(200).json({success : true, res : client})
        }
        else{
            res.status(404).json({success : false, message : "User Not Found"})
        }
    }catch(e){
        res.status(500).json({success : false, e : e.message})
    }
})

route.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const result = await prisma.user.delete({
            where: {
                id : id
            },
        });
        res.json({success : true,  message : "User Deleted Successfully", res : result})
    }catch(e){
        if(e.code === 'P2025'){
            res.status(404).json({success : false, message : "User Not Found"});
        }
        else{
            res.status(500).json({success : true, message : e.message})
        }
    }
})



export default route;


