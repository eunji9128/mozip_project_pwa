export const member_list = [
  {
    id: 1,
    name: "김형진",
    profile_id: 5,
    role: "개발자",
    career: "주니어",
    topic_list: [
      "서울",
      "주 3회",
      "오프라인",
      "전시",
      "공연",
      "운동",
      "맛집",
      "에세이",
      "캠핑",
      "방탈출",
    ],
    badge_list: ["스타트업 인재", "팔로워", "속 보이는 전자두뇌"],
  },
  {
    id: 2,
    name: "허성원",
    profile_id: 3,
    role: "UI/UX 디자이너",
    career: "시니어",
    topic_list: [
      "서울",
      "주 3회",
      "오프라인",
      "전시",
      "공연",
      "운동",
      "맛집",
      "에세이",
      "캠핑",
      "방탈출",
    ],
    badge_list: ["리더", "투머치 토커 훈장님", "색감 궁예"],
  },
  {
    id: 3,
    name: "양은지",
    profile_id: 8,
    role: "UI/UX 디자이너",
    career: "시니어",
    topic_list: [
      "서울",
      "주 3회",
      "오프라인",
      "전시",
      "공연",
      "운동",
      "맛집",
      "에세이",
      "캠핑",
      "방탈출",
    ],
    badge_list: ["조용한 암살자", "쉴틈없는 자기개발", "색감 궁예"],
  },
  {
    id: 4,
    name: "최우빈",
    profile_id: 12,
    role: "개발자",
    career: "주니어",
    topic_list: [],
    badge_list: ["팔로워", "옷장엔 체크셔츠뿐"],
  },
  {
    id: 5,
    name: "권예림",
    profile_id: 2,
    role: "기획자",
    career: "주니어",
    topic_list: [],
    badge_list: ["스타트업 인재", "쉴틈없는 자기개발"],
  },
];

export const get_random_members = (length) => {
  return [...Array(member_list.length).keys()]
    .sort(() => 0.5 - Math.random())
    .slice(0, length)
    .map((index) => member_list[index]);
};
