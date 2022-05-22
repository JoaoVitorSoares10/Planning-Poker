import { Container, Status } from "./style";

interface UserProps {
  name: string;
  selectedCard: string;
}

export function User({name, selectedCard}:UserProps) {
    return (
      <Container>
        <Status className={selectedCard ? "selected":"non-selected"}>{selectedCard}</Status>
        <p>{name}</p>
      </Container>
    );
  }