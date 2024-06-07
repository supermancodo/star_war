import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { StyledButton, StyledCard } from '../styles/muiStyle';
import { Planet } from '../interfaces/interfaces';
import { CardActions, CardContent, CircularProgress, Typography } from '@mui/material'

export const Planets: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/api/planets');
                setPlanets(data.results);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
            }
        };
        fetchPlanets();
    }, []);

    return (
        <div className="planets-background">
            <div className='planets-details'>
                <div className='planets-heading'>
                    <h1>Star Wars Planets</h1>
                </div>
                <div>
                    {loading ? <div>
                        <CircularProgress />
                    </div> : <div  className="planets-grid">
                        {planets.map((planet, index) => {
                            const id = planet.url.split('/').slice(-2, -1)[0];
                            return (
                                <StyledCard key={index} variant="outlined">
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {planet.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <StyledButton size="small" className="button" onClick={() => navigate(`/planet/${id}`)} variant="outlined" color="success">See Details</StyledButton>
                                    </CardActions>
                                </StyledCard>
                            );
                        })}
                    </div>
                    }

                </div>
            </div>

        </div>
    );
};
