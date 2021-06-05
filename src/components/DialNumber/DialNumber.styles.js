import styled from "react-emotion";



export const Button = styled("button")`
  background: none;
  border: none;
  box-shadow: none;
  background: ${p => p.theme.colors.flexBlueColor};
  color: #82D2F4;
  text-transform: uppercase;
  font-size: 10px;
  width: 100px;
  padding: 12px;
  font-weight: bold;
  border-radius: 4px;
  letter-spacing: 1.2px;
  font-family: inherit;
  display: flex; 
  justify-content: center;

`;

