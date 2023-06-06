import styled from "styled-components";
import { color } from "../../style/colorVar";

const ProjectAbstractInfoBlock = ({ project, leader }) => {
  return (
    <Container>
      <LeaderProfileBlock profile_id={leader.profile_id} />
      <p>{leader.name}</p>
      <TitleWrapper>
        <h2>{project.title}</h2>
      </TitleWrapper>
      <InfoWrapperBlock>
        <InfoBlock ratio={1}>
          <h3>{project.topic}</h3>
          <span>주제</span>
        </InfoBlock>
        <InfoBlock ratio={2}>
          <h3>
            {project.meeting_type} / {project.meeting_cadence}
          </h3>
          <span>모임방식</span>
        </InfoBlock>
        <InfoBlock ratio={1}>
          <h3>{project.region}</h3>
          <span>장소</span>
        </InfoBlock>
      </InfoWrapperBlock>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 32px);
  min-height: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 16px;

  position: absolute;
  top: 146px;

  background: ${color.gray800};
  border: solid 1px ${color.mainColor};
  border-radius: 15px;

  p {
    font-size: 14px;
    color: ${color.gray50};
    margin-top: 29px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${color.gray50};
    white-space: pre-line;
    text-align: center;
    margin: 20px 0;
    word-break: keep-all;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${color.gray50};
  }

  span {
    font-size: 10px;
    color: ${color.gray400};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const LeaderProfileBlock = styled.div`
  width: 48px;
  height: 48px;

  position: absolute;
  top: -24px;
  left: calc(50% - 24px);

  background: url(${process.env.PUBLIC_URL}/img/profile/profile${(props) =>
    props.profile_id || "1"}.png);
  background-size: contain;
  border-radius: 60px;
  border: 1px solid ${color.mainColor};
`;

const InfoWrapperBlock = styled.div`
  display: flex;
  width: 100%;

  border-top: 1px solid ${color.gray600};
`;

const InfoBlock = styled.div`
  flex: ${(props) => props.ratio};
  flex-direction: column;
  display: flex;
  margin: 16px 0;
  align-items: center;
  border-right: 1px solid ${color.gray600};
`;

export default ProjectAbstractInfoBlock;
