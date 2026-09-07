// useAuthStore.js 인증은 httpOnly 쿠키. 이 스토어는 메모리 상태만 가진다. localStorage 금지.
import { create } from 'zustand'
import { get, post } from '../lib/api.js'

export const useAuthStore = create((set) => ({
  user: null,
  ready: false,
  fetchMe: async () => {
    try {
      const data = await get('/api/auth/me')
      set({ user: data.user || data, ready: true })
    } catch {
      set({ user: null, ready: true })
    }
  },
  login: async (email, password) => {
    const data = await post('/api/auth/login', { email, password })
    set({ user: data.user, ready: true })
    return data.user
  },
  logout: async () => {
    await post('/api/auth/logout').catch(() => {})
    set({ user: null })
  }
}))

export default useAuthStore
