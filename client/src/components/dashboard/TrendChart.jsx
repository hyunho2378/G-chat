// 꺾은선. 라이브러리 없이 SVG 로 직접 그린다(COMPONENTS.md).
// 색으로만 계열을 구분하지 않는다. 범례 라벨을 항상 같이 둔다(DESIGN.md 차트 색 절).
import { useState } from 'react'
import clsx from 'clsx'
import { formatNumber } from '../../lib/format.js'
import { labelStep, linePath, niceMax, useChartSize, useEnterOnce } from './chartUtils.js'

const PAD = { l: 40, r: 12, t: 8, b: 26 }

export default function TrendChart({ labels = [], series = [], height = 240, ariaLabel }) {
  const { ref, width } = useChartSize(height)
  const entered = useEnterOnce()
  const [hover, setHover] = useState(null)

  const max = niceMax(Math.max(1, ...series.flatMap((s) => s.points)))
  const innerW = Math.max(0, width - PAD.l - PAD.r)
  const innerH = height - PAD.t - PAD.b
  const n = labels.length
  const x = (i) => PAD.l + (n <= 1 ? innerW / 2 : (innerW * i) / (n - 1))
  const y = (v) => PAD.t + innerH - (innerH * v) / max
  const step = labelStep(n, innerW)
  const ticks = [0, 0.25, 0.5, 0.75, 1]

  return (
    <div className="relative">
      <ul className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        {series.map((s) => (
          <li key={s.key} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className={clsx(s.dash ? 'h-0.5 w-4 rounded-full' : 'h-2 w-2 rounded-full', s.dot)} />
            <span className="type-caption text-text-sec">{s.name}</span>
          </li>
        ))}
      </ul>

      <div ref={ref} className="w-full">
        {width > 0 && (
          <svg width={width} height={height} role="img" aria-label={ariaLabel} className="overflow-visible">
            {ticks.map((tk) => (
              <g key={tk}>
                <line x1={PAD.l} x2={width - PAD.r} y1={y(max * tk)} y2={y(max * tk)} className="stroke-line-sub" strokeWidth="1" />
                <text x={PAD.l - 8} y={y(max * tk) + 4} textAnchor="end" className="fill-text-meta tabular-nums" fontSize="12">
                  {formatNumber(Math.round(max * tk))}
                </text>
              </g>
            ))}

            {labels.map((l, i) => (i % step === 0 ? (
              <text key={l} x={x(i)} y={height - 6} textAnchor="middle" className="fill-text-meta tabular-nums" fontSize="12">{l}</text>
            ) : null))}

            {series.map((s) => (s.dash ? (
              // 파선 계열은 그려 들어오는 애니메이션 대신 페이드로 진입한다.
              // pathLength 정규화와 실제 dash 단위를 같이 쓸 수 없다
              <path
                key={s.key} d={linePath(s.points, x, y)} fill="none" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className={s.stroke}
                strokeDasharray={s.dash} opacity={entered ? 1 : 0}
                style={{ transition: 'opacity var(--dur) var(--ease-out)' }}
              />
            ) : (
              <path
                key={s.key} d={linePath(s.points, x, y)} fill="none" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className={s.stroke}
                pathLength="1" strokeDasharray="1" strokeDashoffset={entered ? 0 : 1}
                style={{ transition: 'stroke-dashoffset var(--dur) var(--ease-out)' }}
              />
            )))}

            {hover !== null && (
              <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={PAD.t + innerH} className="stroke-line-strong" strokeWidth="1" />
            )}
            {hover !== null && series.map((s) => (
              <circle key={s.key} cx={x(hover)} cy={y(s.points[hover])} r="3.5" className={clsx(s.fill, 'stroke-page')} strokeWidth="2" />
            ))}

            <rect
              x={PAD.l} y={PAD.t} width={innerW} height={innerH} fill="transparent"
              onMouseMove={(e) => {
                const box = e.currentTarget.getBoundingClientRect()
                const ratio = (e.clientX - box.left) / Math.max(1, box.width)
                setHover(Math.max(0, Math.min(n - 1, Math.round(ratio * (n - 1)))))
              }}
              onMouseLeave={() => setHover(null)}
            />
          </svg>
        )}
      </div>

      {hover !== null && (
        <div
          className="pointer-events-none absolute top-8 z-raised rounded-md bg-page shadow-md p-2"
          style={{ left: Math.min(Math.max(0, x(hover) - 60), Math.max(0, width - 140)) }}
        >
          <p className="type-meta text-text-meta tabular-nums">{labels[hover]}</p>
          <ul className="mt-1 space-y-0.5">
            {series.map((s) => (
              <li key={s.key} className="flex items-center gap-2 whitespace-nowrap">
                <span aria-hidden="true" className={clsx('h-2 w-2 rounded-full', s.dot)} />
                <span className="type-caption text-text-sec">{s.name}</span>
                <span className="ml-auto type-caption text-text-pri tabular-nums">{formatNumber(s.points[hover])}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
