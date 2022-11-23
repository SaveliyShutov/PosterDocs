import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Хочу в Поездку',
    description: 'Крутой инструмент',
    lang: 'ru-RU',
    themeConfig: {
        nav: [
            { text: 'Privacy', link: '/privacy/main.html' },
          ]
    }
})
