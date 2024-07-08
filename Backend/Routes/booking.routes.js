import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
    const { serviceId, sessionType, date, time, contact } = req.body;

    try {
        const result = await prisma.booking.create({
            data: {
                serviceId: parseInt(serviceId),
                sessionType,
                date,
                time,
                contact
            }
        });

        res.status(201).json({ message: "Booking Successful", booking: result });
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({ success: false, message: "Booking failed", error: error.message });
    }
});
export default router;

