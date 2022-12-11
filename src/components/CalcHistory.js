import styled from "styled-components";
const CalcHistory = (props) => {
  return (
    <Container>
      <p>기록</p>
      <Ul>
        {props.calcHistory.map((history, index) => (
          <Li key={`${index}list`}>
            <p>{`${history} = ${eval(history)}`}</p>
            <button
              id={index}
              onClick={(e) => {
                props.deleteHistory(e.target.id);
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

const Ul = styled.ul`
  margin: 0;
  padding: 0 20px 0 0;
  height: 333px;
  overflow: auto;
`;

const Li = styled.li`
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
  list-style-type: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  + li {
    margin-top: 5px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 333px;
`;
