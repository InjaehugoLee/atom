var fs = require('fs'); //함수호출
console.log('첫째에요');
var data = fs.readFileSync('sample.txt', {encoding: 'utf8'})
console.log(data);
console.log('둘째에요');
console.log('셋째에요');
