if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let s={};const f=e=>i(e,d),b={module:{uri:d},exports:s,require:f};a[d]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"17ad7ab50647678c2d52.png",revision:null},{url:"465.bundle.js",revision:"aae6471c79231dcd672a93ebe59e683e"},{url:"522.styles.css",revision:"849604eab63c9ddad073aa9c8df4a6bb"},{url:"655.bundle.js",revision:"48ce72fd39e9d5bce95307d263052820"},{url:"740.bundle.js",revision:"a6d2caf1c99c48e26aa288461a663fd1"},{url:"747.bundle.js",revision:"e6ac94d7f70a318cae94cc7af9e9cf14"},{url:"747.bundle.js.LICENSE.txt",revision:"98a6f719a0e699ad3742fe588fbb3788"},{url:"app.webmanifest",revision:"3480228e4ab926d85e6e2ed202da0422"},{url:"app~069c28ab.bundle.js",revision:"ad96384a0bd8cb58ba3fff1eae1f2bfc"},{url:"app~069c28ab.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~166a29e1.bundle.js",revision:"b5824c868e8b925b97c9d3ef89a8ce2d"},{url:"app~166a29e1.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~3f1342a5.bundle.js",revision:"9552effbf9aa854afc10ce7934a7514d"},{url:"app~3f1342a5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"b7a8e6b9f3b24518b8460ca44898ea54"},{url:"app~4e5ec22b.styles.css",revision:"6857e1eab4328e283945b4461a1047bc"},{url:"app~55487c2e.bundle.js",revision:"8ece85198c4ca0095a69bfcefa13a547"},{url:"app~a51fa3f5.bundle.js",revision:"36a4875bf85a7ee3e88b50a98cf719ab"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"ae62552800c8f63ae7d52b60a4f9f655"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"79045925f54bfe3e4d941334a44b0b69"},{url:"favicon.ico",revision:"59aff8b81d2477a7d386ac3b5db7686c"},{url:"icons/icon-16x16.png",revision:"c5bd2aa5add539975c90e0f9962a5a3b"},{url:"icons/icon-192x192.png",revision:"dd5e2b34bc26f9159fda173b95379813"},{url:"icons/icon-32x32.png",revision:"b377d2e302c095a5d2b37b0f68777ca7"},{url:"icons/icon-512x512.png",revision:"351b57d87d4f4d1fadced228db74b1dc"},{url:"images/Gizi-Kurang.webp",revision:"0bb5f8c11f72cfc697ad52885fc88ddd"},{url:"images/Gizi-Lebih.webp",revision:"2f341b09dd8dd6f92ff530826220f466"},{url:"images/Gizi-baik.webp",revision:"c4d3a344eaae185cf91d5481410b808a"},{url:"images/Group 33.png",revision:"3cdf98141c19ccbf9fe9d66778075b76"},{url:"images/Group 3473674.png",revision:"1605396983852e45dcb6fac6aa7e9709"},{url:"images/Group 3473678.png",revision:"37653e8c0c6183cc48d86330e6153227"},{url:"images/Logo.png",revision:"5e3b90768bce06819dda5c2fff792e65"},{url:"images/Vector Group.png",revision:"cfd1aaf8aa172127d1f06217c4a06f9c"},{url:"images/Vector-1.png",revision:"749733533fc60b4990f86ef95892ce99"},{url:"images/Vector-2.png",revision:"f216a6e45b73302f300b4ea2a19ced75"},{url:"images/Vector.png",revision:"ddb5cc29a9115eb8ac81a9d90eec9bf7"},{url:"images/advisor.jpg",revision:"6aecd7dcb2a9c8543e0e6b593744ff2e"},{url:"images/doc1-large.jpg",revision:"66ab7409e62db3d56366e05a5c89d24e"},{url:"images/doc1-small.jpg",revision:"741af5c0cb167b08e0f23803c0008ea5"},{url:"images/doc2-large.jpg",revision:"ad3a54d7320cf3918796d5361bc73e58"},{url:"images/doc2-small.jpg",revision:"fde1a13e7a3ced22635794e3c9a57fb5"},{url:"images/doc3-large.jpg",revision:"7db40ed9ec92e6ba20a93f43583fc8ee"},{url:"images/doc3-small.jpg",revision:"9bf28f292f00aaf27beb11a30c360d6a"},{url:"images/empty.webp",revision:"e39b76ad252c76409c154b03b84a985b"},{url:"images/female.svg",revision:"8a89d4ccb8dac1e9a87d981e38516af7"},{url:"images/fery-large.webp",revision:"2d9d7056e9873075666d414ccc699695"},{url:"images/fery-small.webp",revision:"4273c3277c0417c4755b783c4005144d"},{url:"images/firza.jpg",revision:"fbc83c2de07837f8edb6eb2b01720f61"},{url:"images/fotomakanan.png",revision:"483a5ed1075a51cc824e388f62f2d6b0"},{url:"images/icon artikel.png",revision:"3114a3b152c991eac107039083625a76"},{url:"images/icon kalkulator.png",revision:"9f3dcbcbd61ac1db5298dfa814c8eee5"},{url:"images/icon makanan.png",revision:"9ead0254c88d28e53e6839b009ccf1af"},{url:"images/not_found.png",revision:"b17f4ea7dfa02dc1a00693e76789e784"},{url:"images/periksa_gizi.png",revision:"87b7862211e6481b57356d3b2ffa9dd4"},{url:"images/profile-fery.jpg",revision:"0ed40fe9f98749ee593ccc039a33dfd2"},{url:"images/rizq.jpg",revision:"b0f1841ab6918d1a65392cb08c3fe969"},{url:"images/tes/doc1-large.webp",revision:"0c5c4636a3c58c835c3ca5684b1f6421"},{url:"images/tes/doc1-small.webp",revision:"23752e8d230db1e9b5f3df9995e85fc3"},{url:"images/tes/doc1.webp",revision:"3de3186366c378c2ecc26dcfe2d3e86d"},{url:"images/tes/doc2-large.webp",revision:"6e489d4670faecaf3f79fce88426766e"},{url:"images/tes/doc2-small.webp",revision:"8c2e63c1fb4b5bf33efe2b5e21c5a7f9"},{url:"images/tes/doc2.webp",revision:"03008fe29e0aa1f70a73217eced81b64"},{url:"images/tes/doc3-large.webp",revision:"3f213a5d6f8076d9f89428253419720a"},{url:"images/tes/doc3-small.webp",revision:"5323d2675aeb59ccc5ce162e2d22e476"},{url:"images/tes/doc3.webp",revision:"70522d32fecab7e055d2a9d05b442d35"},{url:"images/undraw_family_vg76 2.png",revision:"f79bb960afaa00db1cf0609d5feade16"},{url:"images/undraw_fatherhood_-7-i19 2.png",revision:"2ba23a1dce00f0dce5fb203f1e95db96"},{url:"index.html",revision:"c6bc1188b2a35689d52898a1996b050b"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://api.stuntcare.my.id")),new e.StaleWhileRevalidate({cacheName:"stuntcare-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
