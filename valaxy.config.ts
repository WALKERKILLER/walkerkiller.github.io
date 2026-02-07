import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonComponents } from 'valaxy-addon-components'
import { VitePWA } from 'vite-plugin-pwa'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

const colors = ['purple', 'green', 'blue', 'dark']
colors.forEach((c) => {
  safelist.push(...[
    `border-${c}-300`,
    `text-${c}-600`,
    `hover:bg-${c}-600`,
    `dark:text-${c}-300`,
    `focus:ring-${c}-300`,
  ])
})

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  modules: {
    rss: {
      enable: true,
      fullText: false,
    },
  },

  vite: {
    // https://vite-pwa-org.netlify.app/
    plugins: [VitePWA()],
  },

  unocss: { safelist },

  markdown: {
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },

    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: '注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: '警告',
      },
      info: {
        text: 'información',
      },

      custom: {
        icon: 'i-ri:info-i',
        text: 'CUSTOM',
      },
    },

    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
    ],
  },

  addons: [

    addonComponents(),

  ],

  vue: {
    isCustomElement: [(tag: string) => ['meting-js'].includes(tag)],
  },
  
})
