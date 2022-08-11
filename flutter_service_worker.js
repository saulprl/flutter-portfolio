'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "904b8097a8df68c0199fd549b2fcfc60",
".git/config": "153511e66ee0cc48d311df632f278eb2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "33127571be352888ac7a8fd3fea70737",
".git/HEAD": "764993dc730f354a96cc2e930cbf3162",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff84be694010e2febc96b3f046389fbe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c180fbfc3c005e320e87eea63f07a315",
".git/logs/refs/heads/main": "373e78aa9c440f249583b8973e2c42b9",
".git/logs/refs/heads/ph-test": "39cf78ea6151a414a94e8a3486f00dbe",
".git/logs/refs/remotes/origin/main": "e7e7ceb688b28b21dd84dc8914609735",
".git/logs/refs/remotes/origin/ph-test": "7d9fc45d8c136ced9104d175c11132d0",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/6fbd957b806a674100830cff109ce6733e285b": "58a71725e433596736f0f9017bfe62aa",
".git/objects/05/40c08b6e400321b3e0e5c577e697b5a80244e2": "8b5562dbd25a54b0a662521783c24be0",
".git/objects/06/92151766b08014311dc9d96d256550567d91ee": "b180382ad7b9a5c405835ffa0380eb5f",
".git/objects/0a/04da8ced5157dbb0d84618a977c98d24dea88b": "33608b8ad10c0af8cf91446b9a03c755",
".git/objects/0a/bde3f60e1a138c5daa95373ee9e57fd7fcf681": "f9f8bc59b048a26db03345b601c90068",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/6b0b3b9a31b4f572ce0a63c0c3d36e89566eca": "4623db40b700fa4c9e78643898fbdaf4",
".git/objects/11/d198352ec7e733bf22de6cd7a4e2f560981503": "dcec53c0c0c7bb0a015b1d6ef86b550d",
".git/objects/15/f008515ce45bd164c5da158631885fe7794957": "6723a429c9b39ec7d720a18d0c4be988",
".git/objects/1c/193b494578d553d70498b6c6886b72a1320d94": "a58763bc5c67bfb89773a3f68112d1cc",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/22/543370fa8e66a1e9e24e034f390b29df255d14": "8c85b5f29956b3629e9f3be68de29d13",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/4339d9756636032062b10aa195581c7df098b4": "d05988fd3b6ae3a1f7eb74050c09e939",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/28/5885974a3d39b5637e3b9eb3487538ba8d6b38": "2e2c20ac35534982954af5270fe466f9",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/af7002db66fb8e62a356a3aab3401f2c25b9d7": "07b1a93014f9280d4b20256db9fb63c3",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/0640bd109fdcfed606ff711efa4f37a8cc4845": "da7a920247e2481fa5d64d3d6ddba3c0",
".git/objects/33/2cdde55d2ae0ecbae1f2e9992e71cd2d9b091e": "96eefef1d0ddde711f7d26e0d38dfef6",
".git/objects/36/78e288150588d0e217d531cc588e9b90b1c88a": "cc0fd1ba2687f6856e0cfc891e774dd6",
".git/objects/36/a021c00170bca9d575a230399e65ffa80a389e": "08c9d39c96dd8d027b0993d9c91cd4ef",
".git/objects/37/7b14d5f3db53aa103feea2fb10dec12ab4d3b8": "f29e2c3f64b7794dfc25296b2fba3aab",
".git/objects/3b/b513f992200a1dac40498f0d6f0f59a79aa415": "c22d1df4ba465249dbc72fa50144872b",
".git/objects/3c/9055b56000501a4cc08f2cd821a538491f792d": "ec71f2ee5e0add806d650f15f9ba66c3",
".git/objects/41/3aeda92644e4322733615c77dd281f455081a8": "e647de4050ae8cb35037d9aa2bf36754",
".git/objects/46/372b57d63d209fec0d13ca2cc7bbed04f0f511": "76dead184cfd548e04ac4901f05c1d3e",
".git/objects/47/4b72a8966641a1624068dfc15b1631ad6d16db": "d6d332e18207d6f0f54ba83973d0a80f",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4b/60e322a9295c47208657092b64de1291756ccc": "5bf4a7760e9bd283f51dc0c5d637b95b",
".git/objects/4b/fa607c28f6309838f2e3b4796c2c830f53ac9c": "4b673aa59c95fbf8b696c660438862c0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/07ef41904048cb181cb2e38e33e3eb9497435e": "d4528131c9856312501821b773542abd",
".git/objects/50/c13201be71d584e0210490a4fae7c993cc618c": "5f53b99cc58547162c0385565f390477",
".git/objects/54/3bc8905ce60ab7a6397626235d07e3a4b9f0e4": "affca9378b3d6a9743382a9c007c369b",
".git/objects/56/dac46502350622a63b3504ecbf6da808aa8319": "ce67b916d11d015cce86ebee677896df",
".git/objects/5e/bb11c4784c2a4c8622b281c4e40df2acfe59e7": "60a5460349803e13c26505eef8fd5e62",
".git/objects/63/3982206ee6293cea965420d4fdd8ca2f6f868a": "2459ae77bdce537eaa99ca352f1cda3d",
".git/objects/64/cc28692a2e237be8f7dd11734ebad92b0a3830": "d832ae81e4fc4f4efdb2b829bca09490",
".git/objects/72/1207319c8e12cc7d54d313205cd3e85058ba3f": "ebe887707874043611a868f4ba90c9b7",
".git/objects/72/44157b9cc540f6e7bb2fd42fa63606791900f6": "f76358316399507bbdfeee9b7bc65f1d",
".git/objects/73/719a41e8dd843ee04660d918f8c25fbc75575c": "0d6e0f5bfb73fcbe17cdd435711af0b8",
".git/objects/74/8d084238bd11698c71149078bd664bbc134917": "36769a78e87c252b82b2d0b9a3cbc98f",
".git/objects/76/346b48386a08c6f749bc3639c25bbe88de9ece": "0ff887f1bd7707822cf8ce0a22835b72",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/2f4741d4d985b1e48268e049c69e4630ca3fbb": "66fe58d64350b90ef7af7914a24777bc",
".git/objects/86/3718a90c77b0aeb4a532c953b06029e59d0886": "0e3138e8ac465f775bf19bd0466f4719",
".git/objects/88/4e47ff2848c4fa6161431e44e40e370dc4c3d9": "0ba9d058a6f1b0b3c24cf0b1a5d5119d",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/87b5f8f011c635bc104ab5c7e4dff43a18baf1": "431f4abf9d4d328d3e026e4a9f96f3ce",
".git/objects/8e/1100d1f1c928105ac6911b6da3be9d2a0d5ea2": "cac3f8a4a3b8c67025d940b73eb90f18",
".git/objects/8e/5d19ac1d5b4924c67b38b60ad8ef812bcbad6e": "7bfea54f04918eee6d648cef03197cdd",
".git/objects/96/5d18cf4ccd886319ca37bef2861d4ad576dc8f": "f551c0922a59faaa3607224d2e09dca3",
".git/objects/98/474068aa1b239e1048be234b959bb9b3d1c3a0": "53cad8c60a9671db691bfac865e7eb9f",
".git/objects/98/92b84e4f04f9cabf0376fb785905a16bfcffeb": "55f54713267b5313854d993dca8d338b",
".git/objects/a0/27dad270be2eb8dbc8c1b4a85d95a954a66b9b": "6eaf7f37aa44a4645968b90ee4085dc2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/42c78ae2670a35b50755a130b9f6782f543092": "cb886fc32de689d16d654485f5955af8",
".git/objects/a6/e40e7721517754b48031588bf4b02589a9d7aa": "af5b1b23d35c436124163785dd712384",
".git/objects/ad/4d92ab5ec64efb7e8615559fa90e77e8fab540": "ba99c8bbe2b35203eec41eec6794c4ef",
".git/objects/b1/3d7169b63b3e3d94bcd050fb13eab8fb35df51": "e295a7259a78ac889a3c064769b1368c",
".git/objects/b1/ad5dff2e4e241431ab57b519b8f2b13ab50619": "0b674477f93cda585c9ec5a4b5fc60dc",
".git/objects/b6/9edcdb44b7c002a6225d16a93f77914b3bf9d4": "223b39d2d90543f7a4a8ef867c0b4013",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/dc4402cbab42f66a1573761f537c06e6f8d089": "95348d0477295189a96e44b58682c5be",
".git/objects/bc/d9d770312dd5c0e6237fb1dbf201a8e1537391": "43a4ec294d7db523ade60415f55d5083",
".git/objects/bf/3f59f47f185149a7133ba08b9b38b9a67c5426": "eed92a58cd423ecc5c9bcab6652cf4d3",
".git/objects/bf/4edd8d144fa17bd63f17629aaa814eed0a676b": "0d967fa1230ae428ac8b14953c735d3f",
".git/objects/c6/4ad1c8b82fb99ebb949ac8c28c00de6b75e08e": "71d6dc7aeaa561f4380e512dd7546b0b",
".git/objects/c7/1c38d56cb1e54a455007765fd5a93b59e9e049": "c1e5ea6b735b36ac5386ec725be21bb7",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/28d5c0de4844d15216e405278144d41a8ae481": "b00109726ed48630f703121ff832e25e",
".git/objects/d3/54e4f08339dd907c8f5b3b2f9e0ea44a7caa82": "10e2c9dd8c5b717421fd0a04f2271a4a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/18043fe39a69b5658ceff2f6508b7759c0fc3d": "1e63c53ce157c56025627133bd737e31",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/8adfe7bacd50b2d316f6464ad74e0e782372ef": "1c724a11051dc3a6fc4e4dc1274b06bb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/7fd64f9947561d3514fae2f83216bf9aa5d186": "4d9ab47a75ba3c8366384d0d11f5d359",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/5246388272dbda019feaa177a1416e80848c20": "d15ab0d6c7a790f75f1f526bdfd2e0aa",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/fb/dc3c49781acdad1de3ea75a2c80fea9b4a216e": "d7920ed43bfac054a2d2fedbb930a44f",
".git/objects/fc/d65834d7de25cd37d35b09e9ca5d4290861409": "d9a3e7c72dcf41d7a7395072bc3cfb2a",
".git/objects/fe/4743db600dbb8062912786f0710f08debf7965": "e40e3033c2cb97e6ab5c9bfe79ce2d8e",
".git/objects/fe/91b1b414152b9f46c389bcbaa39ca355eaa7e6": "d753c1b64b7a8c3bef5ddbb872fd212e",
".git/objects/ff/2e74a2ba18a43bd8663fa5f14c37f2e2b54bdc": "e554bbcb4d4fa417d5c4cf26e1809f63",
".git/ORIG_HEAD": "3dfa8c2155216a45db0c0e1932fd6987",
".git/refs/heads/main": "f8eb359461098e22e42aa4b429b9fe7e",
".git/refs/heads/ph-test": "613bb93a767503e4ee88c5d9c38d16e9",
".git/refs/remotes/origin/main": "f8eb359461098e22e42aa4b429b9fe7e",
".git/refs/remotes/origin/ph-test": "613bb93a767503e4ee88c5d9c38d16e9",
"assets/AssetManifest.json": "8a282c85f35f823f4d7e21595506f0e4",
"assets/assets/img/Flag_of_Mexico.png": "5081fd7df74313a09d2ad2bd7d6e0ff0",
"assets/assets/img/flutter-icon.png": "f0ecf5b601b1c99977082ec847b75dce",
"assets/assets/img/moody-notes-icon.png": "d2122ed63c696ec33617f69c038398b1",
"assets/assets/img/no-image.png": "caece550252f04bbf884d58279c1255a",
"assets/assets/img/portfolio_picture.jpg": "971d6aba380d49102b1d72d50abc0337",
"assets/assets/img/portfolio_picture_decompressed.jpg": "3dfdedcbd6224e86534881d9cfa555e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "65624a1f6dbdc670c2051ed2f851be0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41f5a8b8f0f57cb8205729e81f4ab788",
"/": "41f5a8b8f0f57cb8205729e81f4ab788",
"LICENSE": "e62637ea8a114355b985fd86c9ffbd6e",
"main.dart.js": "1991510e2fa964193232367b51a369e3",
"manifest.json": "a4a92be28b36e7b0723ea14d1724e028",
"version.json": "3bf8200d2484a64931ee3e0244e57d0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
