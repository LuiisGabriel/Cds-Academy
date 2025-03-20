const API_URL = 'http://localhost:4000'
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/signin`,
  CREATE_VIDEO: `${API_URL}/auth/createVideo`,
  GET_USER: `${API_URL}/auth/me`,
}

export const APP_ROUTES = {
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  LANDINGPAGE: '/landingPage',
  VIDEOS: '/videos',
  PROFILE: '/profile',
  ABOUT: '/about',
  TRAINMENTS: '/trainments',
  CDSWEB: '/cdsweb',
  CDSDESKTOP: '/cdsdesktop',
  WEB_RETAGUARDA: '/web/retaguarda',
  WEB_RETAGUARDA_CADASTROS: '/web/retaguarda/cadastros',
  WEB_RETAGUARDA_FINANCEIRO: '/web/retaguarda/financeiro',
  WEB_RETAGUARDA_OPERACOES: '/web/retaguarda/operacoes',
  WEB_FRENTEDELOJA: '/web/frentedeloja',
  WEB_FRENTEDELOJA_OPERACOES: '/web/frentedeloja/operacoes',
  WEB_FRENTEDELOJA_CADASTROS: '/web/frentedeloja/cadastros',
  DESKTOP_RETAGUARDA: '/desktop/retaguarda',
  DESKTOP_RETAGUARDA_CADASTROS: '/desktop/retaguarda/cadastros',
  DESKTOP_RETAGUARDA_FINANCEIRO: '/desktop/retaguarda/financeiro',
  DESKTOP_RETAGUARDA_OPERACOES: '/desktop/retaguarda/operacoes',
  DESKTOP_RETAGUARDA_FERRAMENTAS: '/desktop/retaguarda/ferramentas',
  DESKTOP_FRENTEDELOJA: '/desktop/frentedeloja',
  DESKTOP_FRENTEDELOJA_OPERACOES: '/desktop/frentedeloja/operacoes',
  DESKTOP_FRENTEDELOJA_CADASTROS: '/desktop/frentedeloja/cadastros',
  DESKTOP_FRENTEDELOJA_FERRAMENTAS: '/desktop/frentedeloja/ferramentas',
  VALUATIONS: '/valuations',
}