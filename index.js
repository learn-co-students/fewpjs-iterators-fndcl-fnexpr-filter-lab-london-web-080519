// Code your solution here

let findMatching = (arr, str) => {
  return arr.filter(item => {
    return item.toLowerCase() == str.toLowerCase();
  });
};

let fuzzyMatch = (arr, str) => {
  return arr.filter(item => {
    return item.slice(0, str.length).toLowerCase() == str.toLowerCase();
  });
};

let matchName = (arr, str) => {
  return arr.filter(item => {
    return item.name == str;
  });
};
