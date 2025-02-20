import styled from "styled-components";
import MountainImg from "../assets/Mountain.png";
import SkiResortCard from "../components/SkiResortCard";
import { skidorter } from "../data";

const StyledImage = styled.img`
  opacity: 80%;
  width: 90%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FilterBox = styled.div`
  background: white;
  padding: 15px 25px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;
  width: 60%;
  opacity: 80%;
`;

const Section = styled.div`
  margin-top: 20px;
  width: 80%;
  max-width: 1200px;
  text-align: center;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 5px;
`;

const HomePageTitle = styled.h1`
  font-size: 18px;
`;

const ResortList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export default function HomePage() {
  const svenskaSkidorter = skidorter.filter(
    (skidort) => skidort.land === "Sverige"
  );
  const internationellaSkidorter = skidorter.filter(
    (skidort) => skidort.land !== "Sverige"
  );

  return (
    <Container>
      <HomePageTitle>Utforska populära skidorter</HomePageTitle>
      <StyledImage src={MountainImg} alt="Mountain" />
      <FilterBox>Location, Budget, Season ⛷️</FilterBox>

      <Section>
        <Heading>Svenska Skidorter</Heading>
        <ResortList>
          {svenskaSkidorter.map((skiResort) => (
            <SkiResortCard key={skiResort.id} skiResort={skiResort} />
          ))}
        </ResortList>
      </Section>

      <Section>
        <Heading>Skidorter Utomlands</Heading>
        <ResortList>
          {internationellaSkidorter.map((skiResort) => (
            <SkiResortCard key={skiResort.id} skiResort={skiResort} />
          ))}
        </ResortList>
      </Section>
    </Container>
  );
}
