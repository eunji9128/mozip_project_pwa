import styled from "styled-components";
import { color } from "../style/colorVar";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { colorData } from "./colorData";
import { useNavigate } from "react-router-dom";
import TestBadge from "./Badges";
import { badgeData } from "./badgeData";

const Test5 = () => {
  const navigate = useNavigate();
  let [finish, setFinish] = useState(false);
  let [start, setStart] = useState(false);
  let [bingoText, setBingoText] = useState(" ");
  let [progressVal, setProgressVal] = useState(0);

  const [grid, setGrid] = useState([
    ["Ctrl+S를\n습관적으로\n누른다", false],
    ["처음이\n제일\n낫네요", false],
    ["중앙정렬\n안 되어 있음\n개빡침", false],
    ["가끔\n분노조절\n장애가 온다", false],
    ["내일보자\n(X)\n좀 있다봐\n(O)", false],
    ["사진 보정\n해달라는\n연락 옴", false],
    ["길거리 간판\n디자인\n점수 매김", false],
    ["외주\n받아봄", false],
    ["본체 하나에\n모니터\n2개 이상", false],
    ["5일 이상\n밤새본 적\n많음", false],
    ["즐겨찾기에\n핀터레스트\n필수", false],
    ["옛날로\n돌아가면\n디자인 안함", false],
    ["손목 터널\n증후군이\n생겼다", false],
    ["카톡이\n오면\n경계한다", false],
    ["노트북\n무게\n2KG이상", false],
    ["올빼미인간", false],
    ["파일주신거\n확인해\n봤는데...", false],
    ["그리드\n=\n마음의 평화", false],
    ["화려하지만\n심플하게\n부탁드려요", false],
    ["꿈에서\n작업한 적\n있다", false],
    ["단 몇 px도\n용납할 수\n없다", false],
    ["좋아하는\n폰트있다", false],
    ["책상 위에\n항상\n커피가 있다", false],
    ["뭐 해먹고\n사냐는 말\n많이 들음", false],
    ["싼 가격에,\n높은 퀄리티\n빠르게\n부탁드려요", false],
  ]);

  useEffect(() => {
    // calc bingo
    let bingo_count = 0;
    for (let i = 0; i < 5; i++) {
      let row_check_count = 0;
      for (let j = 0; j < 5; j++) {
        if (grid[i * 5 + j][1]) {
          row_check_count++;
        }
      }
      if (row_check_count === 5) {
        bingo_count++;
      }

      let col_check_count = 0;
      for (let j = 0; j < 5; j++) {
        if (grid[j * 5 + i][1]) {
          col_check_count++;
        }
      }
      if (col_check_count === 5) {
        bingo_count++;
      }
    }

    let left_diagonal_check_count = 0;
    let right_diagonal_check_count = 0;
    for (let i = 0; i < 5; i++) {
      if (grid[i * 5 + i][1]) {
        left_diagonal_check_count++;
      }
      if (grid[i * 5 + (4 - i)][1]) {
        right_diagonal_check_count++;
      }
    }
    if (left_diagonal_check_count === 5) {
      bingo_count++;
    }
    if (right_diagonal_check_count === 5) {
      bingo_count++;
    }

    if (bingo_count == 0) {
      setBingoText(" ");
    } else {
      setBingoText("" + bingo_count + " BINGO !");
    }

    if (bingo_count >= 3) {
      setFinish(true);
    }
  }, [grid]);

  const handleTestClick = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    let updateGrid = [...grid];
    updateGrid[i][1] = !updateGrid[i][1];
    setGrid(updateGrid);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/personal");
  };

  useEffect(() => {
    if (start && progressVal < 30) {
      let a = setTimeout(() => {
        setProgressVal(progressVal + 1);
      }, 1000);
    }
  });

  return (
    <Container>
      {
        finish ?
        <TestBadge badgeData={badgeData[7]} /> : 
        (
          <>
            <Header>
              <span
                className="material-symbols-outlined"
                onClick={(e) => {
                  handleNavigate(e);
                }}
              >
                chevron_left
              </span>
              <HeaderContent>
                <h3>디자이너 빙고 테스트</h3>
                <p>나만 이런거 아니잖아..</p>
              </HeaderContent>
            </Header>
            {!start ? (
              <>
                <BingoText>
                  <h3>{bingoText}</h3>
                </BingoText>
                <TestFrame
                  onClick={() => {
                    setStart(true);
                  }}
                >
                  <TestLanding />
                </TestFrame>
              </>
            ) : (
              <>
                <BingoText>
                  <h3>{bingoText}</h3>
                </BingoText>
                <TestFrame
                  onClick={() => {
                    setStart(true);
                  }}
                >
                  <BingoGrid row={5} column={5}>
                    {grid.map((data, i) => {
                      return (
                        <div
                          key={i}
                          id={i}
                          className="colorGrid"
                          onClick={(e) => handleTestClick(e, i)}
                          style={
                            data[1] ? { backgroundColor: color.mainColor } : {}
                          }
                        >
                          <p>{data[0]}</p>
                        </div>
                      );
                    })}
                  </BingoGrid>
                </TestFrame>
              </>
            )}
          </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TestFrame = styled.div`
  width: 100%;
  height: 720px;
  margin-top: 12px;
  padding-top: 74px;
  background: url(${process.env.PUBLIC_URL}/img/bingo_test/frame.svg) no-repeat
    top center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TestLanding = styled.div`
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/img/bingo_test/main.svg) no-repeat
    top center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;

  span {
    font-size: 30px;
    margin-right: 8px;
  }
`;

const HeaderContent = styled.div`
  h3 {
    font-size: 16px;
    color: ${color.gray50};
  }

  p {
    font-size: 12px;
    color: ${color.gray400};
  }
`;

const BingoText = styled.div`
  margin-top: 32px;
  margin-left: 32px;

  h3 {
    font-family: "yapari";
    font-size: 16px;
    font-weight: bold;
    color: ${color.mainColor};
    white-space: pre-wrap;
  }
`;

const BingoGrid = styled.div`
  width: 296px;
  height: 296px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.row}, 1fr);
  grid-template-rows: repeat(${(props) => props.column}, 1fr);

  div {
    background-color: ${(props) => props.color || color.gray50};
    border-radius: 5px;
    margin: 4.5px;
    display: flex;
    align-items: center;
  }

  p {
    width: 100%;
    font-size: 10px;
    font-family: "SUIT";
    font-weight: bold;
    text-align: center;
    color: ${color.gray900};
    white-space: pre-wrap;
  }
`;

export default Test5;
