import { Fragment, useState, useRef } from "react";
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState("");

  const numberBtnClickHandler = (e) => {
    setInputValue((state) => state + `${e.target.innerText}`);
  };
  return (
    <Container>
      <GridContainer>
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
      </GridContainer>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
const GridContainer = styled.div`
  border-radius: 4px;
  border: 2px solid black;
  place-items: center;
  background-color: lightgray;
  width: 250px;
  height: 290px;
  display: grid;
  grid-template-rows: repeat(6, 40px);
  grid-row-gap: 9px;
  padding: 20px;
`;

const RowContainer = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: repeat(4, 60px);
`;

const CommonButton = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  grid-column: auto;
`;

const Input = styled.input`
  grid-column-start: 1;
  grid-column-end: 5;
  font-size: 24px;
  border-radius: 4px;
  height: 40px;
`;

const CancelButton = styled(CommonButton)`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: red;
  &:hover {
    background-color: lightcoral;
  }
`;

const CalcButton = styled(CommonButton)`
  background-color: teal;
  grid-column-start: 3;
  grid-column-end: 5;
  &:hover {
    background-color: lightcyan;
  }
`;

const OperatorButton = styled(CommonButton)`
  background-color: yellow;
`;
