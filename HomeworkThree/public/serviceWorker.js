const staticVMV = "cache_web_app_upf";

const assets = [
    "/",
    "/index.html",
    "/assets/Colheita1.jpg",
    "/assets/Lenha1.jpg",
    "/main.js",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticVMV).then(cache => {
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