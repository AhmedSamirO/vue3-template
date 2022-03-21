import { createI18n } from 'vue-i18n'
import ar from './ar'
import en from './en'

const messages = {
  en: {
    ...en
  },
  ar: {
    ...ar
  }
}

const i18n = createI18n({
  locale: 'ar', // set locale
  fallbackLocale: 'ar',
  formatFallbackMessages: true,
  messages // set locale messages
})

export default i18n