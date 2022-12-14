import styled from "styled-components";
const CalcHistory = ({ calcHistory, deleteHistory, resetHistory }) => {
  return (
    <Container>
      <Div>
        <Span>기록</Span>
        <Button onClick={resetHistory}>전체 삭제</Button>
      </Div>
      <Ul>
        {calcHistory.map((history) => (
          <Li key={history.id}>
            <p>{`${history.expression} = ${history.answer}`}</p>
            <button
              onClick={() => {
                deleteHistory(history.id);
              }}
            >
              X
            </button>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default CalcHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  height: 333px;
  overflow: auto;
`;

const Li = styled.li`
  box-sizing: border-box;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
  list-style-type: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  + li:last-child {
    margin-bottom: 0px;
  }

  button {
    background-color: red;
    border-radius: 50%;
    height: 25px;
    cursor: pointer;
    &:hover {
      background-color: lightcoral;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  p {
    margin: 0;
    width: 200px;
    overflow: hidden;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 30px 20px;
  align-items: center;
`;
const Span = styled.span`
  margin: 0;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: red;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: lightcoral;
  }
  &:active {
    transform: scale(0.9);
  }
`;
