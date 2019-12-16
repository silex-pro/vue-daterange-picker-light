module.exports = {
  ga: 'UA-141652960-3',
  base: '/vue-daterange-picker-light/',
  title: 'Vue date range picker light',
  description: 'Vue2 date range picker by Innologica',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/silex-pro/vue-daterange-picker-light' }
    ],
    sidebar: 'auto'
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
    }
  }
}
