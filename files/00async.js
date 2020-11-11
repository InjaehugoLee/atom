var fs = require('fs');
console.log('첫째에요');
var data = fs.readFile('sample.txt', {encoding: 'utf8'},function(err,data){
if (err) throw err;
console.log(data);
})
console.log('둘째에요');
console.log('셋째에요');
