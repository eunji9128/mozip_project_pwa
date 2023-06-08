import styled from "styled-components";
import { color } from "../../style/colorVar";

const ProjectBottomBar = () => {
  return (
    <ProjectBottomBarContainer>
      <BookmarkBtn>
        <span>☆</span>
      </BookmarkBtn>
      <RegisterBtn>
        <p>참여 신청하기</p>
      </RegisterBtn>
    </ProjectBottomBarContainer>
  );
};

const ProjectBottomBarContainer = styled.div`
  width: inherit;
  height: 76px;
  display: flex;
  padding: 8px 16px 16px 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: ${color.gray800};
`;

const BookmarkBtn = styled.button`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.16px solid ${color.gray500};
  border-radius: 26px;
  background: ${color.gray800};

  span {
    font-size: 24px;
    color: ${color.gray500};
  }
`;

const RegisterBtn = styled.button`
  flex: 1;
  height: 52px;
  margin-left: 10px;
  border: 0;
  border-radius: 10px;
  background: ${color.mainColor};

  p {
    font-size: 18px;
    font-weight: bold;
    color: ${color.gray900};
  }
`;

export default ProjectBottomBar;
