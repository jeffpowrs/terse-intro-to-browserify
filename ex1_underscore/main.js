// Example One

var _ = require('underscore');
var util = require('util');

var numbers = [10, 13, 9, 3, 4, 6, 0, 14];

var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);

var result = document.querySelector('#result');
result.textContent = util.format('Sum : %s', sum);
