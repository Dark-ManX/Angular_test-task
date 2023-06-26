import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../Button";

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px 20px;
  background-color: transparent;
  z-index: 5;
  transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) 450ms;

  &:hover {
    background-color: #fff;
    opacity: 0.6;
  }
`;

export const StyledMainLink = styled(Link)`
  margin-left: 35%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props: any): string => props.theme.mainTitleColor};

  Header:hover & {
    color: ${(props: any): string => props.theme.mainTextColor};
  }
`;

export const SearchButton = styled(Button)`
  margin-left: ${({ search }): any => (search ? "20px" : "auto")};
`;

export const LanguageButton = styled(Button)`
  border: 1px solid black;
`;
