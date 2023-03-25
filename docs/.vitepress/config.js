import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PostcardsDocs',
  description: '',
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'О проекте', link: '/about/main' },
    ],
    sidebar: {
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
    }
  }
})
