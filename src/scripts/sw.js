import { precacheAndRoute } from 'workbox-precaching'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { registerRoute } from 'workbox-routing'
import CONFIG from './globals/config'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

registerRoute(
  ({ url }) => url.origin,
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_NAME,
  })
)

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed')
})
