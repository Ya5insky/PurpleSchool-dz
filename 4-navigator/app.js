const addressLat = 37;
const addressLong = 45;
const positionLat = 27;
const positionLong = 38;

let diagonal = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log(diagonal);