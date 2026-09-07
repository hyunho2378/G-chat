import clsx from 'clsx'

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
