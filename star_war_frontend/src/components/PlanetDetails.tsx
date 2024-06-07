import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';
import '../styles/style.css';
import { Planet, Resident } from '../interfaces/interfaces';

export const PlanetDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [planet, setPlanet] = useState<Planet | null>(null);
    const [residents, setResidents] = useState<Resident[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const { data } = await axios.get(`https://swapi.dev/api/planets/${id}/`);
                setPlanet(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching planet data:", error);
                setLoading(false);
            }
        };

        fetchPlanet();
    }, [id]);

    useEffect(() => {
        const fetchResidents = async () => {
            if (planet?.residents.length) {
                const residentPromises = planet.residents.map((url) => axios.get(url).then(res => res.data));
                const residentData = await Promise.all(residentPromises);
                setResidents(residentData);
            }
        };

        if (planet) {
            fetchResidents();
        }
    }, [planet]);

    return (
        <div className='planets-background '>
            {
                loading ? <div>
                    <CircularProgress />
                </div> : <div className='planet-details'>
                    <div className='planets-heading'>
                        <h1>{planet?.name}</h1>
                    </div>
                    <div className='planet-data'>
                        <p><strong>Rotation Period:</strong> {planet?.rotation_period}</p>
                        <p><strong>Orbital Period:</strong> {planet?.orbital_period}</p>
                        <p><strong>Diameter:</strong> {planet?.diameter}</p>
                        <p><strong>Climate:</strong> {planet?.climate}</p>
                        <p><strong>Gravity:</strong> {planet?.gravity}</p>
                        <p><strong>Terrain:</strong> {planet?.terrain}</p>
                        <p><strong>Surface Water:</strong> {planet?.surface_water}</p>
                        <p><strong>Population:</strong> {planet?.population}</p>
                    </div>
                    <div className='planets-heading'>
                        <h2>Residents</h2>
                    </div>
                    {residents.length ? (
                        <div className="residents">
                            {residents.map((resident, index) => (
                                <Card key={index} className="resident-card" variant="outlined">
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {resident.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <p><strong>Height:</strong> {resident.height}</p>
                                            <p><strong>Mass:</strong> {resident.mass}</p>
                                            <p><strong>Hair Color:</strong> {resident.hair_color}</p>
                                            <p><strong>Skin Color:</strong> {resident.skin_color}</p>
                                            <p><strong>Eye Color:</strong> {resident.eye_color}</p>
                                            <p><strong>Birth Year:</strong> {resident.birth_year}</p>
                                            <p><strong>Gender:</strong> {resident.gender}</p>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className='planets-heading'>
                            <p>No Residents Data</p>
                        </div>
                    )}
                </div>
            }

        </div>

    );
};
