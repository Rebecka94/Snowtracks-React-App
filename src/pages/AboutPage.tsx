import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10%;
`;

const DescriptionText = styled.p`
  text-align: left;
`;

export default function AboutPage() {
  return (
    <Wrapper>
      <h2>Om oss!</h2>
      <DescriptionText>
        Snow Tracker hjälper dig att hitta världens bästa skidorter och hålla
        koll på vädret för varje destination. Vi erbjuder en enkel och
        användarvänlig upplevelse där du kan upptäcka nya skidorter, filtrera
        efter kontinent och få den senaste väderinformationen för att planera
        din resa.
      </DescriptionText>
    </Wrapper>
  );
}
