/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이경민",
    father: "이일호",
    mother: "이유정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김영아",
    father: "김화식",
    mother: "박정순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-14",
    time: "14:00",
    venue: "르비르모어",
    hall: "2층 클리타홀",
    address: "서울특별시 강남구 테헤란로 406 샹제리제센터 A동 2층",
    tel: "02-501-7000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/404070599",
      naver: "https://naver.me/xl0D3i0o"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "초대합니다",
    content: "소소한 일상 속에서\n문득문득 떠오르는 사람이 있습니다.\n곁에 있을 때 가장 나다운 모습이 되게 하는 사람과\n앞으로의 모든 계절을 함께 하고자 합니다.\n그 시작의 자리에\n늘 곁에서 아껴주셨던 소중한 분들을 모십니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "♥",
    content: ""
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이경민", bank: "신한은행", number: "110-304-717230" }
    ],
    bride: [
      { role: "신부", name: "김영아", bank: "카카오뱅크", number: "3333-17-4017238" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이경민 ♥ 김영아 결혼합니다",
    description: "2026년 6월 14일, 소중한 분들을 초대합니다."
  }
};
