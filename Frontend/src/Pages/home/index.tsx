import { useEffect, useState } from "react";

import { Cards, Container, Content, Header, Players, Status, CardsTitle, Deck } from "./styles";

import PlayerImg from '../../assets/players.svg';

import { User } from "../../components/user";
import { Card } from "../../components/Card";
import { Navigate, useNavigate } from "react-router-dom";

interface Registerprops {
  socket: {
    emit: (eventName: string, selectInfo:{
      room: string,
      author: string,
      selectCardNumber: string,
    }) => void,
    on: (eventName: string, data: (data: {
      id?: string,
      room: string, 
      author: string,
      selectCardNumber: string
    }) => void) => void
  },
  username: string, 
  room: string
}

interface loggedUsersType {
  id?: string;
  room: string, 
  author: string,
  selectCardNumber: string
}

export function Home({socket, username, room}:Registerprops) {
  const [loggedUsers, setLoggedUsers] = useState<loggedUsersType[]>([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    if(!username || !room){
      navigate("/register");
    }
  })

  useEffect(() => {
    console.log(loggedUsers)
  }, [loggedUsers])

  useEffect(() => {
    socket.on("newUser", (data)=>{
      /* let isFind = false;
      loggedUsers.forEach((item)=>{
        if(item.id === data.id){
          isFind = true;
        }
      })
      if(!isFind){
        setLoggedUsers([
          ...loggedUsers,
          data
        ]);
        console.log(data)
      } */
      setLoggedUsers((loggedUsers)=>[...loggedUsers,data]);
    });
  }, [socket])

  /* useEffect(() => {
    socket.on("ShowCards", (data)=>{
      setLoggedUsers([
        ...loggedUsers,
        data
    ]);
    });
  }, [socket]) */

  const handleSelectCard = async (card:string)=>{
    const selectInfo = {
      room: room,
      author: username,
      selectCardNumber: card,
    }

    await socket.emit("registerSelectCard", selectInfo);
  }

  return (
    <Container>
      <Header>
        <h1>Plannig Poker</h1>
        <p>{username}</p>
        <p>/{room}</p>
        <button><img src={PlayerImg} alt="" /> Convidar jogadores</button>
      </Header>
      <Content>
        <div>
          <Status>
            <h2>Esperando pelo voto dos jogadores</h2>
          </Status>
          <Players>
            {loggedUsers.map((item)=>(
              <User name={item.author} selectedCard={item.selectCardNumber}/>
            ))} 
          </Players>
        </div>
      </Content>
      <Deck>
          <CardsTitle>
            <h3>Escolha sua carta</h3>
          </CardsTitle>
          <Cards>
              <Card onSelectCard={handleSelectCard} value="1" />
              <Card onSelectCard={handleSelectCard}  value="2"/>
              <Card onSelectCard={handleSelectCard}  value="3"/>
              <Card onSelectCard={handleSelectCard}  value="5"/>
              <Card onSelectCard={handleSelectCard}  value="8"/>
              <Card onSelectCard={handleSelectCard}  value="13"/>
          </Cards>
        </Deck>
    </Container>
  );
}