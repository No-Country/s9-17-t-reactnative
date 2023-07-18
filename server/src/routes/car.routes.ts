import { CarController } from '@/controllers/car.controller';
import { Router } from 'express';

const carRouter = Router();
const carController = new CarController();

carRouter.get('/all', carController.getCars);

carRouter.get('/:id', carController.getCarById);

carRouter.post('/create', carController.createCar);

carRouter.put('/:id', carController.updateCar);

carRouter.delete('/:id', carController.deleteCar);

export default carRouter;
