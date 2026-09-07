import { forwardRef } from 'react'
import clsx from 'clsx'

const SIZE = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-11 h-11' }
const VARIANT = {
  ghost: 'bg-transparent text-text-sec hover:bg-mute hover:text-text-pri',
  soft: 'bg-primary-soft text-primary hover:bg-primary-line',
  primary: 'bg-primary text-text-inverse hover:bg-primary-hover'
}

// 트리거로 쓰는 곳(LangSwitch 등)이 포커스를 되돌려야 해서 ref 를 넘긴다
const IconButton = forwardRef(function IconButton(
  { size = 'md', variant = 'ghost', radius = 'full', className, children, ...rest }, ref
) {
  if (!rest['aria-label']) console.warn('IconButton: aria-label 이 필요합니다')
  return (
    <button
      ref={ref}
      type={rest.type || 'button'}
      className={clsx(
        'pressable inline-flex shrink-0 items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed',
        radius === 'full' ? 'rounded-full' : 'rounded-md',
        SIZE[size], VARIANT[variant], className
      )}
      {...rest}
    >
      {children}
    </button>
  )
})

export default IconButton
