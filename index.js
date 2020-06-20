// Code your solution here

function findMatching (drivers, driverName) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === driverName.toUpperCase()
  })
}

function fuzzyMatch(drivers, charsToMatch) {
  return drivers.filter(function(driver) {
    return driver.slice(0, charsToMatch.length) === charsToMatch
  })
}

function matchName(drivers, driverName) {
  return drivers.filter(function(driverObj) {
    return driverObj.name === driverName
  })
}