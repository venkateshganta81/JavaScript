var hidden = true;
var x = null;
var name = "venkatesh";
name = 20;
var y;
y = "askjdfk";
var employee = {};
employee.name = "Venkatesh";
console.log("employee name", employee.name);
var ab = ["jdhhsbgjhds", "dshfbhsd", "kjjdhsfbsjkd", "dsjhgfhsd", "djshgfs"];
var data = [
    {
        id: 'jjjjgfghc165',
        name: 'kndsjfbdskjb',
        age: 45,
        designation: 'ghasdffjuasgdfju',
        salary: 897498234
    }, {
        id: 'jjjjgfghc165',
        name: 'kndsjfbdskjb',
        age: 45,
        designation: 'ghasdffjuasgdfju',
        salary: 897498234
    }, {
        id: 'jjjjgfghc165',
        name: 'kndsjfbdskjb',
        age: 45,
        designation: 'ghasdffjuasgdfju',
        salary: 897498234
    }, {
        id: 'jjjjgfghc165',
        name: 'kndsjfbdskjb',
        age: 45,
        designation: 'ghasdffjuasgdfju',
        salary: 897498234
    }, {
        id: 'jjjjgfghc165',
        name: 'kndsjfbdskjb',
        age: 45,
        designation: 'ghasdffjuasgdfju',
        salary: 897498234
    }];
/* for(decl/def;condition check;manipulation) */
/* i=i+1; */
var i;
console.log("data variable length", data.length);
/* for(i=0;i<data.length;i++){
    console.log(data[i]);
} */
i = 0;
/* while(condition check){ ----------; manipulation  } */
/* while(i<data.length){
    console.log(i);
    console.log(data[i]);
    i++;
    console.log(i)
}
i=0;
do{
    console.log(i);
    console.log(data[i]);
    i++;
    console.log(i);
}while(i<data.length) */
data = [];
/* && (and) --> 
true && true --> true;
true && false --> false;
false && false -->false;
false && false --> false;
 */

/*  || (Or)
 true || true --> true;
true || false --> true;
false || false -->true;
false || false --> false;
 */


if (1) {
    console.log("In If statement", !data.length);
} else if (1) {
    console.log("In else if statement", data.length);
} else {
    console.log("In else");
}

if (data.length && data !==null) {
    console.log("In If statement", !data.length);
} 
if (1) {
    console.log("In second  if statement", data.length);
} else {
    console.log("In else");
}

var a = [1, 2, 3, 4, 5, 6];

function multiply(x,y){
    console.log(x*y);
}
multiply(10,20);
var fact = 1;
factorial = function (x){
    fact = fact * x;
    if(x>1){
        factorial(x-1);
    }
    return fact;
}

a = [10,20,30,40,50];
var i;
for(i=0;a[i];i++);
a = "MTW labs goods is a  company gun o liveon die";
b = "good";
i = a.indexOf("good")
/* if(a.indexOf("good")>=0){
    console.log("String Found",i);
}else{
    console.log("String not Found")
} */
/* var y = factorial(5); */
/* console.log(factorial(5)); */
var count =0;
for(var i=0 ;i<b.length ;i ++){
    for(var j=0;j<a.length ; j++){
        if(b[i] == a[j]){
            count++;
        }
    }
}
if(count == b.length){
    console.log("String found")
}



a=0;b=1;
x=40;
var c=0;
for(var i=0;c<40;i++){
    if(i==0){
        console.log(a);
        console.log(b);
    }
    c = a + b;
    a=b;
    b=c;   
    console.log(c);
}

var d=2;
var i;

for(var j=2;j<100;j++){
for(i =2;i<j;i++){
    if( j%i ==0 ){
        console.log(i)
        break;
    }
}
if(i==d){
    console.log("Prime Number")
}else{
    cjnsole.log(" Not Prime Number")
}
}





/*  0,1 , 1,2,3,5,8,13,21,34 ...  */

/* 5*4*3*2*1 */