import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class RatingController {
  async getRatings(req: Request, res: Response) {
    try {
      const ratings = await prisma.rating.findMany();
      res.status(200).json(ratings);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getRatingById(req: Request, res: Response) {
    const ratingId = req.params.id;
    try {
      const rating = await prisma.rating.findUnique({ where: { id: ratingId } });
      if (!rating) {
        return res.status(404).json({ error: 'Rating not found.' });
      }
      res.status(200).json(rating);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async createRating(req: Request, res: Response) {
    const { stars, description, ranker_id, ranked_id } = req.body;
    try {
      const newRating = await prisma.rating.create({
        data: {
          stars,
          description,
          ranker: { connect: { id: ranker_id } },
          ranked: { connect: { id: ranked_id } },
        },
      });
      res.status(201).json(newRating);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create rating.' });
    }
  }

  async updateRating(req: Request, res: Response) {
    const ratingId = req.params.id;
    const { stars, description, ranker_id, ranked_id } = req.body;
    try {
      const updatedRating = await prisma.rating.update({
        where: { id: ratingId },
        data: {
          stars,
          description,
          ranker: { connect: { id: ranker_id } },
          ranked: { connect: { id: ranked_id } },
        },
      });
      res.status(200).json(updatedRating);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update rating.' });
    }
  }

  async deleteRating(req: Request, res: Response) {
    const ratingId = req.params.id;
    try {
      await prisma.rating.delete({ where: { id: ratingId } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete rating.' });
    }
  }
}
