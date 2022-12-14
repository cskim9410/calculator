# 계산기 앱
# 데모 보기

https://cskim9410.github.io/calculator/

숫자를 입력하여 기본 사칙연산이 가능한 계산기 앱.
</br>
![앱스샷](./emul.png)



</br>

# 기술 구성

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React v18
- styled-components v5
  </br>
  </br>
  </br>

# 프로젝트 기간

- 2022-12-11 ( 12시간 )  
  </br>
  </br>

# 앱 실행 방법

> `npm start`

<br />

# 22/12/11 개선사항

- [x] 영문 한글 입력시 에러띄워주기 (정규표현식)
- [x] esc로 clear
- [ ] 백스페이스로 뒤에서부터 지워주기 (오류 발견 추후 수정)
- [x] 계산 로컬스토리지 히스토리 저장 띄워주기
- [x] 누를때 액션추가 스케일축소
- [x] 파비콘 변경

# 22/12/11 16:14 리뷰

- 함수명 작성할 때 동사를 앞으로 뺄 것 (동작하나만) (`numberBtnClickHandler` > `addExpression`)
- CRA 프로젝트 생성 후 쓸모없는 코드 파일 삭제 후 작업하기
- 함수의 실행 목적에 맞는 주석 작성
- 컴포넌트명 가독성 좋게 작성 (`GridContainer` > `Grid`, `RowContainer` > `Row`)

# 22/12/13 개선사항

- [x] 컴포넌트 렌더링마다 키입력 이벤트리스너 중첩현상 (useEffect안으로 넣어서 해결)
- [x] 기록에서 의미없이 한번 더 돌아가는 계산함수 수정
- [x] 기록 객체형태로 저장되도록 수정
- [x] 기록 삭제 함수 splice > filter 로직변경
- [x] 반응형 디자인
- [x] 기록 전체 삭제 기능추가
