import { Container, Status } from "./style";

interface UserProps {
  name: string;
}

export function User({name}:UserProps) {
    return (
      <Container>
        <Status></Status>
        <p>{name}</p>
      </Container>
    );
  }