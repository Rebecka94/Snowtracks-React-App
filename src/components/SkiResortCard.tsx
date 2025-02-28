import { Link } from "react-router";
import styled from "styled-components";
import { SkiResort } from "../data";

interface Props {
  skiResort: SkiResort;
}

const ResortContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ResortImage = styled.img`
  width: 200px;
  height: 140px;
  object-fit: cover;
  border-radius: 10%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

const ResortLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 15px;
`;

export default function SkiResortCard(props: Props) {
  return (
    <ResortContainer>
      <ResortLink to={`skiresorts/${props.skiResort.id}`}>
        {props.skiResort.namn}, {props.skiResort.land}
      </ResortLink>
      <ResortLink to={`skiresorts/${props.skiResort.id}`}>
    <ResortImage src={props.skiResort.image} alt="Globe Icon" />
  </ResortLink>

    </ResortContainer>
  );
}
