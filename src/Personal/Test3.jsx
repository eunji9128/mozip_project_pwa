import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../style/colorVar";
import { useState } from "react";

const Test3 = () => {
    const navigate = useNavigate();
    let [start, setStart] = useState(false);
    let [end, setEnd] = useState(false);
    let [step, setStep] = useState(1);
    let [total, setTotal] = useState(0);

    const testData = [
        {},
        {
            id: 1,
            question: <span>요즘따라 의욕이 없어 보이는 <br />옆자리 후배.. 괜히 <br />자꾸 신경 쓰인다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'혹시 요즘 무슨 고민 있어요?'<br />직접 물어본다.</span>,
                <span>'말 걸면 부담스럽겠지..'<br />위로의 눈빛을 보낸다.</span>,
            ],
        },
        {
            id: 2,
            question: <span>좋은 아이디어가 나오지 않아<br />침묵이 길어지는 회의. 이 때 한 구성원이<br />엉뚱한 아이디어를 낸다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'조용히 있는 것보단 낫지..'<br />실현 가능성 없지만 뭐라도 말해줘서 고맙다.</span>,
                <span>'가만히 있으면 반이라도 갈텐데..'<br />안 그래도 막막한데 더 심란하다.</span>,
            ],
        },
        {
            id: 3,
            question: <span>내가 프로젝트의 리더가 되었다.<br />리더인 내가 구성원에게<br />더 집중해서 조언하는 것은?</span>,
            buttons: 2,
            answer: [
                <span>업무 전 방향성을 명확히!<br />목표 설정에 집중</span>,
                <span>업무 후 검토를 꼼꼼히!<br />피드백에 집중</span>,
            ],
        },
        {
            id: 4,
            question: <span>협업 부서에서 자꾸 일을 이상하게<br />넘겨준다. 우리 부서에서 꼭 하나씩<br />추가 작업을 하게 되는데.. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'앞으로는 이렇게 해주세요.'<br />협업 부서에 내가 원하는 바를 전달한다.</span>,
                <span>'일이 바빠서 그랬겠지.. 참자'<br />불편하지만 내가 참는다.</span>,
            ],
        },
        {
            id: 5,
            question: <span>일보다 어려운 인간 관계.<br />그래도 이건 내가 잘한다!<br />당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'내 생각엔 ㅇㅇ님이 ㅇㅇ님한테..'<br />팀원 사이의 갈등을 중재한다.</span>,
                <span>'부서장님 제가 보기엔..'<br />상사한테 나의 솔직한 의견을 전달한다.</span>,
            ],
        },
        {
            id: 6,
            question: <span>순조롭게 진행되는 것 같던 프로젝트.<br />하지만 어느 순간부터 방향이<br />조금씩 틀어지는 듯 하다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'어느 부분이 잘못된 거지?'<br />발빠르게 해결 방법을 모색한다.</span>,
                <span>'계획대로 진행 중이니 잘 끝날 거야.'<br />일단 상황을 지켜본다.</span>,
            ],
        },
        {
            id: 7,
            question: <span>후배가 노하우 없이 주먹구구로<br />일하는 것 같다. 저 방식대로 하면<br />오래 걸릴 게 뻔한데.. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'말해주면 조금은 도움될 지도 몰라.'<br />개인적으로 불러서 알려준다.</span>,
                <span>'요즘 이런 말하면 꼰대라던데..'<br />알아서 하게끔 둔다.</span>,
            ],
        },
        {
            id: 8,
            question: <span>상사가 요즘 핫한 마케팅 방법을<br />써보자고 한다. 화제성은 있겠지만 우리<br />회사랑은 안 어울릴 듯 한데.. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'이건 이런 쪽이 안 맞아서요..'<br />다른 대안을 제시한다.</span>,
                <span>'말해봤자 뭐해. 그냥 시키는대로 해야지.'<br />지시를 따른다.</span>,
            ],
        },
        {
            id: 9,
            question: <span>업무에 있어 내가 더 자신있는 것은..</span>,
            buttons: 2,
            answer: [
                <span>남다른 대처능력!<br />프로젝트가 막혔을 때 발빠르게 해결.</span>,
                <span>남다른 실행력!<br />아이디어만 가지고도 일사천리 진행.</span>,
            ],
        },
    ];

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/personal');
    }

    const handleIncrease = function(e) {
        e.preventDefault();
        let _total = total;
        _total++;
        setTotal(_total);
        console.log('total: ', total);
        if (step === testData.length - 1) {
            console.log('done');
            setEnd(true);
            return
        }
        let copy = step;
        copy = copy + 1;
        setStep(copy);
        console.log(step);
    };

    const handleDecrease = function(e) {
        e.preventDefault();
        let _total = total;
        _total--;
        setTotal(_total);
        console.log('total: ', total);
        if (step === testData.length - 1) {
            console.log('done');
            setEnd(true);
            return
        }
        let copy = step;
        copy = copy + 1;
        setStep(copy);
        console.log(step);
    };

    return (
        <Container>
            {
                end ?
                <h1>{total>0 ? "leader" : "follower"}</h1> :
                <>
                    <Header>
                        <span
                            className="material-symbols-outlined"
                            onClick={(e) => { handleNavigate(e) }}
                        >
                            chevron_left
                        </span>
                        <HeaderContent>
                            <h3>리더/팔로워 유형 테스트</h3>
                            <p>저기.. 누가 팀장 하실래요?</p>
                        </HeaderContent>
                    </Header>
                    {
                        !start ?
                            <TestLanding onClick={(e) => { setStart(true) }} /> :
                            <>
                                <TitleBox>
                                    {testData[step].question}
                                </TitleBox>
                                <Content>
                                    <Exam id={testData[step].id} />
                                    {
                                        testData[step].buttons === 5 ?
                                            <Btn5Group>
                                                {/* <Btn data-id="1" onClick={(e) => { handleClick(e) }}>①</Btn>
                                                <Btn data-id="2" onClick={(e) => { handleClick(e) }}>②</Btn>
                                                <Btn data-id="3" onClick={(e) => { handleClick(e) }}>③</Btn>
                                                <Btn data-id="4" onClick={(e) => { handleClick(e) }}>④</Btn>
                                                <Btn data-id="5" onClick={(e) => { handleClick(e) }}>⑤</Btn> */}
                                            </Btn5Group> :
                                            <Btn2Group>
                                                <Btn width="280px" fontSize="14px" onClick={(e) => { handleIncrease(e) }}>{testData[step].answer[0]}</Btn>
                                                <Btn width="280px" fontSize="14px" onClick={(e) => { handleDecrease(e) }}>{testData[step].answer[1]}</Btn>
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
    background-image: url(${process.env.PUBLIC_URL}/img/leader_test_landing.svg);
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
    background: url(${process.env.PUBLIC_URL}/img/leader_test${props => props.id || "1"}.svg);
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
    vertical-align: middle;
`

const Btn = styled.button`
    width: ${props => props.width || "52px"};
    height: 52px;
    margin: 8px 0;
    background: ${color.gray800};
    border: 1px solid ${color.gray600};
    border-radius: 10px;
    color: ${color.gray50};
    font-size: ${props => props.fontSize || "20px"};
`

export default Test3