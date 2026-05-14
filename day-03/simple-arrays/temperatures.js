const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35°C:", above35);

// 2. map() Celsius → Fahrenheit
const fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log("In Fahrenheit:", fahrenheitTemps);

// 3. reduce() average temperature
const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature:", averageTemp);

// 4. find() first temperature above 40
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First Above 40°C:", firstAbove40);

// 5. findIndex() of temperature 28
const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28°C:", indexOf28);
