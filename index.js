// Code your solution here

function findMatching(arr, str) {
    let name = new RegExp(str, 'i')
    return arr.filter(n => n.match(name))
}

function fuzzyMatch(arr, str) {
    let name = new RegExp('^' + str)
    return arr.filter(n => n.match(name))
}

function matchName(arr, str) {
    return arr.filter(obj => obj["name"] === str)
}