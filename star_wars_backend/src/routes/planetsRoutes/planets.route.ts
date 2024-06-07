import express from 'express';
import { getPlanets } from '../../controllers/planetController/planet.controller';

const router = express.Router();

router.get('/planets', getPlanets);

export default router;
