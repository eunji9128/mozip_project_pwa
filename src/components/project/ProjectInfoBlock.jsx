import styled from "styled-components";
import { color } from "../../style/colorVar";

const catchphrase = '"내 손 안의 여행북"\n여행기를 차곡차곡 기록하는 서비스';
const instroduction =
  "바쁜 일상 속 틈틈이 여행을 다녀오는 당신이 잊어버리기 쉬운 그날의 추억을 담아보세요.";
const service_range = " · web 모바일웹\n · app 안드로이드\n · app ios";
const process =
  "매주 일요일 오후 9시 서울 정기회의 (블랜디드)\n매주 요구하는 프로젝트 참여시간 4-10시간\n커뮤니케이션 툴 : 슬랙, 디스코드";
const suggestion =
  "1.이직/취업을 준비하는 주니어\n2.다양한 직업군과 소통하며 즐겁게 만들고 싶으신 분\n3.유저와 소통하는 경험을 얻고 싶으신 분";

const ProjectInfoDetailRow = ({ icon, name, value }) => {
  return (
    <ProjectInfoDetailRowContainer>
      <div className="material-symbols-outlined">{icon}</div>
      <span>{name}</span>
      <p>{value}</p>
    </ProjectInfoDetailRowContainer>
  );
};

const ProjectInfoBlock = () => {
  return (
    <Container>
      <InfoBlock>
        <h2>| 프로젝트 정보</h2>
        <ProjectInfoDetailRow
          icon={"calendar_month"}
          name={"프로젝트 기간"}
          value={"2023.04.25 - 2023.08.27"}
        />
        <ProjectInfoDetailRow
          icon={"diversity_3"}
          name={"모집인원"}
          value={"1명"}
        />
        <ProjectInfoDetailRow
          icon={"radar"}
          name={"모집포지션"}
          value={"디자이너"}
        />
        <ProjectInfoDetailRow
          icon={"work"}
          name={"요구경력"}
          value={"신입 주니어"}
        />
        <ProjectInfoDetailRow
          icon={"build"}
          name={"필요 기술스택"}
          value={"Figma / Adobe XD"}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>| 프로젝트 소개</h2>
        <h3>{catchphrase}</h3>
        <br />
        <p>{instroduction}</p>
        <h2>| 서비스 범위</h2>
        <p>{service_range}</p>
        <h2>| 진행방식</h2>
        <p>{process}</p>
        <h2>| 이런 분들께 추천드려요</h2>
        <span>{suggestion}</span>
      </InfoBlock>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 70px 0 0 0;
`;

const InfoBlock = styled.div`
  padding: 32px 16px 32px 16px;

  border-bottom: 6px solid ${color.gray800};

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: ${color.gray50};

    margin-bottom: 20px;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${color.gray50};
    white-space: pre-line;
  }

  p {
    font-size: 14px;
    color: ${color.gray50};
    white-space: pre-line;
    word-break: keep-all;
    margin-bottom: 30px;
  }

  span {
    font-size: 14px;
    color: ${color.gray50};
    white-space: pre-line;
    word-break: keep-all;
  }
`;

const ProjectInfoDetailRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;

  div {
    font-size: 20px;
    margin-right: 6px;
    color: ${color.gray400};
  }

  span {
    font-size: 14px;
    width: 35%;
    color: ${color.gray400};
  }

  p {
    font-size: 14px;
    color: ${color.gray50};
    margin: 0;
  }
`;

export default ProjectInfoBlock;
