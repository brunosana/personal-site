import React from 'react';

import { Image, TextArea, Content } from './styles';

const About: React.FC = () => {

    let resume = "Olá, me chamo Bruno Santana Andrade, nasci em 1997 e curso Engenharia de Computação na Universidade Federal de Sergipe. Apaixonado por tecnologia e animação, busco desenvolver soluções web e mobile da melhor forma possível. Também tenho interesse em Games, Projetos Educativos e Aviões. Aqui estão alguns fatos sobre mim:"
    let facts = [
        "Estou atualmente estudando a stack JS com ReactJS, React Native e NodeJS com Typescript",
        "Sempre que posso pratico o meu inglês, pois acho imprescindível ter um bom conhecimento na linguagem para futuras oportunidades",
        "Counter-Strike é o meu game favorito",
        "Eu gosto de música e não tenho um estilo preferido, eu escuto literalmente tudo",
        "Apaixonado por Linux",
        "Torcedor do São Paulo o maior do Brasil!",
        "Gosto de esportes e curto de vez em quando um Futebolzinho ou um Tênis"
    ]

    return (
        <Content>
            <Image />
            <TextArea>
                <p>
                {resume}
                </p><br/>
                <div>
                {facts.map(fact =>
                    <>
                    <p>• {fact}</p>
                    </>
                )}
                </div>
            </TextArea>
        </Content>
    )
}

export default About;