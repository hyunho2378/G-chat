import clsx from 'clsx'

// variant block(단일 블록) | text(줄 n개) | card(카드 프리셋)
export default function Skeleton({ variant = 'block', lines = 3, className }) {
  if (variant === 'text') {
    return (
      <div className={clsx('space-y-2', className)} aria-hidden="true">
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className={clsx('h-3 rounded-xs skeleton-bar', i === 1 && 'skeleton-bar-2', i === 2 && 'skeleton-bar-3', i === lines - 1 ? 'w-2/3' : 'w-full')} />
        ))}
      </div>
    )
  }
  if (variant === 'card') {
    return (
      <div className={clsx('bg-page rounded-lg shadow-card p-4 lg:p-5', className)} aria-hidden="true">
        <div className="h-4 w-1/3 rounded-xs skeleton-bar" />
        <div className="mt-3 h-3 w-full rounded-xs skeleton-bar skeleton-bar-2" />
        <div className="mt-2 h-3 w-4/5 rounded-xs skeleton-bar skeleton-bar-3" />
      </div>
    )
  }
  return <div className={clsx('rounded-md skeleton-bar', className)} aria-hidden="true" />
}
