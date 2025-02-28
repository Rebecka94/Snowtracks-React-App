import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 30px; 
  padding-right: 30px; 
`;

const DescriptionText = styled.p`
  text-align: left;
  margin-top: 50px;
  margin-bottom: 70px;
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
