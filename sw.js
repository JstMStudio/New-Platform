// Change this to your repository name
var GHPATH = '/New-Platform';
 
// Choose a different app prefix name
var APP_PREFIX = 'jstmstudio';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_569a5334c2da805a323ceb937c062d6e17e68567';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${English}/`,
  `${English}/index.html`,
  `${English}/home.html`
]
