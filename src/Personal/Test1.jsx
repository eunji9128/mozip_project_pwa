import styled from "styled-components"
import { color } from "../style/colorVar"
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { colorData } from "./colorData";
import { useNavigate } from "react-router-dom";

const Test1 = () => {
    const navigate = useNavigate();
    let [step, setStep] = useState(0);
    let [end, setEnd] = useState(false);
    let [start, setStart] = useState(false);
    let [progressVal, setProgressVal] = useState(0);
    
    let grid = new Array(colorData[step].row*colorData[step].column).fill(0);
    
    useEffect(() => {
        if (start && !end) {
            if (step !== 0) {
                for (let i=0; i<(colorData[step-1].row * colorData[step-1].column); i++) {
                    document.getElementsByClassName('colorGrid')[i].style.backgroundColor = colorData[step].mainColor;
                }
            }
            document.getElementById(colorData[step].pickId.toString()).style.backgroundColor = colorData[step].pickColor;
        }
    },[step])

    const handleTestClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (parseInt(e.target.id) === colorData[step].pickId) {
            if (step >= colorData.length-1) {
                setEnd(true); // 뱃지획득 스텝으로 변경 예정
                return
            }
            let copy = step;
            copy = copy + 1;
            setStep(copy);
        } else {
            setEnd(true);
            console.log('end: ', end);
        }
        console.log(step);
    }

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/personal');
    }

    useEffect(() => {
        if (start && progressVal < 30) {
            let a = setTimeout(() => {setProgressVal(progressVal + 1)}, 1000);
        }
    })

    return (
        <Container>
            {
                end || (progressVal == 30) ?
                <>
                    <Container>
                        <Fail />
                        <OverBtn>{true ? "▶ " : null}TRY AGAIN</OverBtn>
                        <OverBtn>EXIT TEST</OverBtn>
                    </Container>
                </>
                :
                <>
                    <Header>
                        <span 
                            className="material-symbols-outlined"
                            onClick={(e) => {handleNavigate(e)}}
                        >
                            chevron_left
                        </span>
                        <HeaderContent>
                            <h3>절대 색감 테스트</h3>
                            <p>제한 시간 안에 색이 다른 하나의 사각형을 클릭해 주세요.</p>
                        </HeaderContent>
                    </Header>
                    {
                        !start ?
                        <TestLanding onClick={()=>{setStart(true)}}/> :
                        <>
                            <ProgressBar>
                                <progress max="30" value={progressVal}></progress>
                                <p>{progressVal}</p>
                            </ProgressBar>
                            <TestContents>
                                <div>
                                    <p>단계 {step+1}/{colorData.length}</p>
                                    <ColorGrid row={colorData[step].row} column={colorData[step].column} color={colorData[step].mainColor}>
                                        {
                                            grid.map((data, i) => {return <div key={i} id={i} className="colorGrid" onClick={(e) => handleTestClick(e)}/>})
                                        }
                                    </ColorGrid>
                                </div>
                            </TestContents>
                        </>
                    }
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const TestLanding = styled.div`
    width: 100%;
    height: 723px;
    background: url(${process.env.PUBLIC_URL}/img/color_test_landing.svg);
`

const Header = styled.div`
    width: 100%;
    display: flex;

    span {
        font-size: 30px;
        margin-right: 8px;
        
    }
`

const HeaderContent = styled.div`
    h3 {
        font-size: 16px;
        color: ${color.gray50};
    }

    p {
        font-size: 12px;
        color: ${color.gray400};
    }
`

const ProgressBar = styled.div`
    width: 100%;
    margin: 16px 0;
    display: flex;
    align-items: center;

    progress {
        width: 100%;
        -webkit-appearance: none;
        border-radius: 10px;
    }

    progress::-webkit-progress-bar {
        border-radius: 10px;
    }
      
    ::-webkit-progress-inner-element {
        background-color: ${color.gray600};   
    }

    progress::-webkit-progress-value {
        background-color: ${color.mainColor};
        border-radius: 10px;
    }

    p {
        font-size: 16px;
        margin: 0 8px;
        width: 16px;
    }
`

const TestContents = styled.div`
    width: 328px;
    margin: auto;
    margin-top: 60px;
    padding: auto;
    color: ${color.gray400};
    
    div {
        margin: auto;
    }
`

const ColorGrid = styled.div`
    width: 328px;
    height: 328px;
    display: grid;
    grid-template-columns: repeat(${props => props.row || 2}, 1fr);
    grid-template-rows: repeat(${props => props.column || 2}, 1fr);
    background-color: ${color.gray700};
    border-radius: 10px;
    padding: 8px;

    div {
        background-color: ${props => props.color || '#ffffff'};
        border-radius: 10px;
        margin: 6px;
    }
`

const Fail = styled.div`
    width: 225px;
    height: 225px;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 40px;
    background: url(${process.env.PUBLIC_URL}/img/gameover.svg);
`

const OverBtn = styled.button`
    width: 100%;
    margin: auto;
    background: none;
    border: none;
    color: ${color.mainColor};
    font-family: "yapari";
    font-size: 16px;
    margin-top: 40px;
`

export default Test1