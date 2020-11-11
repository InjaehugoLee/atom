var arr = ['Hugo','male','age'];

var o={
  'name' : 'Hugo',
  'gender' : 'male',
  'age' : '20'
};
// o라는 오브젝트 안에 있는 x에 담는다.
for(var x in o){
  console.log(x, o[x]);

}
console.log(o.name, o['name']);
