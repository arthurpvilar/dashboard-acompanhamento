// Config Imports
import { i18n } from '@configs/i18n'

// Check if the url is missing the locale
export const isUrlMissingLocale = (url: string) => {
  return i18n.locales.every(locale => !(url.startsWith(`/${locale}/`) || url === `/${locale}`))
}

// Get the localized url
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLocalizedUrl = (url: string, languageCode?: string): string => {
  //if (!url || !languageCode) throw new Error("URL or Language Code can't be empty")

  //return isUrlMissingLocale(url) ? `/${languageCode}${ensurePrefix(url, '/')}` : url
  return url
}
