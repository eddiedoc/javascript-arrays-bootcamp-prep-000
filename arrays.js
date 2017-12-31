var chocolateBars = ['Snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, el) {
  var array2 = [el,...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array, el) {
  var array2 = [...array2,el];
  return array2;
}

function destructivelyAddElementToEndOfArray(array, el) {
  array.push(el);
  return array;
}