import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CalcHistory from "./components/CalcHistory";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [calcHistory, setCalcHistory] = useState([]);
  const isMounted = useRef(false);
  const regExp = /^[0-9+-/*().]+$/;

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calcHistory"));
    setCalcHistory(savedHistory);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setInputValue("");
        console.log("esc");
      }
      if (e.key === "Enter") {
        e.preventDefault();
        calcExpression();
        console.log("enter");
      }
    });
  }, []);

  // 계산 기록 삭제
  const deleteHistory = (id) => {
    setCalcHistory(calcHistory.filter((_, index) => calcHistory[index] !== id));
  };

  // 인풋에 입력한 값이 숫자 또는 연산자인지 판별 boolean 반환
  const checkValidExpression = (e) => {
    return regExp.test(e.target.value);
  };
  // 수식에 클릭한 숫자, 연산자 추가
  const addExpression = (e) => {
    setInputValue((state) => state + `${e.target.innerText}`);
  };
  // 입력식 계산
  const calcExpression = () => {
    if (inputValue) {
      const calcValue = eval(inputValue);
      setInputValue(calcValue.toString());
      setCalcHistory((state) => {
        if (state === null) return [inputValue];

        return [inputValue, ...state];
      });
    }
  };
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
    } else {
      isMounted.current = true;
    }
  }, [calcHistory]);

  return (
    <Container>
      <Grid>
        {/* 입력창 */}
        <Row>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => {
              if (!checkValidExpression(e)) {
                alert("유효한 숫자 또는 연산자를 입력하세요.");
                return;
              }
              setInputValue(e.target.value);
            }}
          />
        </Row>
        {/* 초기화 & 나누기/) */}
        <Row>
          <CancelButton onClick={() => setInputValue("")}>C</CancelButton>
          <OperatorButton onClick={addExpression}>/</OperatorButton>
        </Row>
        {/* 1,2,3,,곱하기(*) */}
        <Row>
          <CommonButton onClick={addExpression}>1</CommonButton>
          <CommonButton onClick={addExpression}>2</CommonButton>
          <CommonButton onClick={addExpression}>3</CommonButton>
          <OperatorButton onClick={addExpression}>*</OperatorButton>
        </Row>
        {/* 4,5,6,더하기(+) */}
        <Row>
          <CommonButton onClick={addExpression}>4</CommonButton>
          <CommonButton onClick={addExpression}>5</CommonButton>
          <CommonButton onClick={addExpression}>6</CommonButton>
          <OperatorButton onClick={addExpression}>+</OperatorButton>
        </Row>
        {/* 7,8,9,빼기9(-) */}
        <Row>
          <CommonButton onClick={addExpression}>7</CommonButton>
          <CommonButton onClick={addExpression}>8</CommonButton>
          <CommonButton onClick={addExpression}>9</CommonButton>
          <OperatorButton onClick={addExpression}>-</OperatorButton>
        </Row>
        {/* .,0, 계산(=) */}
        <Row>
          <CommonButton onClick={addExpression}>.</CommonButton>
          <CommonButton onClick={addExpression}>0</CommonButton>
          <CalcButton onClick={() => calcExpression()}>=</CalcButton>
        </Row>
      </Grid>
      {calcHistory && (
        <CalcHistory calcHistory={calcHistory} deleteHistory={deleteHistory} />
      )}
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
const Grid = styled.div`
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

const Row = styled.div`
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
  transition: transform 0.5s;
  &:active {
    transform: scale(0.8);
  }
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
