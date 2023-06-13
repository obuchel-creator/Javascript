
// conditional statements
console.log("connected with external JS")
var a=5;
var b=6;
if (a+b<11)
	console.log("Less than 11")
else if (a+b>11)
	console.log("More than 11")
else
	console.log("Equal")

var a=1;
var b=2;

if(a+b>4)
	console.log(a+b);
else if(a+b<1)
	console.log(a+b);
else
	console.log(a+b)

//for loop
 for(var i=0;i<10;i++)
 	console.log("current value of i:"+i);

 // for loop to print even numbers less that eleven

 for(var num=0;num<11;num=num+2)
 	console.log(num);

// For Each Loop
  var a =[1,2,3,4];
  a.forEach(item => console.log(item));
  for (var item in a)
  	console.log(item);

  //operators 
  // Unary Operator
  // increment - to increase the value by 1

  var a=2;
  a++; // postfix assign first then increment 
  2

  ++a; // prefix increment first then assign the value 
  3 

  // Decrement - to decrease the value by 1
  // postfix: first assign the value then decrement
  

  var a=2;
  a--;
  2

  //prefix: first decrement then assign the value

  var a=2;
  --a;
  1
// prefix increment

  var num=0;
  while(num<5)
  {
  	console.log(num);
  	num++; // num =num+1;

  }
  do{
  	console.log(num);
  	num++

  }while(num<5)

  var itr = 10;
  console.log(itr++); //10
  console.log(itr); //11
  console.log(++itr); //12
  console.log(itr);// 12



