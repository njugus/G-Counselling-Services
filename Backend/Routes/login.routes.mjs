import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const route_5 = Router();

const SECRET_KEY = "rwrwknknrw";

route_5.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!result) {
            return res.status(404).json({ message: "Invalid Email or Password" });
        }

        const passwordMatch = await bcrypt.compare(password, result.password || '');

        if (passwordMatch) {
            const token = jwt.sign({ email: result.email, role: result.role }, SECRET_KEY, { expiresIn: "1h" });
            res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(404).json({ message: "Invalid Email Password" });
        }

    } catch (e) {
        console.error("Error during login:", e);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

export default route_5;
