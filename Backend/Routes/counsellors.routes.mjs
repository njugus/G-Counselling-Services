import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const route_2 = Router();

route_2.get("/", async(req, res) => {
    try{
        const result = await prisma.counsellor.findMany();
        res.status(200).json({message : true, res : result})
    }catch(e){
        res.status(500).json({success : true, message : e.message});
    }
})

route_2.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const client = await prisma.counsellor.findUnique({
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

route_2.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const result = await prisma.counsellor.delete({
            where: {
                id : id
            },
        });
        res.json({success : true,  message : "Counsellor Deleted Successfully", res : result})
    }catch(e){
        if(e.code === 'P2025'){
            res.status(404).json({success : false, message : "Counsellor Not Found"});
        }
        else{
            res.status(500).json({success : true, message : e.message})
        }
    }
})

route_2.post('/', async (req, res) => {
    const { name, title, qualifications } = req.body;

    try {
        const result = await prisma.counsellor.create({
            data: {
                name : name,
                title : title,
                qualifications : qualifications
            }
        });

        res.status(201).json({ success: true, product: result });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

route_2.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { qualifications } = req.body;

    try {
        const result = await prisma.counsellor.update({
            where: {
                id: id, 
            },
            data: {
                qualifications: qualifications,
            },
        });

        res.status(200).json({ success: true, product: result });
    } catch (err) {
        if (err.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Product Not Found' });
        } else {
            res.status(500).json({ success: false, message: err.message });
        }
    }
});
export default route_2;