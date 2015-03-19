// Example Four

var _ = require('underscore');
var tmpl = require('./template.hbs');
var $ = require('jquery');
var countUp = require('countUp.js');

var numbers = [10, 13, 9, 3, 4, 6, 0, 14];

var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);

var body = document.body;

var result = tmpl({'sum': sum});

$('body').html(result);

numberCountUp = new countUp('#result', 0, result);
numberCountUp.shart();

