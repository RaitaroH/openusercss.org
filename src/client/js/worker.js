// import toolbox from 'sw-toolbox'
import WorkboxSW from 'workbox-sw'

const workbox = new WorkboxSW()

workbox.router.registerRoute(
  /^https?:\/\/.*$/,
  workbox.strategies.staleWhileRevalidate()
)

// eslint-disable-next-line no-undef
/* addEventListener('message', ({data}) => {
  const {action, route} = data

  if (action === 'cache-route') {
    // toolbox.cache(route)
    console.log('Would cache', route)
  }
}) */

workbox.precache([])
/* toolbox.options.cache = {
  'name':          'ouc-assets',
  'maxAgeSeconds': 60 * 60 * 24 * 30
}

toolbox.precache([
  '/',
  '/login',
  '/register',
  '/search',
  '/img/image-error-x128.png',
  '/img/main.bg-x128.png',
  '/img/openusercss.icon-x16.png'
]) */

// toolbox.router.get(/^https?:\/\/localhost:312.\/.*/, toolbox.networkOnly)
// toolbox.router.get(/^https?:\/\/.*$/, toolbox.cacheFirst)
