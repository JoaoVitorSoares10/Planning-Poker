import { useEffect, useState } from "react";
import { Cards, Container, Content, Header, Players, Status, CardsTitle, Deck } from "./styles";

//import PlayerImg from '../../assets/players.svg';

import { User } from "../../components/user";
import { Card } from "../../components/Card";
import { Navigate, useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrdXZlcnN4bGF4eGVhcXNzYnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMwOTQ2NDMsImV4cCI6MTk2ODY3MDY0M30.luZte9HMZk7zyy9jADd-5lz9ewUKznkE_buWoQOekIM';
const SUPABASE_URL = 'https://qkuversxlaxxeaqssbya.supabase.co';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface Registerprops {
  username: string, 
  room: string
}

interface loggedUsersType {
  author: string,
  created_at: string,
  id: number,
  room: string
  selected_card: string
}

const getUsersLogged = () =>{
  return supabaseClient
  .from('users')
  .on('INSERT', ({newUser})=>{
    console.log("New user");
  })
  .subscribe();
}

export function Home({username, room}:Registerprops) {
  const [loggedUsers, setLoggedUsers] = useState<loggedUsersType[]>([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    if(!username || !room){
      navigate("/register");
    }
  })

  useEffect(() => {
    supabaseClient
      .from<loggedUsersType>('users')
      .select('*')
      .then(({ data })=>{
        setLoggedUsers(data as any) ;
      })

      
  }, [])

  const handleSelectCard = async (card:string)=>{
    const selectInfo = {
      author: username,
      room: room,
      selected_card: card
    }

    supabaseClient
      .from('users')
      .insert([selectInfo])
      .then((res)=>{
        console.log(res);
      })
  }

  return (
    <Container>
      <Header>
        <h1>Plannig Poker</h1>
        <p>{username}</p>
        <p>/{room}</p>
        {/* <button><img src={PlayerImg} alt="" /> Convidar jogadores</button> */}
      </Header>
      <Content>
        <div>
          <Status>
            <h2>Esperando pelo voto dos jogadores</h2>
          </Status>
          <Players>
            {loggedUsers.map((item)=>(
              <User key={item.id} name={item.author} selectedCard={item.selected_card}/>
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