import React from 'react';

import Project from '../../Components/Project';

import { PortifolioArea } from './styles';

const Portifolio: React.FC = () => {
    return (
        <PortifolioArea>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
            <Project area="Back-End" name="PROJECT NAME" tags={["NodeJS", "Typescript"]} url="http://www.google.com.br"/>
        </PortifolioArea>
    )
}

export default Portifolio;