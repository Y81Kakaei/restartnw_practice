//forward solution.
var n = 3;
var prod = 1;
for (var i = 1; i < n ; i++){
  prod = prod * i ;
  consol.log(i)

}
console.log(prod);

//backward solution.
var n = 6;
var prod = 1;
for (var i = n; i >=1 ; i--){
  prod = prod * i;
  console.log(i);
}

console.log(prod);
