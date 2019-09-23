// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, nameSlice) {
    return drivers.filter(driver => driver.toLowerCase().slice(0, nameSlice.length) === nameSlice.toLowerCase())
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}