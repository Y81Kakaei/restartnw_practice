var arr = [2, 1, 5, 9, 15, 98, 102];

var max_1 = arr[0];
var max_2 = -Infinity;
var max_3 = -Infinity;
for(var i = 0; i < arr.length; i++){
  if (arr[i] > max_1) {
    max_1 = arr[i];
  }
}

for( var j =0; j < arr.length; j++){
  if (arr[j] > max_2 && arr[j] < max_1){
    max_2 = arr[j];
  }

}

for (var k = 0; k < array.length; k++) {
  if (arr[k] > max_3 && arr[k] < max_2){
    max_3 = arr[i];
  }

}



console.log(max_3);
