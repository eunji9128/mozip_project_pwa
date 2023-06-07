import styled from "styled-components";
import { color } from "../style/colorVar";
import React from "react";

const ChatBlock = ({ profile_id, name, msg, time }) => {
  return (
    <ChatContainer>
      <Profile profile_id={profile_id} />
      <ChatText>
        <h2>{name}</h2>
        <p>{msg}</p>
      </ChatText>
      <ChatTime>
        <p>{time}</p>
      </ChatTime>
    </ChatContainer>
  );
};

export const ChatList = () => {
  return (
    <Container>
      <Header>
        <span>채팅</span>
        <div className="material-symbols-outlined">search</div>
      </Header>
      <ChatBlock
        profile_id={5}
        name={"최우빈"}
        msg={"어쩔수없죠. 잘 갔다와요."}
        time={"14:35"}
      />
      <ChatBlock
        profile_id={4}
        name={"조유나"}
        msg={"아 정말요?"}
        time={"어제"}
      />
      <ChatBlock
        profile_id={11}
        name={"박다민"}
        msg={"으음...."}
        time={"3월 23일"}
      />
      <ChatBlock
        profile_id={10}
        name={"김민수"}
        msg={"좋은 것 같습니다."}
        time={"3월 20일"}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 108px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 16px 24px 16px;

  border-bottom: 2px solid ${color.gray800};

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${color.gray50};
  }

  div {
    flex: 1;
    text-align: right;
    font-size: 24px;
    color: #ffffff;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 16px 0 16px;
`;

const Profile = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 8px;
  background: url(${process.env.PUBLIC_URL}/img/profile/profile${(props) =>
    props.profile_id || "_none"}.png);
  border-radius: 60px;
  background-size: cover;
`;

const ChatText = styled.div`
  flex: 1;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #ffffff;
  }
`;

const ChatTime = styled.div`
  p {
    font-size: 12px;
    color: ${color.gray600};
  }
`;
