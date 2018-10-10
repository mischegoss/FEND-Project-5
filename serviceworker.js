const staticCacheName = "mws-cache"; // stores cache name in variable

// On install, array of files is created
self.addEventListener("install", function(event) {
  event.waitUntil( // waits until  installation is complete
    caches.open(staticCacheName).then(function(cache) {
      return cache
        .addAll([ //array of files
          "./",
          "index.html",
          "restaurant.html",
          "./css/styles.css",
          "./js/main.js",
          "./js/restaurant_info.js",
          "./js/dbhelper.js",
          "restaurants.json",
          "./img/1.jpg",
          "./img/2.jpg",
          "./img/3.jpg",
          "./img/4.jpg",
          "./img/5.jpg",
          "./img/6.jpg",
          "./img/7.jpg",
          "./img/8.jpg",
          "./img/9.jpg",
          "./img/10.jpg",
          "./img/headerimage.jpg"
        ])
        .catch(function(error) {
          console.log("error");
        });
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(  //prevent default fetch event
    caches.match(event.request).then(function(response) { //checks for match
      if (response) return response;
      return fetch(event.request);
    })
  );
});

 
