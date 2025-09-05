function getIndexToIns(arr,number) {
  arr.sort((a,b) => a - b);
  return arr.findIndex((a) => a >= number);
}

console.log(getIndexToIns([1,2,3,4], 1.5));
console.log(getIndexToIns([20,3,5],19));
