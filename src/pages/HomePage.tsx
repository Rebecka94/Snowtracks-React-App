import styled from "styled-components";
import MountainImg from "../assets/Mountain.png";

const StyledImage = styled.img`
  opacity: 80%;
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const HomePageTitle = styled.h1`
font-size: 18px
`;

export default function HomePage() {
  return (
    <div>
      <HomePageTitle>Utforska populära skidorter</HomePageTitle>
      <StyledImage src={MountainImg} alt="Mountain" />
    </div>
  );
}
