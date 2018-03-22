module.exports = function getZerosCount(number, base) {
k=0;var a=[];
  nextPrime:
  for (var i = 2; i < 250; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

  a[k]=i;k++;
  }
  node=0;s=0;k=0;
for (i=0;i<a.length ;i++){
  if (base % a[i]==0){k=0;
  while (base % a[i]==0){
    base=base/a[i];
    k++;

nod=a[i];
}}}


  for (i=nod;i<=number;i= i*nod){
      s=s+Math.floor(number/i);
    }
return Math.floor(s/k);
}
