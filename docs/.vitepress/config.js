const privacySidebar = { text: 'Section Title A', items: [{ text: 'Item A', link: '/item-a' }, { text: 'Item B', link: '/item-b' },] }

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Хочу в Поездку',
  description: 'Крутой инструмент',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Privacy', link: '/privacy/main.html' },
      { text: 'Главная', link: '/' },
      { text: 'Privacy', link: '/privacy/main.html' },
    ],
    sidebar: {
      '/privacy/main': privacySidebar,
    }
  }
})
