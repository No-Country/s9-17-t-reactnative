import { RatingController } from '@/controllers/rating.controller';
import { Router } from 'express';

const ratingRouter = Router();
const ratingController = new RatingController();

ratingRouter.get('/all', ratingController.getRatings);

ratingRouter.get('/:id', ratingController.getRatingById);

ratingRouter.post('/create', ratingController.createRating);

ratingRouter.put('/:id', ratingController.updateRating);

ratingRouter.delete('/:id', ratingController.deleteRating);

export default ratingRouter;
