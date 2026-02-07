import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  languages: ['zh-CN'],
  timezone: 'Asia/Shanghai',

  url: 'https://walkerkiller.de5.net',

  title: "新月潮汐摄动流形",
  subtitle: '快逃，别回头，这里不是伊甸',
  description: 'Time to leave，My Eden is burning.',

  author: {
    name: 'WALKERKILLER',
    email: 'walkerkiller1202@gmail.com',
    link: 'https://github.com/WALKERKILLER',
    avatar: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/komari.jpg',
    status: {
      emoji: '😭',
      message: '不想上学',
    },
    intro: '人が想像できることは、必ず人が実現できる。'
  },

  // Hexo 里 per_page: 10
  pageSize: 10,

  // Hexo 主题里 medium_zoom: true
  mediumZoom: {
    enable: true,
    selector: '.markdown-body img',
    options: {},
  },

  // Hexo 里 hexo-wordcount / 主题 wordcount: true
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 100,
      },
    },
  },


  search: {
    enable: true,
    provider: 'fuse',
  },

  fuse: {
    /**
     * 设置搜索的文件路径
     */
    pattern: 'pages/**/*.md',
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
          threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/WALKERKILLER',
      icon: 'i-ri-github-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:walkerkiller1202@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/artist?id=34348329',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C10D0C',
    },
    {
      name: '哔哩哔哩动画',
      link: 'https://space.bilibili.com/493316804',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
  ],

  sponsor: {
    enable: true,
    title: '赞助',
    methods: [
      {
        name: '支付宝',
        url: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/img_v3_02um_6e456548-e641-4abd-88f3-2cd27563ecag.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信赞赏',
        url: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/img_v3_02um_ab8463de-fb4d-4c14-bb2e-f15a07aeb53g.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
      {
        name: 'USDC(Arbitrum)',
        url: 'https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/img_v3_02um_afdb2dec-9c82-4d34-99b5-c1e3a3efc6ag.jpg',
        color: '#ffc965',
        icon: 'i-ri-coin-line',
      },
    ],
  },

  encrypt: {
    enable: true,
  },

  redirects: {
    useVueRouter: true,
    rules: [
      {
        from: '/foo',
        to: '/about',
      },
    ],
  },
})