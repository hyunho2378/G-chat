// 상태 문자열 → 색과 라벨 매핑 단일 출처. IA.md 상태 정의 표 기준.
// 다른 파일에서 상태 색 매핑을 다시 정의하지 않는다(PATTERNS.md 절대 금지 패턴).
import clsx from 'clsx'

const PILL = {
  success: 'bg-success-soft text-success-text',
  warning: 'bg-warning-soft text-warning-text',
  danger: 'bg-danger-soft text-danger-text',
  info: 'bg-info-soft text-info-text',
  neutral: 'bg-mute text-text-sec'
}
const DOT = { success: 'bg-success', warning: 'bg-warning', danger: 'bg-danger', info: 'bg-info', neutral: 'bg-text-ter' }

// 필이 아닌 자리(KPI 목표 문구, 운영시간 표, 예약 셀)도 여기서 색을 받아 간다.
// 상태에서 색으로 가는 길은 이 파일 하나뿐이어야 한다
export const TONE_TEXT = {
  success: 'text-success-text', warning: 'text-warning-text',
  danger: 'text-danger-text', info: 'text-info-text', neutral: 'text-text-meta'
}
export const TONE_FILL = {
  success: 'bg-success-soft', warning: 'bg-warning-soft',
  danger: 'bg-danger-soft', info: 'bg-info-soft', neutral: 'bg-mute'
}

export const STATUS = {
  // 시설 운영
  normal: ['success', '정상'], maintenance: ['warning', '유지보수'], closed: ['danger', '휴관'],
  // 예약 가능
  open: ['success', '여유'], stable: ['success', '안정적'], limited: ['warning', '제한됨'], full: ['danger', '마감'],
  booked: ['info', '예약됨'],
  // 상담 처리
  auto: ['success', '자동처리'], handoff: ['info', '인계'], unresolved: ['warning', '미해결'],
  // 인계 진행
  wait: ['warning', '대기'], progress: ['info', '처리 중'], done: ['success', '완료'],
  // 색인
  indexed: ['success', '색인됨'], pending: ['warning', '대기'], failed: ['danger', '실패'],
  // 리뷰 판정
  correct: ['success', '정답'], wrong: ['danger', '오답'], hold: ['warning', '보류'],
  // KPI 목표
  achieved: ['success', '달성'], near: ['warning', '근접'], missed: ['danger', '미달']
}

export const statusTone = (status) => STATUS[status]?.[0] || 'neutral'
export const statusLabel = (status) => STATUS[status]?.[1] || status

export default function StatusPill({ status, label, size = 'md', className }) {
  const tone = statusTone(status)
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2 rounded-xs type-caption whitespace-nowrap',
      size === 'sm' ? 'h-5' : 'h-6',
      PILL[tone], className
    )}>
      <span className={clsx('w-2 h-2 rounded-full', DOT[tone])} aria-hidden="true" />
      {label || statusLabel(status)}
    </span>
  )
}
