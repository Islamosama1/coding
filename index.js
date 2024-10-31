let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
let sortedStrs = []; //array of sorted strings
//[....]
strs.forEach((str) => {
  sortedStrs.push([...str].sort().join(""));
});

function getKey(str) {
  // act -> [a,c,t] -> [a,c,t] -> act
  return str.split("").sort().join("");
}

console.log(getKey("act"));

function groupAnagrams(strs) {
  function getKey(str) {
    // act -> [a,c,t] -> [a,c,t] -> act
    return str.split("").sort().join("");
  }

  const buckets = {};

  for (let el of strs) {
    let key = getKey(el);
    if (!buckets[key]) {
      buckets[key] = [el];
    } else {
      buckets[key].push(el);
    }
  }
  return buckets;
}
console.log(groupAnagrams(strs));
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr[0][0])
// console.log(arr[0].includes(3))
// console.log(sortedStrs)
// console.log(strs)
