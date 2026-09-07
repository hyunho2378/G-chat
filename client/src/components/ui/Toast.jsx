// 전역 큐를 그린다. App.jsx 에 한 번만 마운트한다. 문구는 useToast 로 넣는다.
import clsx from 'clsx'
import { AlertTriangle, Check, Info, X, XCircle } from 'lucide-react'
import { useToastStore } from '../../hooks/useToast.js'

const TONE = {
  success: 'bg-success-soft text-success-text',
  warning: 'bg-warning-soft text-warning-text',
  danger: 'bg-danger-soft text-danger-text',
  info: 'bg-info-soft text-info-text'
}
const ICON = { success: Check, warning: AlertTriangle, danger: XCircle, info: Info }

export default function Toast() {
  const toasts = useToastStore((s) => s.toasts)
  const dismiss = useToastStore((s) => s.dismiss)
  if (!toasts.length) return null

  return (
    <div
      aria-live="polite"
      className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-toast flex flex-col gap-2 w-[calc(100%-32px)] max-w-[380px]"
    >
      {toasts.map((t) => {
        const Icon = ICON[t.tone] || Info
        return (
          <div key={t.id} className={clsx('toast-item flex items-start gap-2 p-3 rounded-md shadow-float', TONE[t.tone] || TONE.info)}>
            <Icon size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p className="flex-1 min-w-0 type-body-sm">{t.message}</p>
            <button type="button" aria-label="알림 닫기" onClick={() => dismiss(t.id)} className="shrink-0">
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
