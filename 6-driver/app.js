const driverLicense = true;
const age = 19;
const drunk = true;

const drivingCar = (driverLicense && age >= 18 && drunk) ? "может" : "не может";

console.log(drivingCar);