import { Link } from "react-router";
import styled from "styled-components";
import { SkiResort } from "../data";
import MountainImg from "../assets/Mountain.png";

interface Props {
  skiResort: SkiResort;
}

const ResortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: center;
`;

const ResortImage = styled.img`
  width: 90px;
  height: 70px;
`;

const ResortLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 15px;
  padding-right: 20px;
`;

export default function SkiResortCard(props: Props) {
  return (
    <ResortContainer>
      <ResortLink to={`skiresorts/${props.skiResort.id}`}>
        {props.skiResort.namn}, {props.skiResort.land}
      </ResortLink>
      <ResortImage src={MountainImg} alt="Globe Icon" />
    </ResortContainer>
  );
}
