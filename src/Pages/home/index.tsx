import { Cards, Container, Content, Header, Players, Status, CardsTitle, Deck } from "./styles";
import PlayerImg from '../../assets/players.svg';
import { User } from "../../components/user";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header>
        <h1>Plannig Poker</h1>
        <p>Seu Nome</p>
        <button><img src={PlayerImg} alt="" /> Convidar jogadores</button>
      </Header>
      <Content>
        <div>
          <Status>
            <h2>Esperando pelo voto dos jogadores</h2>
          </Status>
          <Players>
            <User name="João" />
            <User name="Juan" />
            <User name="Rinaldo" />
            <User name="Jederson" />
            <User name="Josué" />
            <User name="Elaine" />
            <User name="João" />
            <User name="Juan" />
            <User name="Rinaldo" />
            <User name="Jederson" />
            <User name="Josué" />
            <User name="Elaine" />
          </Players>
        </div>
      </Content>
      <Deck>
          <CardsTitle>
            <h3>Escolha sua carta</h3>
          </CardsTitle>
          <Cards>
              <Card value="1" />
              <Card value="2"/>
              <Card value="3"/>
              <Card value="5"/>
              <Card value="8"/>
              <Card value="13"/>
          </Cards>
        </Deck>
    </Container>
  );
}