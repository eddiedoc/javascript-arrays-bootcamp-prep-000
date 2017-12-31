var chocolateBars = ['Snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, el) {
  var array2 = [el,...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  var array2 = [el,...array];
  return array2;
}