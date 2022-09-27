import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    border-bottom: 1px solid #0e0e0e;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  row-gap: 30px;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 21px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 20%;
    flex-direction: column;
    row-gap: 25px;
    justify-content: end;
    border-right: 1px solid #0e0e0e;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props: { buttonColor: string }) => props.buttonColor};
  width: 110px;
  border-radius: 20px;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 35px;
  padding: 10px 16px;
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) {
    width: 80%;
    margin: 25px 0px 0px 25px;
  }
`;

export const StyledImage = styled.img`
  width: 100vw;
  height: 100%;

  @media (min-width: 768px) {
    width: 80vw;
  }
`;

export const StyledStatusSVG = styled.img`
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  top: 10px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
