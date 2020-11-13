var http = require('http')
var server = http.createServer();
var express = require('express')
var app = express()
app.set('view engine', 'pug');
app.set('views', './html');
app.locals.pretty = true;
server.on('request', doRequest);
//server.listen(3005);
function doRequest(req, res){
  res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'})
  res.write('Hi, 안녕하세요. ㅎㅎ 되네용\n')
  res.write('오늘은 뺴뱨로데이\n')
  res.end();
}
app.use(express.static('data'));
app.use(express.static('data1'));
app.get('/',function(req, res){
  res.send('<h1>여기는 메인<br> 홈페이지입니다.<h1>')
});
app.get('/topic',function(req, res){
  res.send('여기는 토픽 페이지입니다.')
});
app.get('/pug',function(req, res){
  res.render('news', {tl:'머릿말 입니다.'})
});
app.get('/dynamic',function(req, res){
  // var sp = ''; //빈 문자열
  // for(var i=0; i<10; i++){
  //   sp=sp+ `<h1>안알랴줌!!!<h1><br>`  //특이한 그레이브 부호
  // }
  // res.send(sp);
  res.send(`
    <script>  alert('안녕')
    yesorno=confirm('당신은 남자입니까?')
    document.open()
    if(yesorno==true)
    document.write("당신은<font color=red>남성</font>입니다.")
    else
    document.write("당신은<font color=blue>여성</font>입니다.")
     </script> `);
});
app.get('/num',function(req, res){
  var s = ''; //빈 문자열
  for(var j=1; j<13; j++){
    s=s+ `<h1>${j} 월<br><h1>`  //특이한 그레이브 부호
  }
  res.send(s);
});

app.get('/1',function(req, res){
  var k = ''; // 빈 문자열
  k=k+ `<ha> 그런가봐 <h1>`
  res.send(k);
});

app.listen(3003,function(){
  console.log('server is running 3003');
})
