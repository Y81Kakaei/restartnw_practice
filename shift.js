//shifting the elements one move front. 
var x = [2, 1, 6, 4, -7];
var last = x[x.length - 1];
for (var i = x.length -1; i > 0; i--){
  x[i] = x[i-1];
}
x[0] = last


console.log(x);
