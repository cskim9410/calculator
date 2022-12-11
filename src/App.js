import { Fragment, useState, useRef } from "react";
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState("");

  const numberBtnClickHandler = (e) => {
    setInputValue((state) => state + `${e.target.innerText}`);
  };
  return (
    <Container>
      <RowContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </RowContainer>
      <RowContainer>
        <CancelButton onClick={() => setInputValue("")}>C</CancelButton>
        <OperatorButton onClick={numberBtnClickHandler}>/</OperatorButton>
      </RowContainer>
      <RowContainer>
        <CommonButton onClick={numberBtnClickHandler}>1</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>2</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>3</CommonButton>
        <OperatorButton onClick={numberBtnClickHandler}>*</OperatorButton>
      </RowContainer>
      <RowContainer>
        <CommonButton onClick={numberBtnClickHandler}>4</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>5</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>6</CommonButton>
        <OperatorButton onClick={numberBtnClickHandler}>+</OperatorButton>
      </RowContainer>
      <RowContainer>
        <CommonButton onClick={numberBtnClickHandler}>7</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>8</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>9</CommonButton>
        <OperatorButton onClick={numberBtnClickHandler}>-</OperatorButton>
      </RowContainer>
      <RowContainer>
        <CommonButton onClick={numberBtnClickHandler}>.</CommonButton>
        <CommonButton onClick={numberBtnClickHandler}>0</CommonButton>
        <CalcButton
          onClick={() => {
            const calcValue = eval(inputValue);
            setInputValue(calcValue);
          }}
        >
          =
        </CalcButton>
      </RowContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: lightgray;
  width: 400px;
  display: grid;
  grid-template-rows: repeat(6, 40px);
  grid-row-gap: 9px;
`;

const RowContainer = styled.div`
  width: 300px;
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: repeat(4, 50px);
`;

const CommonButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Input = styled.input`
  grid-column-start: 1;
  grid-column-end: 5;
  font-size: 24px;
`;

const CancelButton = styled(CommonButton)`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: red;
`;

const CalcButton = styled(CommonButton)`
  background-color: teal;
  grid-column-start: 3;
  grid-column-end: 5;
`;

const OperatorButton = styled(CommonButton)`
  background-color: yellow;
`;
