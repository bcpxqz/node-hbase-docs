/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-de54ce90a816c7408c3a.js"
  },
  {
    "url": "app-0064deef1401e7b5d999.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6ffa244e506ffe683f64.js"
  },
  {
    "url": "index.html",
    "revision": "7a1051fb3218a756ec144398eabc008d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c6a9bd5a7196d3b5a7bde53933e99f44"
  },
  {
    "url": "0.1df9e6b3b5377e82c49c.css"
  },
  {
    "url": "1.9349ed57909343554668.css"
  },
  {
    "url": "1-34cbc434d0651be07589.js"
  },
  {
    "url": "component---src-templates-page-js-d65fb67e82393f8a144f.js"
  },
  {
    "url": "0-5d29a934e5dd7b5f860b.js"
  },
  {
    "url": "static/d/144/path---index-6a9-YaVpUuHF98vN6q4r280MReLlQ.json",
    "revision": "35cc1c2630258faadee4f2d3d1f3f932"
  },
  {
    "url": "component---src-pages-404-js-af839e066e41b542c313.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0b2a59ede1e2adc9227dc9eb7024c1e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});