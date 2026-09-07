import { useId } from 'react'
import clsx from 'clsx'

export default function Toggle({ checked = false, onChange, label, disabled, id, className }) {
  const auto = useId()
  const switchId = id || auto
  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <button
        id={switchId} type="button" role="switch" aria-checked={checked} disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={clsx(
          'relative w-11 h-6 shrink-0 rounded-full transition-colors duration-fast',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          checked ? 'bg-primary' : 'bg-line-strong'
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            'absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-page transition-transform duration-fast ease-out',
            checked && 'translate-x-5'
          )}
        />
      </button>
      <label htmlFor={switchId} className="type-body-sm text-text-sec cursor-pointer">{label}</label>
    </div>
  )
}
