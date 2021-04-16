import React, {useRef, useEffect} from 'react';
import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n)=>(
        <ChannelMessage 
          author="Ericles Nunes"
          date="16/04/2021"
          content="Oi"
        />
        ))}

        <ChannelMessage 
          author="Ericles Nunes"
          date="16/04/2021"
          content={
            <>
            <Mention>@Guigas</Mention> alo guilerme
            </>
          }
          hasMention
        />
        <ChannelMessage 
          author="Khawan"
          date="16/04/2021"
          content={
            <>
            <Mention>@Ericles Nunes</Mention> iae loko
            </>
          }
          hasMention
          isBot
        />       
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;