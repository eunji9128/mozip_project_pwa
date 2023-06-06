import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../style/colorVar";
import { useState } from "react";
import TestBadge from "./Badges";
import { badgeData } from "./badgeData";

const Test4 = () => {
    const navigate = useNavigate();
    let [start, setStart] = useState(false);
    let [finish, setFinish] = useState(false);
    let [step, setStep] = useState(1);
    let [total, setTotal] = useState(0);
    const result = [4, 5, 6];

    const testData = [
        {},
        {
            id: 1,
            question: <span>오늘은 불타는 금요일<br />퇴근 후 집에 가려는 당신에게 동료 직원이<br />술 한 잔 하자 한다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'침대에 누워서 넷플릭스 시리즈 봐야되는데..'<br />적당히 둘러댄 후 집에 간다.</span>,
                <span>'마침 그러려고 했는데..!'<br />신나서 2차까지 달린다.</span>,
            ],
        },
        {
            id: 2,
            question: <span>동료 직원의 실수로 회사 팀 프로젝트가<br />무산되었다. 동료는 죄책감에 시달려 하루종일<br />우울해한다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'이미 지나간 일이야. 다음부터 그럴땐..'<br />현실적인 조언을 해준다.</span>,
                <span>'힘들지? 너무 깊게 생각하지 말고 오늘은 쉬어'<br />공감을 해주며 위로한다.</span>,
            ],
        },
        {
            id: 3,
            question: <span>우연히 동료 직원의 키보드를 본 당신.<br />그의 키보드가 마음에 쏙 들지만 그와<br />한번도 대화해 본 적이 없다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'헉! 이거 신상 키보드인가요? 대박!'<br />호기심을 주체할 수 없어 바로 말을 건다.</span>,
                <span>'.....'<br />별로 안 친하니까.. 다음에 물어보지 뭐..</span>,
            ],
        },
        {
            id: 4,
            question: <span>당신이 업무에 적응한 지 얼마 되지 않아<br />회사에서 새로운 업무 시스템을<br />도입하려고 한다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'이미 사용하고 있는 시스템이<br />효율적이니 변경할 필요가 없어.'</span>,
                <span>'새로운 시스템 도입으로<br />업무 효율성을 더 높일 수 있을 것 같아!'</span>,
            ],
        },
        {
            id: 5,
            question: <span>회사에서 조직의 발전과 단합을 위해<br />제주도 워크샵을 개최한다고 한다.<br />당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'제일 바쁜 시기인데.. 워크샵이라니..?'<br />현재 업무에 집중하자.</span>,
                <span>'오예 제주도? 맛집 검색 ㄱㄱ'<br />한껏 들뜬 기분으로 기대한다.</span>,
            ],
        },
        {
            id: 6,
            question: <span>프로젝트 기한이 빠르게<br />다가오고 있는데 동료가 추가 기능을<br />제안했다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'현재 진행 중인 일정을 유지하는 게 중요해'<br />추가 기능은 나중에 생각하자.</span>,
                <span>'프로젝트에 가치를 더해줄 수 있을지도 몰라'<br />일단 한 번 고려해본다.</span>,
            ],
        },
        {
            id: 7,
            question: <span>회사에서 새로운<br />근무 제도(재택 근무)를 시행하려고 한다.<br />당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'기존의 근무 제도가 이미<br />잘 맞춰져 있어 변경할 필요가 없어.'</span>,
                <span>'새로운 근무 제도가 업무 효율과<br />워라밸에 도움이 될 수 있을 것 같아'</span>,
            ],
        },
        {
            id: 8,
            question: <span>당신은 어제도 일 때문에 야근을 했다.<br />회사에서 새로운 프로젝트를 맡아달라는<br />부서장의 요청이 있었다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'아.. 죄송하지만.. 지금 진행 중인<br />프로젝트가 있어 불가능할 것 같습니다.'</span>,
                <span>'부서장님께서 믿고 맡겨만 주신다면<br />도전해보고 싶습니다!'</span>,
            ],
        },
        {
            id: 9,
            question: <span>사소한 오해로 인해 팀원이<br />나에게 감정을 갖고 무례한 행동을<br />했다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'ㅇㅇ님, 그건 오해에요.'<br />내 감정을 그대로 드러내지 않고 말로 푼다.</span>,
                <span>'네? 잘 알지도 못하시면서 왜 그러세요?'<br />내 감정을 드러내면서 싸운다.</span>,
            ],
        },
        {
            id: 10,
            question: <span>근태가 좋지 못한 입사 동기가<br />나에게 다가와 어떻게 성과를<br />높게 받을 수 있는지 물었다. 당신의 선택은?</span>,
            buttons: 2,
            answer: [
                <span>'적어도 나만큼은 노력해야지'<br />입사 동기의 근태를 지적한다.</span>,
                <span>'글쎄.. 아마 이번에 내가 운이 좋았나봐'<br />돌려서 좋게 이야기한다.</span>,
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
            setFinish(true);
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
            setFinish(true);
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
                finish ?
                <TestBadge badgeData={badgeData[result[Math.abs(total)%3]]} /> :
                <>
                    <Header>
                        <span
                            className="material-symbols-outlined"
                            onClick={(e) => { handleNavigate(e) }}
                        >
                            chevron_left
                        </span>
                        <HeaderContent>
                            <h3>꼰대 유형 테스트</h3>
                            <p>라떼는 말이야..</p>
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
    background-image: url(${process.env.PUBLIC_URL}/img/kkondae_test_landing.svg);
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
    background: url(${process.env.PUBLIC_URL}/img/kkondae${props => props.id || "1"}.svg);
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

export default Test4