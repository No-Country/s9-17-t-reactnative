import { stripePayment } from "@/controllers/payment.controller";
import { Router } from "express";


const payTrip = Router()

payTrip.post("/", stripePayment)