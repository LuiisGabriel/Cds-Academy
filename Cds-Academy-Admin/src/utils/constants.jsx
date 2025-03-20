const API_URL = 'http://localhost:4000'
export const API_ROUTES = {
  ADMIN_SIGN_UP: `${API_URL}/auth/admin/signup`,
  USER_SIGN_UP: `${API_URL}/auth/signup`,
  ADMIN_SIGN_IN: `${API_URL}/auth/admin/signin`,
  CREATE_VIDEO: `${API_URL}/auth/createVideo`,
  GET_ADMIN: `${API_URL}/auth/admin/me`,
}

export const APP_ROUTES = {
  SIGN_UP: '/signup',
  USER_SIGN_UP: '/usersignup',
  SIGN_IN: '/signin',
  LANDINGPAGE: '/landingPage',
  PROFILE: '/profile',
  CREATEVIDEO: '/createvideo',
  REGISTERS: '/registers',
}

