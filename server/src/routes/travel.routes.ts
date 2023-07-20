import { TravelController } from '@/controllers/travel.controller';
import { Router } from 'express';

const travelRouter = Router();
const travelController = new TravelController();

travelRouter.get('/all', travelController.getTravels);

travelRouter.get('/:id', travelController.getTravelById);

travelRouter.post('/create', travelController.createTravel);

travelRouter.put('/:id', travelController.updateTravel);

travelRouter.delete('/:id', travelController.deleteTravel);

export default travelRouter;
