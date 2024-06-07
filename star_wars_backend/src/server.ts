import express from 'express';
import cors from 'cors';
import planetRoutes from './routes/planetsRoutes/planets.route';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api', planetRoutes);

app.listen(PORT,()=>{
    console.log('Running on port', PORT)
});
