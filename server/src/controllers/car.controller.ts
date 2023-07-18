import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class CarController {
  async getCars(req: Request, res: Response) {
    try {
      const cars = await prisma.car.findMany();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getCarById(req: Request, res: Response) {
    const carId = req.params.id;
    try {
      const car = await prisma.car.findUnique({ where: { id: carId } });
      if (!car) {
        return res.status(404).json({ error: 'Car not found.' });
      }
      res.status(200).json(car);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async createCar(req: Request, res: Response) {
    const { brand, identification, color, car_owner_id } = req.body;
    try {
      const newCar = await prisma.car.create({
        data: {
          brand,
          identification,
          color,
          car_owner: { connect: { id: car_owner_id } },
        },
      });
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create car.' });
    }
  }

  async updateCar(req: Request, res: Response) {
    const carId = req.params.id;
    const { brand, identification, color, car_owner_id } = req.body;
    try {
      const updatedCar = await prisma.car.update({
        where: { id: carId },
        data: {
          brand,
          identification,
          color,
          car_owner: { connect: { id: car_owner_id } },
        },
      });
      res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update car.' });
    }
  }

  async deleteCar(req: Request, res: Response) {
    const carId = req.params.id;
    try {
      await prisma.car.delete({ where: { id: carId } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete car.' });
    }
  }
}
