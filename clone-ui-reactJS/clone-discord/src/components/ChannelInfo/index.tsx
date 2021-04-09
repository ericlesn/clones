import React from 'react';

import { Container, HashtagIcon, Title,Separator,Description } from './styles';



const ChannelInfo: React.FC = () => {
  return (
    <Container>

      <HashtagIcon/>
      <Title>Meu Servidor</Title>

      <Separator/>

      <Description>Canal aberto</Description>
    </Container>
  );
}

export default ChannelInfo;