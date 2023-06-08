import { useState } from "react"
import { Outlet, useNavigate } from "react-router"
import styled from "styled-components"
import { color } from "../style/colorVar.js";
import Navbar from "./Navbar.jsx";
import axios from "axios";

const Main = () => {
    const navigate = useNavigate();
    let [active1, setActive1] = useState([color.gray50, 'underline']);
    let [active2, setActive2] = useState(['', '']);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        switch (e.target.id) {
            case "recommend":
                setActive1(['', '']);
                setActive2([color.gray50, 'underline']);
                break;
            default:
                setActive1([color.gray50, 'underline']);
                setActive2(['', '']);
                break;
        }
        navigate(`/home/${e.target.id}`);
    }

    // axios.get("http://ec2-52-79-242-116.ap-northeast-2.compute.amazonaws.com:8000/api/topics/", {}, {
    //     withCredentials: true,
    // })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     }
    // );

    // axios.get("http://ec2-52-79-242-116.ap-northeast-2.compute.amazonaws.com:8000/api/projects/", {}, {
    //     withCredentials: true,
    // })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     }
    // );
    

    return (
        <Container>
            <Header>
                <SmallLogo />
                <TabGroup>
                    <TabBtn id="" color={active1[0]} textDecoration={active1[1]} onClick={(e) => handleClick(e)}>홈</TabBtn>
                    <TabBtn id="recommend" color={active2[0]} textDecoration={active2[1]} onClick={(e) => handleClick(e)}>추천</TabBtn>
                </TabGroup>
            </Header>
            <Outlet />
            <div style={{ width: "100%", height: "60px" }}></div>
            <Navbar />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 8px;
`

const Header = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background: ${color.gray900};
`

const SmallLogo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${process.env.PUBLIC_URL}/img/mozip_logo_small.svg);
`

const TabGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    // margin-bottom: 16px;
`

const TabBtn = styled.button`
    background: none;
    font-size: 18px;
    font-weight: bold;
    border: none;
    text-decoration: ${props => props.textDecoration || "none"};
    color: ${props => props.color || color.gray500};
`

export default Main