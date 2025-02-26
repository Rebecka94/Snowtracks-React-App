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

const Wrapper1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterBox = styled.div`
  position: absolute;
  bottom: -20px;
  background: white;
  padding: 15px 25px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;
  width: 60%;
  opacity: 80%;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const ResortList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const HomePageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
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
      <Wrapper1>
        <HomePageTitle>Utforska populära skidorter</HomePageTitle>
        <StyledImage src={MountainImg} alt="Mountain" />
        <FilterBox>Location, Budget, Season ⛷️</FilterBox>
      </Wrapper1>

      <Wrapper>
        <Heading>Svenska Skidorter</Heading>
        <ResortList>
          {svenskaSkidorter.map((skiResort) => (
            <SkiResortCard key={skiResort.id} skiResort={skiResort} />
          ))}
        </ResortList>

        <Heading>Skidorter Utomlands</Heading>
        <ResortList>
          {internationellaSkidorter.map((skiResort) => (
            <SkiResortCard key={skiResort.id} skiResort={skiResort} />
          ))}
        </ResortList>
      </Wrapper>
    </Container>
  );
}
