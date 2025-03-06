const staticPwaADS = "cache_web_app_upf";

const assets = [
    "/",
    "/index.html",
    "/main.css",
    "/panda.png",
    "/sea_turtle.jpg",
    "/main.js",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPwaADS).then(cache => {
            cache.addAll(assets);
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
});