var value = 42;

if (value >= 53){
  value += 42;

}else{
  value -= 13;
}
console.log(value); // value is 29

var string = "11";
value += string;
console.log(value); // value is "2911"

var array = [];

for(var i = 0; i<value.length; i++){
  array.push(value.charAt(i));

  console.log(array);

}
array.shift();
console.log(array);
array.pop();
console.log(array);

for(i = array.length-1; i > 0; i-- ){
   var numString = array[i] + array[i-1];
  console.log(numString);

}

value = parseInt(value);
numString = parseInt(numString);

value = value + numString;

if (value < 60) {
  value = 14;
} else if (value === 2930) {
    value = 27;
} else {
  value = 2;
}
var num = 10;
while( num > 0){
  num -= 1;
  value += 1;
}

console.log(value);


function first(val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.substring(1, val.length);

    return val;

  }
}

console.log(first(value));
