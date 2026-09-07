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

  // 7단계에서 채도를 올리고 명도를 내렸다. 배지와 상태 필이 정색 배경 + 흰 글자로 바뀌었기 때문에
  // 네 정색 모두 흰 배경 대비 4.5:1 이상이어야 한다(대비는 대칭이라 흰 글자 대비도 같은 값이다).
  // soft 는 한 단계 진하게 올렸다. 이전 값은 흰 배경과 거의 구분되지 않았다
  success: { DEFAULT: '#0A853D', soft: '#DCFCE7', text: '#166534' },   // 4.73:1
  warning: { DEFAULT: '#B85C00', soft: '#FEF3C7', text: '#92400E' },   // 4.60:1
  danger:  { DEFAULT: '#DE1B1B', soft: '#FEE2E2', text: '#991B1B' },   // 4.91:1
  info:    { DEFAULT: '#2563EB', soft: '#DBEAFE', text: '#1E40AF' },   // 5.17:1

  // 3단계에서 데이터 3계열을 전부 흰 배경 3:1 이상으로 올렸고, 7단계에서 채도를 다시 올렸다.
  // chart-2 는 뿌연 연파랑이 아니라 색상이 분리되는 azure 로, chart-3 은 또렷한 중립 슬레이트로 바꿨다
  chart: {
    1: '#2563EB',   // 5.17:1  주 계열. primary 와 같은 값
    2: '#0284C7',   // 4.10:1  보조 계열. 색상(199)이 chart-1(221)과 갈려 명도만으로 구분하지 않는다
    3: '#55606E',   // 6.39:1  3계열. 파랑이 아닌 중립색이라 색상으로도 구분된다
    4: '#A8AEB6',   // 2.24:1  비교 기준선과 목표선 전용. 데이터 계열이 아니다
    // 히트맵 단계. 0 은 bg-mute 고 1~4 가 이 넷이다. 알파를 흰 면에 겹치면 채도가 빠져 뿌예지므로
    // 단계마다 실색을 둔다. 최고 단계는 chart-1 풀 채도와 같다
    heat: {
      1: '#A2BCF6',  // 1.90:1
      2: '#789FF2',  // 2.61:1
      3: '#4E81EF',  // 3.68:1
      4: '#2563EB'   // 5.17:1
    }
  }
}

// prefers-contrast: more 에서 교체하는 값. index.css @media 에서 CSS 변수로 덮는다
export const contrastOverrides = {
  'line-sub': colors.line.def,
  'text-meta': colors.text.sec
}

// 타이포. index.css @layer components 의 .type-* 클래스가 이 값을 그대로 쓴다
export const typography = {
  display: { size: 'clamp(28px, 2vw + 20px, 40px)', weight: 700, tracking: '-0.03em', leading: 1.15 },
  h1:      { size: 'clamp(22px, 1vw + 18px, 30px)', weight: 700, tracking: '-0.02em', leading: 1.2 },
  h2:      { size: 'clamp(18px, 0.5vw + 16px, 22px)', weight: 600, tracking: '-0.02em', leading: 1.25 },
  h3:      { size: 'clamp(16px, 0.3vw + 15px, 18px)', weight: 700, tracking: '-0.015em', leading: 1.3 },
  kpi:     { size: 'clamp(26px, 1.2vw + 20px, 36px)', weight: 700, tracking: '-0.02em', leading: 1.1 },
  body:    { size: 'clamp(15px, 0.2vw + 14px, 17px)', weight: 400, tracking: '-0.01em', leading: 1.7 },
  bodySm:  { size: 'clamp(13px, 0.15vw + 12.5px, 14px)', weight: 400, tracking: '-0.005em', leading: 1.55 },
  caption: { size: 'clamp(11px, 0.1vw + 10.5px, 12px)', weight: 500, tracking: '0', leading: 1.4 },
  meta:    { size: '12px', weight: 400, tracking: '0.01em', leading: 1.4 }
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
