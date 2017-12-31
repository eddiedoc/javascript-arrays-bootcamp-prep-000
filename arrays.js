var chocolateBars = ['Snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, el) {
  var array2 = array.unshift(el);
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  var array2 = array.shift(el);
  return array2;
}