import styled from "@emotion/styled";

export const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }: any) => theme.mainTitleColor};

  Header:hover & {
    color: ${({ theme }: any) => theme.mainTextColor};
  }
`;
