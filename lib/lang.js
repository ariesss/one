import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Blog',
      SEARCH: 'Search',
      SHARING: 'Sharing'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: 'Nothing here'
      }
    }
  },
  'zh-CN': {
    NAV: {
      INDEX: '博客',
      SEARCH: '搜索',
      SHARING: '分享'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: '什么也没有'
      }
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'es':
    case 'es-ES':
      return lang.es
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
