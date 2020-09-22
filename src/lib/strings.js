export const strings = {
  en: {
    APP_TITLE: 'HTTP Horses',
    USAGE_TITLE: 'Usage',
    USAGE_PARAM: 'status_code',
    USAGE_NOTE_LABEL: 'Note',
    USAGE_NOTE_TEXT: 'If you need an extension at the end of the URL just add',
    LANGUAGE_LINK_TEXT: 'Versió Català',
    DEVELOPED_BY: 'Developed by',
    IMAGES_BY: 'Images by'
  }
}

const getString = label => {
  const lang = window.location.search.indexOf('lang=cat') !== -1 ? 'cat' : 'en'

  return strings[lang][label]
}

export default getString
