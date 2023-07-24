import env from '@/config/env.config';
import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';
const Stripe = require("stripe");
const stripe = Stripe(env.stipeSecretKey);

export async function stripePayment(req: Request, res: Response){
    try {
        // Getting data from client
        let { amount, customerData, travelData } = req.body;
        amount = parseInt(amount);
        // Initiate payment
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(amount * 100),
          currency: "USD",
          payment_method_types: ["card"],
          metadata: {
            nombre: customerData.name,
            apellido: customerData.last_name,
            email: customerData.email,
          },
        });
        // Extracting the client secret 
        const clientSecret = paymentIntent.client_secret;
        // Sending the client secret as response
        const createStripe = await prisma.stripe.create({data:{state:"process"}})
        const createPayment = await prisma.payment.create({
            data:{
            method: "stripe",
            travel_id: travelData.travel_id,
            user_id: travelData.user_id,
            stripe_id: createStripe.id,
            amount: amount,
            }
        })
        res.json({ message: "Payment initiated", clientSecret, createPayment });
      } catch (err) {
        // Catch any error and send error 500 to client
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export async function paymentProcess (req: Request, res: Response){
    try {
       const { stripe_id } = req.params
       const { state } = req.body

       const foundPayment = await prisma.stripe.update({where:{id:stripe_id},data:{state}})
       res.status(200).json({foundPayment, message:"payment updated"})
    } catch (error) {
        res.status(404).json("Stripe transaction not found")
    }
}