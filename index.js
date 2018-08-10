// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
drivers.push("Ralph");
}

function destructivelyPrependDriver() {
drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
drivers.pop();
}

function destructivelyRemoveFirstDriver() {
drivers.shift();
}

function appendDriver(name) {
var newDrivers = [...drivers]
newDrivers.push(name);
return newDrivers;
}

function prependDriver(name) {
var newDrivers = [...drivers]
newDrivers.unshift("Broom");
return newDrivers;
}
