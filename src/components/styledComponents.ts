import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  padding: 1rem 2rem;

  & ul {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
`;

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 20%;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ProductWrapper = styled.div`
  background-color: lightgrey;
  width: 31%;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const ButtonLarge = styled.button`
  background: ${(props) =>
    props.style === "danger" ? "tred" : "palevioletred"};
  border-radius: 3px;
  border: none;
  color: white;
  padding: 0.5rem 1.5rem;

  &:hover {
    cursor: pointer;
    border: 2px solid red;
  }
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 1rem;
  & input,
  & select {
    border: none;
    border-radius: 3px;
  }
`;

export const ErrorWrapper = styled.div`
  color: red;
`;
