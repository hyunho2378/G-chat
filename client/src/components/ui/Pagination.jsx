import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// 현재 페이지 주변 5개만 노출한다
function pages(page, last) {
  const start = Math.max(1, Math.min(page - 2, last - 4))
  return Array.from({ length: Math.min(5, last) }, (_, i) => start + i).filter((p) => p >= 1 && p <= last)
}

export default function Pagination({ page = 1, total = 0, pageSize = 20, onChange, className }) {
  const last = Math.max(1, Math.ceil(total / pageSize))
  if (last <= 1) return null
  const btn = 'inline-flex items-center justify-center w-9 h-9 rounded-md type-body-sm tabular-nums transition-colors duration-fast disabled:opacity-40 disabled:cursor-not-allowed'

  return (
    <nav className={clsx('flex items-center justify-center gap-1', className)} aria-label="페이지 이동">
      <button type="button" className={clsx(btn, 'text-text-sec hover:bg-mute')} disabled={page <= 1} onClick={() => onChange?.(page - 1)} aria-label="이전 페이지">
        <ChevronLeft size={16} />
      </button>
      {pages(page, last).map((p) => (
        <button
          key={p} type="button" aria-current={p === page ? 'page' : undefined}
          onClick={() => onChange?.(p)}
          className={clsx(btn, p === page ? 'bg-primary-soft text-primary-text font-medium' : 'text-text-sec hover:bg-mute')}
        >
          {p}
        </button>
      ))}
      <button type="button" className={clsx(btn, 'text-text-sec hover:bg-mute')} disabled={page >= last} onClick={() => onChange?.(page + 1)} aria-label="다음 페이지">
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
