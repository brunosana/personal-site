import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Content } from './styles';

interface SocialItemProps {
    icon: React.ComponentType<IconBaseProps>;
    name: string;
    url: string;
}

const SocialItem: React.FC<SocialItemProps> = ({name, url, icon: Icon}) => {
    return (
        <Content href={url} target="blank">
            <Icon color={'#FFF'} size={75}/>
            <span>{name}</span>
        </Content>
    );
}

export default SocialItem;