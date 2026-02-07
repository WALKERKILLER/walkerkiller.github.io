import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  banner: {
    enable: true,
    title: ['新', '月', '潮', '汐', '摄', '动', '流', '形'],
    cloud: {
      enable: true,
    },
    siteNameClass: 'bg-gradient-to-r gradient-text from-#1e3c72 to-dark dark:from-#66a6ff dark:to-blue-500',
  },

  nav: [
    { text: '博客文章', link: '/posts/', icon: 'i-ri-article-line' },
    { text: '项目列表', link: '/projects', icon: 'i-ri-gallery-view' },
    { text: '友情链接', link: '/links/', icon: 'i-ri-link' },
  ],

  pages: [
    {
      name: '项目列表',
      url: '/projects/',
      icon: 'i-ri-code-s-slash-line',
      color: 'pink',
    },
    {
      name: '友情链接',
      url: '/links/',
      icon: 'i-ri-genderless-line',
      color: 'dodgerblue',
    },
  ],

  footer: {
    since: 2025,
    icon:{
      animated: true,
      url: 'https://walkerkiller.de5.net',
    },
    powered: true,
  },

  bg_image: {
    enable: true,
    url: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260207202113439.png',
    dark: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/bg.jpg',
    opacity: 0.8,
  },
})