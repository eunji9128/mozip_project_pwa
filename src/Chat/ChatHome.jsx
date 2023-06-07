import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { Outlet } from "react-router";

const ChatHome = () => {
  return (
    <Container>
      <Outlet />
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default ChatHome;
