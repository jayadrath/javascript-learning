// convert 2D array to array of objects

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

var [[subject, time, teacher]] = classes;

const classesAsObject = classes.map(([subject, time, teacher]) =>  [{subject, time, teacher}]);
