import clsx from 'clsx'

// 8단계. StatusPill 과 같은 규칙이다. 연한 tint 배경 + 채도 있는 진한 글자.
// 점은 두지 않는다. 배지는 상태가 아니라 종류 라벨이다
const TONE = {
  success: 'bg-success-soft text-success-text',
  warning: 'bg-warning-soft text-warning-text',
  danger: 'bg-danger-soft text-danger-text',
  info: 'bg-info-soft text-info-text',
  neutral: 'bg-mute text-text-sec'
}

export default function Badge({ tone = 'neutral', className, children }) {
  return (
    <span className={clsx('inline-flex items-center h-5 px-1.5 rounded-xs type-caption', TONE[tone], className)}>
      {children}
    </span>
  )
}
