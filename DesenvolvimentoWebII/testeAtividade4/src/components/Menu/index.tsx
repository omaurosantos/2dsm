import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: #fff;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 0 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem to="/pagina1">Escrita1</MenuItem>
      <MenuItem to="/pagina2">Escrita2</MenuItem>
      <MenuItem to="/pagina3">Escrita3</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
