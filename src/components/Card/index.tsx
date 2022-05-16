import { Container } from "./style";

interface CradProps {
  value: string;
}

export function Card({value}:CradProps) {
    return (
      <Container>
        <p>{value}</p>
      </Container>
    );
  }