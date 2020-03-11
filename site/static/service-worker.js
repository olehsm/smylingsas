const staticSmylingsas = "smylingsas-net-asset-cache-v1"


const assets = [
  "/",
  "/index.html",
  "/style/style.css",
  "/js/app.js",
]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSmylingsas).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })