import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #f8f9fa;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
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
