// PATTERNS.md 16번. 일러스트는 primary 단색 SVG 만(DESIGN.md 아이콘과 일러스트 절).
import clsx from 'clsx'

export default function EmptyState({ title, desc, action, image, className }) {
  const src = image || '/images/illustrations/empty.svg'
  return (
    <div className={clsx('py-16 flex flex-col items-center text-center', className)}>
      <img src={src} alt="" className="w-24 h-24" />
      <p className="mt-4 type-h3 text-text-pri">{title}</p>
      {desc && <p className="mt-1 type-body-sm text-text-meta max-w-[320px]">{desc}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
