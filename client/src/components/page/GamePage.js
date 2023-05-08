import React from 'react'
import styled from 'styled-components';

const Page = styled.div`
  position: absolute;
  top: 100px; //배너때문에 100px부터 시작
  width: 100%;
  max-width: 500px;
  padding: 0 20px;

  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-top: 50px;
  weight: 500px;
  border-radius: 10px;
  background-color: #f0f0f0;
  margin: 20px 20px 5px 20px;
  img { 
    width: 100%;
  }
`;

const Content = styled.div`
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
`;

const FoodName = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: navy;
  text-align: center;

  span {
    color: red;
  }
`;

const Answer = styled.div`
  height: 80px;
  margin: 20px 20px 100px 20px;
  display: flex;
  
  button {
    font-size: 40px;
    font-weight: 500;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:center;
    
    span{
      font-weight: 800;
    }

  }
`;

// 강아지인지 고양이인지 선택...?
function GamePage() {
  return (
    <Page>
      <TitleWrap><img src="/image/quizbanner.png" alt="로고" /></TitleWrap>
      <Content>사진?</Content>
      <FoodName><span>'음식명'</span> 섭취 가능 여부</FoodName>
      <Answer>
        <button>O</button>
        <button><span>△</span></button>
        <button>X</button>
      </Answer>
    </Page>
  )
}

export default GamePage