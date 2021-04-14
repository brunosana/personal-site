import React from 'react';

import { Content } from './styles';

interface ProjectProps {
    name: string;
    area: string;
    tags: Array<String>;
    url: string;
}

const Project: React.FC<ProjectProps> = ({name, area, tags, url}) => {
    return(
        <Content href={url} target="blank" >
            <p id="ProjectName">{name}</p>
            <p id="ProjectArea">{area}</p>
            <p id="ProjectTags">{tags.join(' • ')}</p>
        </Content>
    );
}

export default Project;