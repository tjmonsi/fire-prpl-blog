
export default {
  'landing-page': () => { return import(/* webpackChunkName: "landing-page" */ 'senti-module/pages/landing-page') }, 
'login-page': () => { return import(/* webpackChunkName: "login-page" */ 'senti-module/pages/login-page') }, 
'middleware-all': () => { return import(/* webpackChunkName: "middleware-all" */ 'senti-module/middlewares/middleware-all') }, 
'auth-middleware': () => { return import(/* webpackChunkName: "auth-middleware" */ 'senti-module/middlewares/auth-middleware') }
}
  