const minLng = -71.6; // Minimum longitude
const maxLng = -71.54; // Maximum longitude
const minLat = -33.03; // Minimum latitude
const maxLat = -33.01; // Maximum latitude

export const addressPoints = [
  [-71.54599734634539, -33.01803121323585, Math.floor(Math.random() * 501) + 500],
  [-71.54465164766788, -33.01825654780948, Math.floor(Math.random() * 501) + 500],
  [-71.54641489353811, -33.01875922833267, Math.floor(Math.random() * 501) + 500],
  [-71.54669701287752, -33.01935061351519, Math.floor(Math.random() * 501) + 500],
  [-71.54888343775589, -33.01018369743598, Math.floor(Math.random() * 501) + 500],
  [-71.54652068829031, -33.01047941928122, Math.floor(Math.random() * 501) + 500],
  [-71.5496240010213, -33.011130003849814, Math.floor(Math.random() * 501) + 500],
  [-71.5468028076297, -33.01145529433382, Math.floor(Math.random() * 501) + 500],
  [-71.5477902253167, -33.0105089914115, Math.floor(Math.random() * 501) + 500],
  [-71.58026944908603, -33.02963671705373, Math.floor(Math.random() * 501) + 500],
  [-71.5717410066938, -33.02865048394356, Math.floor(Math.random() * 501) + 500],
  [-71.57041762770187, -33.027540958502065, Math.floor(Math.random() * 501) + 500],
  [-71.57056466981253, -33.02803408264416, Math.floor(Math.random() * 501) + 500],
  [-71.5713734014185, -33.02809572296883, Math.floor(Math.random() * 501) + 500],

  ...Array.from({ length: 1000 }, () => [
    Math.random() * (maxLng - minLng) + minLng, // Random longitude between minLng and maxLng
    Math.random() * (maxLat - minLat) + minLat, // Random latitude between minLat and maxLat
    Math.floor(Math.random() * 501) + 500 // Random value between 500 and 1000
  ])
];
