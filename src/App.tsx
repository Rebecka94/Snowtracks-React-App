import { Outlet } from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

const BackgroundDiv = styled.div`
  font-family: "Geist Mono", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e2cce7, #829ec8);
  padding: 20px;
`;

const ContentBox = styled.div`
  width: 80%;
  max-width: 1200px;
  background: linear-gradient(to bottom, white 70%, #829EC8 100%);
  border-radius: 15px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export default function App() {
  return (
    <BackgroundDiv>
      <ContentBox>
        <Header />
        <main>
          <Outlet />
        </main>
      </ContentBox>
      <Footer />
    </BackgroundDiv>
  );
}
