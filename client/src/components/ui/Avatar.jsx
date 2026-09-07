import clsx from 'clsx'

const SIZE = { sm: 'w-6 h-6 type-meta', md: 'w-8 h-8 type-caption', lg: 'w-10 h-10 type-body-sm' }

export default function Avatar({ name = '', size = 'md', className }) {
  const initial = name.trim().slice(0, 1) || '?'
  return (
    <span
      aria-hidden="true"
      className={clsx('inline-flex shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-text font-medium', SIZE[size], className)}
    >
      {initial}
    </span>
  )
}
