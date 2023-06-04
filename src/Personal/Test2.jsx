import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../style/colorVar";
import { useState } from "react";
import Gameover from "./Gameover";

const Test2 = () => {
    const navigate = useNavigate();
    let [start, setStart] = useState(false);
    let [end, setEnd] = useState(false);
    let [step, setStep] = useState(1);

    const examData = [
        {},
        {
            id: 1,
            question: <span>다음 중 서체의 포맷이 <span id='point'>아닌</span> 것은?</span>,
            buttons: 5,
            answer: 4,
        },
        {
            id: 2,
            question: <span>다음 중 서체와 이름의 연결이 <br /><span id='point'>잘못된</span> 것은?</span>,
            buttons: 5,
            answer: 5,
        },
        {
            id: 3,
            question: <span>다음 설명 중 올바르지 <br /><span id='point'>않은</span> 것은?</span>,
            buttons: 5,
            answer: 2,
        },
        {
            id: 4,
            question: <span>다음 보기에서 <span id='point'>돔보</span>의 뜻으로 <br />가장 적절한 것을 고르시오.</span>,
            buttons: 5,
            answer: 3,
        },
        {
            id: 5,
            question: <span>다음 중 X-height의 높이가 <br />가장 <span id='point'>높은</span> 것을 고르시오.</span>,
            buttons: 2,
            answer: 2,
        },
        {
            id: 6,
            question: <span>다음 중 Descender의 높이가 <br />가장 <span id='point'>높은</span> 것을 고르시오.</span>,
            buttons: 2,
            answer: 1,
        },
        {
            id: 7,
            question: <span>아래는 자간 가이드이다. <br />이들 중 커닝 조절이 <br />가장 <span id='point'>잘 된</span> 것을 고르시오.</span>,
            buttons: 2,
            answer: 2,
        },
        {
            id: 8,
            question: <span>다음 색상 배치에서 좌, 우 항목을 <br />McDonalds와 롯데리아로 분류한 것으로 <br /><span id='point'>올바른</span> 것을 고르시오.</span>,
            buttons: 2,
            answer: 1,
        },
        {
            id: 9,
            question: <span>다음 중 G사가 CI에 빨강, 노랑, 초록, 파랑의 <br />네 가지 색상을 차용하여 나타내고자 <br />하는 BI로 가장 <span id='point'>알맞은</span> 것은?</span>,
            buttons: 2,
            answer: 2,
        },
    ];

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/personal');
    }

    const handleClick = (e) => {
        e.preventDefault();
        const userAnswer = e.target.dataset.id;
        console.log(e.target.dataset);
        if (parseInt(userAnswer) === examData[step].answer) {
            if (step === examData.length - 1) {
                console.log('done');
                return
            }
            let copy = step;
            copy = copy + 1;
            setStep(copy);
            console.log(step);
        } else {
            setEnd(true);
        }
    }

    return (
        <Container>
            {
                end ?
                    <Gameover score={step-1} id="2"/> :
                    <>
                        <Header>
                            <span
                                className="material-symbols-outlined"
                                onClick={(e) => { handleNavigate(e) }}
                            >
                                chevron_left
                            </span>
                            <HeaderContent>
                                <h3>디자인 모의고사</h3>
                                <p>디자인에 진심이라면</p>
                            </HeaderContent>
                        </Header>
                        {
                            !start ?
                            <TestLanding onClick={(e) => {setStart(true)}}/> :
                            <>
                                <TitleBox>
                                    {examData[step].question}
                                </TitleBox>
                                <Content>
                                    <Exam id={examData[step].id} />
                                    {
                                        examData[step].buttons === 5 ?
                                            <Btn5Group>
                                                <Btn data-id="1" onClick={(e) => { handleClick(e) }}>①</Btn>
                                                <Btn data-id="2" onClick={(e) => { handleClick(e) }}>②</Btn>
                                                <Btn data-id="3" onClick={(e) => { handleClick(e) }}>③</Btn>
                                                <Btn data-id="4" onClick={(e) => { handleClick(e) }}>④</Btn>
                                                <Btn data-id="5" onClick={(e) => { handleClick(e) }}>⑤</Btn>
                                            </Btn5Group> :
                                            <Btn2Group>
                                                <Btn width="280px" data-id="1" onClick={(e) => { handleClick(e) }}>①</Btn>
                                                <Btn width="280px" data-id="2" onClick={(e) => { handleClick(e) }}>②</Btn>
                                            </Btn2Group>
                                    }
                                </Content>
                            </>
                        }
                    </>
            }
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`

const Header = styled.div`
    width: 100%;
    height: 50px;
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

const TestLanding = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/img/design_exam_landing.svg);
`

const TitleBox = styled.div`
    width: 100%;
    height: 120px;
    padding: 32px 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        font-size: 18px;
        text-align: center;
    }

    #point {
        color: ${color.mainColor};
        text-decoration: underline;
    }
`

const Content = styled.div`
    width: 100%;
`

const Exam = styled.div`
    width: 360px;
    height: 230px;
    background: url(${process.env.PUBLIC_URL}/img/exam${props => props.id || "1"}.svg);
`

const Btn5Group = styled.div`
    margin: 40px 26px;
    display: flex;
    justify-content: space-between;
`

const Btn2Group = styled.div`
    margin: 40px 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Btn = styled.button`
    width: ${props => props.width || "52px"};
    height: 52px;
    margin: 8px 0;
    background: ${color.gray800};
    border: 1px solid ${color.gray600};
    border-radius: 10px;
    color: ${color.gray50};
    font-size: 20px;
`

export default Test2