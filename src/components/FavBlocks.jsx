import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { color } from "../style/colorVar";

const FavBlocks = () => {
    let navigate = useNavigate();
    let [selected, setSelected] = useState([]);
    const petURL = `url(${process.env.PUBLIC_URL}/img/favSpBlock.svg)`;
    const petActiveURL = `url(${process.env.PUBLIC_URL}/img/favSpBlockActive.svg)`;
    
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
                document.getElementById(targetId).style.background = petURL;
            }
            else {document.getElementById(targetId).style.background = "#737373"}
        } else {
            copy.push(targetId);
            if (targetId === "pet") {
                document.getElementById(targetId).style.background = petActiveURL;
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

    let [favId, setFavId] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);

    const handleClick = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        let id = e.currentTarget.id;
        console.log(id);
        id = parseInt(id);

        let copy = [...favId];
        copy[id] = `${id}active`;
        setFavId(copy);
        console.log(favId);
    }

    return (
        <>
            <Container id="favContainer" onTouchStart={(e) => handleDrag(e)}>
                <Wrap>
                    <FlexBlock>
                        <Fav1 id="1" favId={favId[1]} onClick={(e) => {handleClick(e)}} />
                        <Fav2 id="2" favId={favId[2]} onClick={(e) => {handleClick(e)}}/>
                        <Fav3 id="3" favId={favId[3]} onClick={(e) => {handleClick(e)}}/>
                        <Fav4 id="4" favId={favId[4]} onClick={(e) => {handleClick(e)}}/>
                        <Fav5 id="5" favId={favId[5]} onClick={(e) => {handleClick(e)}}/>
                        <Fav6 id="6" favId={favId[6]} onClick={(e) => {handleClick(e)}}/>
                        <Fav7 id="7" favId={favId[7]} onClick={(e) => {handleClick(e)}}/>
                        <Fav8 id="8" favId={favId[8]} onClick={(e) => {handleClick(e)}} />
                        <Fav9 id="9" favId={favId[9]} onClick={(e) => {handleClick(e)}}/>
                        <Fav10 id="10" favId={favId[10]} onClick={(e) => {handleClick(e)}}/>
                        <Fav11 id="11" favId={favId[11]} onClick={(e) => {handleClick(e)}}/>
                        <Fav12 id="12" favId={favId[12]} onClick={(e) => {handleClick(e)}}/>
                        <Fav13 id="13" favId={favId[13]} onClick={(e) => {handleClick(e)}}/>
                        <Fav14 id="14" favId={favId[14]} onClick={(e) => {handleClick(e)}}/>
                        <Fav15 id="15" favId={favId[15]} onClick={(e) => {handleClick(e)}}/>
                    </FlexBlock>
                </Wrap>
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

const Wrap = styled.div`
    position: absolute;
    width: 360px;
    height: 500px;
    margin-right: 16px;
    overflow-x: scroll;
    overflow-y: hidden;
`

const FlexBlock = styled.div`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
`

const Fav1 = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 180px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav${props => props.favId || "1"}.png) no-repeat center center;
    background-size: contain;
`

const Fav2 = styled.div`
    position: relative;
    top: 16px;
    left: 0;
    width: 180px;
    height: 94px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav2.png) no-repeat center center;
    background-size: contain;
`

const Fav3 = styled.div`
    position: relative;
    top: 32px;
    left: 0;
    width: 180px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav3.png) no-repeat center center;
    background-size: contain;
`

const Fav4 = styled.div`
    position: relative;
    top: -454px;
    left: 196px;
    width: 305px;
    height: 290px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav${props => props.favId || "4"}.png) no-repeat center center;
    background-size: contain;
`

const Fav5 = styled.div`
    position: relative;
    top: -436px;
    left: 115px;
    width: 164px;
    height: 65px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav5.png) no-repeat center center;
    background-size: contain;
`

const Fav6 = styled.div`
    position: relative;
    top: -422px;
    left: 195px;
    width: 83px;
    height: 100px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav6.png) no-repeat center center;
    background-size: contain;
`

const Fav7 = styled.div`
    position: relative;
    top: -602px;
    left: 295px;
    width: 206px;
    height: 182px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav7.png) no-repeat center center;
    background-size: contain;
`

const Fav8 = styled.div`
    position: relative;
    top: -1090px;
    left: 516px;
    width: 180px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav8.png) no-repeat center center;
    background-size: contain;
`

const Fav9 = styled.div`
    position: relative;
    top: -1072px;
    left: 516px;
    width: 280px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav${props => props.favId || "9"}.png) no-repeat center center;
    background-size: contain;
`

const Fav10 = styled.div`
    position: relative;
    top: -1056px;
    left: 516px;
    width: 280px;
    height: 94px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav10.png) no-repeat center center;
    background-size: contain;
`

const Fav11 = styled.div`
    position: relative;
    top: -1544px;
    left: 710px;
    width: 180px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav11.png) no-repeat center center;
    background-size: contain;
`

const Fav12 = styled.div`
    position: relative;
    top: -1726px;
    left: 824px;
    width: 164px;
    height: 64px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav12.png) no-repeat center center;
    background-size: contain;
`

const Fav13 = styled.div`
    position: relative;
    top: -1708px;
    left: 904px;
    width: 82px;
    height: 100px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav13.png) no-repeat center center;
    background-size: contain;
`

const Fav14 = styled.div`
    position: relative;
    top: -1888px;
    left: 1004px;
    width: 108px;
    height: 180px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav14.png) no-repeat center center;
    background-size: contain;
`

const Fav15 = styled.div`
    position: relative;
    top: -1870px;
    left: 804px;
    width: 304px;
    height: 290px;
    object-fit: contain;
    background: url(${process.env.PUBLIC_URL}/img/fav15.png) no-repeat center center;
    background-size: contain;
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
    position: absolute;
    width: 1300px;
    height: 500px;
    text-align: left;
    margin-top: 34px;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: ${color.mainColor};
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 20px;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`

export default FavBlocks