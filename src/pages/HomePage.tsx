import { useState } from "react";
import styled from "styled-components";
import MountainImg from "../assets/Mountain.png";
import SkiResortCard from "../components/SkiResortCard";
import { skidorter } from "../data";

const StyledImage = styled.img`
  opacity: 80%;
  width: 90%;
  object-fit: cover;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterBox = styled.select`
  position: absolute;
  bottom: -20px;
  background: white;
  padding: 15px 45px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;
  width: 60%;
  opacity: 80%;
`;

const SkiResortWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const ResortList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const HomePageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
`;

export default function HomePage() {
  const [filteredContinent, setFilteredContinent] = useState<string>("");

  const getResortsByContinent = (continent: string) =>
    skidorter.filter((skiResort) => skiResort.kontinent === continent);

  const continents = Array.from(
    new Set(skidorter.map((skiResort) => skiResort.kontinent))
  );

  return (
    <Container>
      <Wrapper>
        <HomePageTitle>Utforska populära skidorter ⛷️</HomePageTitle>
        <StyledImage src={MountainImg} alt="Mountain" />
        <FilterBox
          value={filteredContinent}
          onChange={(e) => setFilteredContinent(e.target.value)}
        >
          <option value="">Välj en kontinent</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </FilterBox>
      </Wrapper>

      <SkiResortWrapper>
        {filteredContinent ? (
          <div key={filteredContinent}>
            <Heading>Skidorter i {filteredContinent}</Heading>
            <ResortList>
              {getResortsByContinent(filteredContinent).map((skiResort) => (
                <SkiResortCard key={skiResort.id} skiResort={skiResort} />
              ))}
            </ResortList>
          </div>
        ) : (
          continents.map((continent) => (
            <div key={continent}>
              <Heading>{continent}</Heading>
              <ResortList>
                {getResortsByContinent(continent).map((skiResort) => (
                  <SkiResortCard key={skiResort.id} skiResort={skiResort} />
                ))}
              </ResortList>
            </div>
          ))
        )}
      </SkiResortWrapper>
    </Container>
  );
}
