import { TravelerController } from '@/controllers/traveler.controller';
import { Router } from 'express';

const travelerRouter = Router();
const travelerController = new TravelerController();


travelerRouter.get('/all', travelerController.getTravelers);

travelerRouter.get('/:id', travelerController.getTravelerById);

travelerRouter.post('/create', travelerController.createTraveler);

travelerRouter.delete('/:id', travelerController.deleteTraveler);

export default travelerRouter;
