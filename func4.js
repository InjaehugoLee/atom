var ok = {
  k1:'v1',
  k2:'v2',
  f1:function(){
    console.log(ok.k1);
  },
  f2:function(){
    console.log(ok.k2);
  }
};
ok.f1();
ok.f2();
