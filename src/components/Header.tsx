import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333; 
  font-size: 
  gap: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D2B0DB;
    color: white;
  }
`;

export default function Header() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Nav>
  );
}
