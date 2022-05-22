import {Container, Content, StyledLink} from './styles';
import InputIconImg from '../../assets/InputIcon.svg'
import { useState } from 'react';

interface Registerprops {
  socket: {
    emit: (eventName: string, data:{
      username: string,
      room: string,
    }) => void;
  },
  username: string,
  onSetUsername: (event: string) => void,
  room: string
  onSetRoom: (event: string) => void
}

export function Register({socket, username, onSetUsername, room, onSetRoom}:Registerprops) {
  const joinRoom = () =>{
    if(username !== "" && room !== ""){
      const userInfo = {
        username: username,
        room: room,
      }
      socket.emit("joinRoom", userInfo);
    }
  }

  return (
    <Container>
      <Content>
        <h1>Bem vindo</h1>
        <p>Primeira etapa, digite seu nome!</p>
        <div>
          {/* <img src={InputIconImg} alt=""/> */}
          <input type="text" value={username} name="username" onChange={(event)=>onSetUsername(event.target.value)} placeholder='Digite seu nome'/>
          <input type="text" value={room} name="romm" onChange={(event)=>onSetRoom(event.target.value)} placeholder='Digite o código da sala'/>
        </div>
        <StyledLink to="/" onClick={()=>joinRoom()} >JOGAR</StyledLink>
      </Content>
    </Container>
  );
}