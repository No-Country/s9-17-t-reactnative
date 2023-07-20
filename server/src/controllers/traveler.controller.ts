import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class TravelerController {
  async getTravelers(req: Request, res: Response) {
    try {
      const travelers = await prisma.traveler.findMany();
      res.status(200).json(travelers);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getTravelerById(req: Request, res: Response) {
    const travelerId = req.params.id;
    try {
      const traveler = await prisma.traveler.findUnique({ where: { id: travelerId } });
      if (!traveler) {
        return res.status(404).json({ error: 'Traveler not found.' });
      }
      res.status(200).json(traveler);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async createTraveler(req: Request, res: Response) {
    const { userId, travelId } = req.body;
    try {
      const newTraveler = await prisma.traveler.create({
        data: {
          userId,
          travelId,
        },
      });
      res.status(201).json(newTraveler);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create traveler.' });
    }
  }

  async deleteTraveler(req: Request, res: Response) {
    const travelerId = req.params.id;
    try {
      await prisma.traveler.delete({ where: { id: travelerId } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete traveler.' });
    }
  }
}
