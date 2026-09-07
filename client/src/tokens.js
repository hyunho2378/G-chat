// tokens.js G-Chat 디자인 토큰 단일 출처
// tailwind.config.js가 이 파일을 import한다. 컴포넌트는 Tailwind 클래스로만 쓴다.
// 이 파일 밖에서 hex와 px를 직접 쓰지 않는다. DESIGN.md와 값이 다르면 여기가 맞다.

export const colors = {
  page: '#FFFFFF',
  canvas: '#F5F7FA',
  mute: '#F0F2F5',
  subtle: '#F8F9FB',

  text: {
    pri: '#101010',
    sec: '#3D3F45',
    meta: '#6B6F76',
    ter: '#9A9EA5',
    inverse: '#FFFFFF'
  },

  primary: {
    DEFAULT: '#2563EB',
    hover: '#1D4ED8',
    soft: '#EFF6FF',
    line: '#BFDBFE',
    text: '#1E40AF'
  },

  line: {
    sub: '#ECEEF1',
    def: '#DDE1E6',
    strong: '#C5CAD1'
  },

  // 8단계. 7단계의 정색 배경 + 흰 글자를 되돌렸다. 그 조합이 흰 글자 4.5:1 을 강제해
  // 네 색을 전부 어둡게 눌렀고 화면이 탁해졌다. 배지는 다시 soft 배경 + 진한 글자다.
  // 정색은 배경으로 쓰지 않으므로(점과 아이콘과 차트 전용) 채도를 최대로 올렸고,
  // 글자색은 soft 배경 위 4.5:1 을 넘는 선에서 가장 밝은 값을 골랐다.
  // 세 값 모두 HSL 채도 76% 이상이다. 채도가 낮으면 회색기가 돌아 탁해 보인다
  //          정색(점 아이콘 차트)          soft(배지 배경)      글자(배지 라벨)
  success: { DEFAULT: '#16A34A', soft: '#E7F8EE', text: '#0A7C3C' },
  warning: { DEFAULT: '#EA8600', soft: '#FEF4E4', text: '#A85C05' },
  danger:  { DEFAULT: '#E11414', soft: '#FEEBEB', text: '#D01818' },
  info:    { DEFAULT: '#2563EB', soft: '#E9F0FE', text: '#1D4ED8' },

  // 8단계. 도넛이 파랑과 회색이 섞여 흐렸다. 데이터 3계열을 전부 채도 있는 파랑으로 두고
  // 중립 회색은 기타와 기준선 하나만 남겼다. 셋은 명도가 아니라 색상으로 갈린다(221 / 199 / 239).
  // 흰 배경 3:1(WCAG 2.2 1.4.11 비텍스트)은 그대로 지킨다
  chart: {
    1: '#2563EB',   // 5.17:1  HSL(221,83%,53%)  주 계열. primary 와 같은 값
    2: '#0284C7',   // 4.10:1  HSL(199,97%,39%)  보조 계열. azure
    3: '#6366F1',   // 4.47:1  HSL(239,84%,67%)  3계열. indigo. 파선과 함께 쓴다
    4: '#8A929C',   // 3.15:1  HSL(213,8%,58%)   기타 조각과 비교 기준선. 유일한 중립색
    // 히트맵 단계. 0 은 데이터 없음이라 색 단계가 아니고 bg-mute 다.
    // 채도를 92% 로 올려 최저 단계도 회색빛 없이 연한 파랑으로 읽힌다
    heat: {
      1: '#9DBEFB',  // 1.88:1  HSL(219,92%,80%)
      2: '#71A1F9',  // 2.57:1  HSL(219,92%,71%)
      3: '#4583F7',  // 3.59:1  HSL(219,92%,62%)
      4: '#2563EB'   // 5.17:1  chart-1 풀 채도
    }
  }
}

// prefers-contrast: more 에서 교체하는 값. index.css @media 에서 CSS 변수로 덮는다
export const contrastOverrides = {
  'line-sub': colors.line.def,
  'text-meta': colors.text.sec
}

// 타이포. index.css @layer components 의 .type-* 클래스가 이 값을 그대로 쓴다
// 8단계. "죄다 얇아서 위계가 안 보인다"는 피드백으로 웨이트 사다리를 400 / 600 / 700 / 800 넷으로 벌렸다.
// 인접해 놓이는 짝은 최소 200 차이가 난다. 라벨(caption 600) 대 값(kpi 800), 카드 타이틀(h3 700) 대 본문(body 400),
// 델타(caption 600) 대 보조 문구(meta 400) 다. 큰 활자는 크기 하한을 올리고 자간을 좁혀 덩어리감을 줬다.
// 폰트는 Pretendard 그대로다. 800 은 Pretendard Variable 이 가진 웨이트다
export const typography = {
  display: { size: 'clamp(30px, 2vw + 21px, 42px)', weight: 700, tracking: '-0.035em', leading: 1.14 },
  h1:      { size: 'clamp(24px, 1vw + 19px, 32px)', weight: 700, tracking: '-0.025em', leading: 1.2 },
  h2:      { size: 'clamp(18px, 0.5vw + 16px, 22px)', weight: 600, tracking: '-0.02em', leading: 1.25 },
  h3:      { size: 'clamp(17px, 0.3vw + 15.5px, 19px)', weight: 700, tracking: '-0.02em', leading: 1.3 },
  kpi:     { size: 'clamp(28px, 1.2vw + 22px, 40px)', weight: 800, tracking: '-0.03em', leading: 1.05 },
  body:    { size: 'clamp(15px, 0.2vw + 14px, 17px)', weight: 400, tracking: '-0.01em', leading: 1.7 },
  bodySm:  { size: 'clamp(13px, 0.15vw + 12.5px, 14px)', weight: 400, tracking: '-0.005em', leading: 1.55 },
  caption: { size: 'clamp(11px, 0.1vw + 10.5px, 12px)', weight: 600, tracking: '0', leading: 1.4 },
  meta:    { size: '12px', weight: 400, tracking: '0.01em', leading: 1.4 },
  // 알림 카운트 전용. 벨 아이콘을 가리지 않으려면 배지가 16px 이어야 하고 그 안에 들어가는 유일한 크기다
  count:   { size: '10px', weight: 700, tracking: '0.01em', leading: 1 }
}

export const spacing = {
  0.5: '2px', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px',
  8: '32px', 10: '40px', 12: '48px', 14: '56px', 16: '64px', 20: '80px', 24: '96px',
  // 레이아웃 고정 치수
  nav: '64px',
  'nav-m': '56px',
  topbar: '56px',
  sidebar: '240px',
  rail: '64px',
  'chat-rail': '56px',
  'source-col': '340px',
  'source-col-md': '320px'
}

// DESIGN_DELTA.md 변경 3. 봄내와 동일한 6단 스케일. xs 는 작은 배지와 표 내부용
export const radius = {
  xs: '6px',
  sm: '10px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '9999px'
}

// DESIGN_DELTA.md 변경 1·3 무보더 원칙. 깊이는 이 3단으로만.
// 관리자 카드 기본 sm, hover md, 드로어 모달 시트 lg.
// card 는 sm 별칭, float 는 lg 별칭으로 tailwind.config 에서 매핑한다(컴포넌트가 두 이름을 쓴다)
export const shadow = {
  none: 'none',
  sm: '0 2px 10px rgba(20,23,46,0.07)',
  md: '0 8px 28px rgba(20,23,46,0.12)',
  lg: '0 16px 48px rgba(20,23,46,0.18)'
}

export const screens = {
  xs: '320px',
  sm: '390px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
  '4xl': '2560px',
  '5xl': '3840px'
}

export const layout = {
  pageMax: '1400px',
  wideMax: '1600px',
  chatMax: '1140px',
  composerMax: '680px',
  textMax: '720px',
  // 페이지 좌우 패딩. Tailwind 클래스 px-4 md:px-6 lg:px-8 xl:px-10 3xl:px-16
  pagePx: { xs: 16, md: 24, lg: 32, xl: 40, '3xl': 64 }
}

// DESIGN_DELTA.md 변경 4. UI 전환 상한 300ms 미만. 기존 page 320 은 dur 280 으로 내렸다
export const motion = {
  duration: {
    press: '120ms',   // press 피드백
    fast: '160ms',    // 색 배경 hover, 탭 인디케이터
    pop: '180ms',     // 드롭다운 팝 진입 퇴장
    dur: '280ms',     // 진입 페이지 전환
    sheet: '360ms'    // 드로어 시트
  },
  easing: {
    out: 'cubic-bezier(0.23,1,0.32,1)',      // 진입 퇴장 기본
    inOut: 'cubic-bezier(0.77,0,0.175,1)',   // 화면 내 이동
    drawer: 'cubic-bezier(0.32,0.72,0,1)',   // 시트 드로어
    spring: 'cubic-bezier(0.32,1.32,0.5,1)'  // 모멘텀 결과 전용. 일반 UI 금지
  },
  press: 'scale(0.97)',
  skeleton: { duration: '1.4s', from: colors.line.def, to: colors.text.ter }
}

export const zIndex = {
  base: '0',
  raised: '10',
  nav: '40',
  dropdown: '50',
  drawer: '60',
  modal: '70',
  toast: '80'
}

export const icon = {
  sizes: [16, 20, 24, 32, 48],
  stroke: 1.75
}
