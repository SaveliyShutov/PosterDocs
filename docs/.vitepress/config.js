import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Хочу в Поездку',
  description: 'Крутой инструмент',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Условия', link: '/privacy/main' },
      { text: 'Обучение', link: '/education/main' },
      { text: 'О проекте', link: '/about/main' },
    ],
    sidebar: {
      '/privacy/': [
        {
          text: 'Условия',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Оферта', link: '/guide/' }, // /guide/index.md
            { text: 'Правила', link: '/guide/one' }, // /guide/one.md
            { text: 'Оплата', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],
      '/about/': [
        {
          text: 'О проекте',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Вопросы', link: '/guide/' }, // /guide/index.md
            { text: 'Поддержка', link: '/guide/one' }, // /guide/one.md
            { text: 'Контакты', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],
      '/education/': [
        {
          text: 'Обучение',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Создать поездку', link: '/guide/' }, // /guide/index.md
            { text: 'Регистрация', link: '/guide/one' }, // /guide/one.md
          ]
        }
      ],
    }
  }
})
