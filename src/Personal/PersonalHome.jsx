import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { Outlet } from "react-router";

const PersonalHome = () => {
    return (
        <Container>
            <Outlet />
            <Navbar />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 16px;    
`

export default PersonalHome