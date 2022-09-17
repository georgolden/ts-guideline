const { sum, Summator } = require('./src/sum.js');

sum(1, 2);

// Uncomment to receive an error
// sum('s', 's');

const summator = new Summator(1, 2, 3);

summator.summary();
