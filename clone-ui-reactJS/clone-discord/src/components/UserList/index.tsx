import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
  nickname: string;
  isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot} ) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}

    </User>
  );
}



const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Guigas"/>

      <Role>Offline - 19</Role>
      <UserRow nickname="Khawan" isBot/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      <UserRow nickname="Ericles Nunes"/>
      

     
    </Container>
  );
}

export default UserList;