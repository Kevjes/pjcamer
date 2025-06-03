// Configuration des langues
export const languages = {
  fr: 'Français',
  en: 'English'
} as const

export type Language = keyof typeof languages

// Traductions
export const translations = {
  // Ajoutez ici vos traductions
  // Exemple :
  // welcome: {
  //   fr: 'Bienvenue',
  //   en: 'Welcome'
  // }
}

export const useTranslations = () => {
  const locale = ref<Language>('fr')
  
  const t = (key: string, params: Record<string, string> = {}) => {
    // @ts-ignore
    let text = translations[key]?.[locale.value] || key
    
    // Remplace les paramètres dynamiques
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param])
    })
    
    return text
  }
  
  const setLocale = (newLocale: Language) => {
    if (languages[newLocale]) {
      locale.value = newLocale
      // Sauvegarder dans le localStorage
      if (process.client) {
        localStorage.setItem('locale', newLocale)
      }
    }
  }
  
  // Initialiser la langue depuis le localStorage
  onMounted(() => {
    if (process.client) {
      const savedLocale = localStorage.getItem('locale') as Language
      if (savedLocale && languages[savedLocale]) {
        locale.value = savedLocale
      }
    }
  })
  
  return {
    t,
    locale,
    setLocale,
    availableLocales: Object.keys(languages) as Language[]
  }
}
