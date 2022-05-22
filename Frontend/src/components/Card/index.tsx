import { Container } from "./style";

interface CradProps {
  value: string;
  onSelectCard: (value:string)=>void;
}

export function Card({onSelectCard, value}:CradProps) {
    return (
      <Container onClick={()=>onSelectCard(value)}>
        <p>{value}</p>
      </Container>
    );
  }