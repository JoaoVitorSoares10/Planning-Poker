import {Container, Content} from './styles';
import InputIconImg from '../../assets/InputIcon.svg'

export function Register() {
  return (
    <Container>
      <Content>
        <h1>Bem vindo</h1>
        <p>Primeira etapa, digite seu nome!</p>
        <div>
        <img src={InputIconImg} alt=""/>
          <input type="text" value="" name="username" placeholder='Digite seu nome'/>
        </div>
        <button type="submit">JOGAR</button>
      </Content>
    </Container>
  );
}