import { Link } from "react-router";
import styled from "styled-components";
import { SkiResort } from "../data";

interface Props {
  skiResort: SkiResort;
}

const ResortContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResortImage = styled.img`
  width: 200px;
  height: 140px;
  object-fit: cover;
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
      <ResortImage src={props.skiResort.image} alt="Globe Icon" />
    </ResortContainer>
  );
}
