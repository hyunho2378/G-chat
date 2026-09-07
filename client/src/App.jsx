// ROUTES.md 그대로. 상담 홈만 즉시 로드하고 나머지는 lazy.
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout.jsx'
import PublicLayout from './components/layout/PublicLayout.jsx'
import RequireAuth from './components/layout/RequireAuth.jsx'
import Toast from './components/ui/Toast.jsx'
import { LangProvider } from './i18n/LangContext.jsx'
import ChatPage from './pages/public/ChatPage.jsx'
import useAuthStore from './store/useAuthStore.js'

const FacilitiesPage = lazy(() => import('./pages/public/FacilitiesPage.jsx'))
const FacilityDetailPage = lazy(() => import('./pages/public/FacilityDetailPage.jsx'))
const NoticesPage = lazy(() => import('./pages/public/NoticesPage.jsx'))
const NoticeDetailPage = lazy(() => import('./pages/public/NoticeDetailPage.jsx'))
const FaqPage = lazy(() => import('./pages/public/FaqPage.jsx'))
const PrivacyPage = lazy(() => import('./pages/public/PrivacyPage.jsx'))
const WidgetPage = lazy(() => import('./pages/public/WidgetPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/public/NotFoundPage.jsx'))

const LoginPage = lazy(() => import('./pages/admin/LoginPage.jsx'))
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage.jsx'))
const LogsPage = lazy(() => import('./pages/admin/LogsPage.jsx'))
const HandoffPage = lazy(() => import('./pages/admin/HandoffPage.jsx'))
const KnowledgePage = lazy(() => import('./pages/admin/KnowledgePage.jsx'))
const FaqAdminPage = lazy(() => import('./pages/admin/FaqAdminPage.jsx'))
const FacilitiesAdminPage = lazy(() => import('./pages/admin/FacilitiesAdminPage.jsx'))
const FacilityEditPage = lazy(() => import('./pages/admin/FacilityEditPage.jsx'))
const ReservationsPage = lazy(() => import('./pages/admin/ReservationsPage.jsx'))
const AnalyticsPage = lazy(() => import('./pages/admin/AnalyticsPage.jsx'))
const UsersPage = lazy(() => import('./pages/admin/UsersPage.jsx'))
const SettingsPage = lazy(() => import('./pages/admin/SettingsPage.jsx'))
const InsightsPage = lazy(() => import('./pages/admin/InsightsPage.jsx'))
const ReportsPage = lazy(() => import('./pages/admin/ReportsPage.jsx'))
const ForecastPage = lazy(() => import('./pages/admin/ForecastPage.jsx'))
const OnboardingPage = lazy(() => import('./pages/admin/OnboardingPage.jsx'))
const SimulatorPage = lazy(() => import('./pages/admin/SimulatorPage.jsx'))
const NoticesAdminPage = lazy(() => import('./pages/admin/NoticesAdminPage.jsx'))

// 라우트 변경 시 상단으로. / 는 내부 스크롤 컨테이너라 무관하다(ROUTES.md 스크롤 절)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const fetchMe = useAuthStore((s) => s.fetchMe)
  useEffect(() => { fetchMe() }, [fetchMe])

  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toast />
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route index element={<ChatPage />} />
              <Route path="facilities" element={<FacilitiesPage />} />
              <Route path="facilities/:id" element={<FacilityDetailPage />} />
              <Route path="notices" element={<NoticesPage />} />
              <Route path="notices/:id" element={<NoticeDetailPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
            </Route>

            {/* iframe 임베드용. PublicLayout 밖이라 TopNav 와 Footer 가 없다 */}
            <Route path="/widget" element={<WidgetPage />} />

            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<RequireAuth />}>
              <Route element={<AdminLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="logs" element={<LogsPage />} />
                <Route path="handoff" element={<HandoffPage />} />
                <Route path="reservations" element={<ReservationsPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="insights" element={<InsightsPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="forecast" element={<ForecastPage />} />
                <Route path="simulator" element={<SimulatorPage />} />
                <Route element={<RequireAuth roles={['admin', 'operator']} />}>
                  <Route path="knowledge" element={<KnowledgePage />} />
                  <Route path="faq" element={<FaqAdminPage />} />
                  <Route path="facilities" element={<FacilitiesAdminPage />} />
                  <Route path="facilities/:id" element={<FacilityEditPage />} />
                  <Route path="notices" element={<NoticesAdminPage />} />
                </Route>
                <Route element={<RequireAuth roles={['admin']} />}>
                  <Route path="users" element={<UsersPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="onboarding" element={<OnboardingPage />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LangProvider>
  )
}
