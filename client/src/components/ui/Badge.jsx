import clsx from 'clsx'

// 7단계. StatusPill 과 같은 규칙이다. 상태 넷은 정색 배경 + 흰 글자,
// neutral 만 soft 로 남는다(사진 위 배지가 className 으로 bg 를 덮어쓴다)
const TONE = {
  success: 'bg-success text-text-inverse',
  warning: 'bg-warning text-text-inverse',
  danger: 'bg-danger text-text-inverse',
  info: 'bg-info text-text-inverse',
  neutral: 'bg-mute text-text-sec'
}

export default function Badge({ tone = 'neutral', className, children }) {
  return (
    <span className={clsx('inline-flex items-center h-5 px-1.5 rounded-xs type-caption font-medium', TONE[tone], className)}>
      {children}
    </span>
  )
}
