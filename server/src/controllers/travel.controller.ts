import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class TravelController {
  async getTravels(req: Request, res: Response) {
    try {
      const travels = await prisma.travel.findMany();
      res.status(200).json(travels);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getTravelById(req: Request, res: Response) {
    const travelId = req.params.id;
    try {
      const travel = await prisma.travel.findUnique({
         where: { id: travelId }, 
         include: {
            travelers:true, 
            car:true, 
            creator:true, 
            payments:true,
            ratings: true
        } });
      if (!travel) {
        return res.status(404).json({ error: 'Travel not found.' });
      }
      res.status(200).json(travel);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async createTravel(req: Request, res: Response) {
    const { origin, destination, day_of_travel, places, description, price, car_id, creator_id } = req.body;
    try {

        const car = await prisma.car.findUnique({ where: { id: car_id }, select: { car_owner_id: true } });
        if (!car) {
          return res.status(404).json({ error: 'Car not found.' });
        }
    
        if (car.car_owner_id !== creator_id) {
          return res.status(403).json({ error: 'You are not the owner of the car.' });
        }
         const newTravel = await prisma.travel.create({
          data: {
          origin,
          destination,
          day_of_travel,
          places,
          description,
          price,
          car: { connect: { id: car_id } },
          creator: { connect: { id: creator_id } },
        },
      });
      res.status(201).json(newTravel);  
    } catch (error) {
      res.status(500).json({ error: 'Failed to create travel.' });
    }
  }

  async updateTravel(req: Request, res: Response) {
    const travelId = req.params.id;
    const { origin, destination, day_of_travel, places, description, price, car_id } = req.body;
    try {
      const updatedTravel = await prisma.travel.update({
        where: { id: travelId },
        data: {
          origin,
          destination,
          day_of_travel,
          places,
          description,
          price,
          car: { connect: { id: car_id } },
        },
      });
      res.status(200).json(updatedTravel);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update travel.' });
    }
  }

  async deleteTravel(req: Request, res: Response) {
    const travelId = req.params.id;
    try {
      await prisma.travel.delete({ where: { id: travelId } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete travel.' });
    }
  }
}
