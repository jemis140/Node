
const lodashm = require('lodash')
const a = [1, [2, [3, [4]]]]

newArray = lodashm.flatMapDeep(a);
console.log(newArray);