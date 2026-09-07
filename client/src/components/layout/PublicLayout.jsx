// 시민 면 레이아웃. / 는 한 화면 고정(h-screen, 푸터 없음), 나머지는 min-h-screen + 푸터.
// 기관 설정은 여기서 한 번만 불러 Outlet context 로 내린다. 화면마다 다시 부르지 않는다.
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { get } from '../../lib/api.js'
import Footer from './Footer.jsx'
import TopNav from './TopNav.jsx'

export default function PublicLayout() {
  const isChat = useLocation().pathname === '/'
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    let alive = true
    get('/api/settings/public')
      .then((s) => { if (alive) setSettings(s) })
      .catch(() => {})
    return () => { alive = false }
  }, [])

  return (
    <div className={isChat ? 'h-screen flex flex-col' : 'min-h-screen flex flex-col'}>
      <TopNav />
      <main className="flex-1 min-h-0 flex flex-col">
        <Outlet context={{ settings }} />
      </main>
      {!isChat && <Footer settings={settings} />}
    </div>
  )
}
