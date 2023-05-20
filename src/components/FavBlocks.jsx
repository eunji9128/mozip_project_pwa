import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FavBlocks = () => {
    let navigate = useNavigate();
    let [selected, setSelected] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selected);
        // storage 저장하는 코드 입력
        navigate('/profile-set');
    };

    const handleSelect = (e) => {
        e.preventDefault();
        const targetId = e.target.closest("[id]").id;
        let copy = [...selected];
        const isExist = copy.find((elem)=>{ if (elem == targetId) return true; });

        if (isExist) {
            copy = copy.filter((elem) => { if (elem !== targetId) return true; })
            if (targetId === "pet") {
                document.getElementById(targetId).style.background = "url(/favSpBlock.svg)"
            }
            else {document.getElementById(targetId).style.background = "#737373"}
        } else {
            copy.push(targetId);
            if (targetId === "pet") {
                document.getElementById(targetId).style.background = "url(/favSpBlockActive.svg)"
            }
            else {document.getElementById(targetId).style.background = "#d4d4d4"}
        }
        setSelected(copy);
        console.log(selected, targetId);
    }

    const handleDrag = (e) => {
        e.preventDefault();
        console.log(e.touches[0].clientX);
    }

    return (
        <>
            <Container id="favContainer" onTouchStart={(e) => handleDrag(e)}>
                <FlexBlock justifyContent={"start"}>
                    <Block>
                        <FlexBlock
                            width={"180px"}
                            height={"180px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                            id="uiux"
                            onClick={(e) => handleSelect(e)}
                        >
                            <Content>
                                UX UI<br />DESIGN
                            </Content>
                        </FlexBlock>
                        <FlexBlock
                            width={"180px"}
                            height={"94px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                            id="travel"
                            onClick={(e) => handleSelect(e)}
                        >
                            <Content>
                                TRAVEL
                            </Content>
                        </FlexBlock>
                    </Block>
                    <Block>
                        <FlexBlock
                            width={"304px"}
                            height={"290px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                            id="research"
                            onClick={(e) => handleSelect(e)}
                        >
                            <Content>
                                UX<br />RESEARCH
                            </Content>
                        </FlexBlock>
                    </Block>
                </FlexBlock>
                <FlexBlock width="548px">
                    <FlexBlock
                        width={"180px"}
                        height={"180px"}
                        bgColor={"url(/favSpBlock.svg)"}
                        margin={"0 16px 16px 0"}
                        id="pet"
                        onClick={(e) => handleSelect(e)}
                    >
                        <Content>
                            <br />PET
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"164px"}
                        height={"65px"}
                        bgColor={"#737373"}
                        margin={"0 16px 130px -80px"}
                        id="startup"
                        onClick={(e) => handleSelect(e)}
                    >
                        <Content>
                            START-UP
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"84px"}
                        height={"100px"}
                        bgColor={"#737373"}
                        margin={"0 16px -62px -100px"}
                        id="bx"
                        onClick={(e) => handleSelect(e)}
                    >
                        <Content>
                            BX
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"206px"}
                        height={"182px"}
                        bgColor={"#737373"}
                        margin={"0 16px 16px 0"}
                        id="figma"
                        onClick={(e) => handleSelect(e)}
                    >
                        <Content>
                            FIGMA
                        </Content>
                    </FlexBlock>
                </FlexBlock>
            </Container>
            <StyledBtn 
                onClick={(e) => handleSubmit(e)}
                disabled={selected.length > 0 ? false : true}    
            >선택완료</StyledBtn>
        </>
    )
};

const Block = styled.div`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    background: ${props => props.bgColor || ''};
    border-radius: 20px;
`

const FlexBlock = styled(Block)`
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "start"};
`

const Content = styled.p`
    padding: 14px;
    color: #000000;
    font-size 20px;
    font-family: "yapari";
    font-weight: bold;
`

const Container = styled.div`
    // width: 548px;
    width: 100vw;
    padding: 16px;
    text-align: left;
    margin-top: 34px;
    overflow-x: scroll;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: #d4d4d4;
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 0;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`

export default FavBlocks