import { Request, Response } from 'express';
import axios from 'axios';

export const getPlanets = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get('https://swapi.dev/api/planets/');
    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
