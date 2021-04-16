import React, { useState, useEffect } from 'react';

import Project from '../../Components/Project';
import api from '../../services/api';

import { PortifolioArea } from './styles';

interface ProjectProps {
    name: string;
    area: string;
    url: string;
    tags: Array<string>;
}

const Portifolio: React.FC = () => {

    const [projects, setProjects] = useState<Array<ProjectProps>>([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    
    useEffect( () => {
        api.get('/projects').then( response => {
            if(response.status !== 200) {
                setError(true);
            }else {
                setProjects(response.data);
            }
        })
        .catch(err => {
            setMessage(err.message);
            setError(true);
        });
    }, [])

    return (
        <PortifolioArea>
            {
                projects &&
                projects.map(project =>
                    <Project
                        area={project.area}
                        name={project.name}
                        tags={project.tags}
                        url={project.url}/>
                    )
            }
            { error && <span>{/*message*/ process.env.REACT_APP_URL}</span> }
        </PortifolioArea>
    )
}

export default Portifolio;