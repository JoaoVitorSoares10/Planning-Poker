import {Container, Content, StyledLink} from './styles';

interface Registerprops {
  username: string,
  onSetUsername: (event: string) => void,
  room: string
  onSetRoom: (event: string) => void
}

export function Register({username, onSetUsername, room, onSetRoom}:Registerprops) {
  const joinRoom = () =>{
    
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