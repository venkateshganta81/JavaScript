/* var x = document.getElementById("test");
console.log(x);

x.innerHTML = "<h5>Hello</h5>"

var y = document.getElementsByClassName("testclass");
console.log(y)
y[0].innerText ="Class manipulated text"; */
var x, y;

function login() {
    x = document.getElementById('email').value;
    y = document.getElementById('password').value;
    console.log(x, y);
    /* z={
        email : x,
        password : y
} */
}


/* Events */

/* 1.onclick
2.onmouseover
3.onchange
4.onload
5.onmouseout
6.onkeydown */


function eventOnKeyDown(e) {
    console.log(e);
    alert("You pressed " + e.key);
}

function moveHovered() {
    x = document.getElementById('test');
    /* x.style.display = "block"; */
    x.innerText = "Move hovered on button";
}


x = document.getElementById('butn');
function mouseCameOut() {

    x.innerText = "";
    /* x.style.display = "none"; */
}
x.addEventListener("click", function () {
    console.log("skadbhjfjksdbhfkjsd");
})

/* function welcome(){
    alert("Welcome to our page");
} */

function selcted(v) {
    console.log("You have selected " + v);
}



function arithematic(a, b) {
    var result = {
        add: a + b,
        sub: a - b,
        mul: a * b,
        div: a / b,
        rem: a % b
    };
    return result;
}

console.log(arithematic(4, 2));


function conditional(a, b) {
    var result = {
        equ: a == b,
        gre: a > b,
        les: a < b,
        gte: a >= b,
        lte: a <= b,
        ne: a != b
    }
    return result;
}


/* var x = ["Hello", "how", "are", "you"];
x = x.join().toString();
for (var i = 0; i < x.length; i++) {
    if (x[i] == ',') {
        x = x.replace(',', ' ');
    }
}
x = "Hello";
y = "How"; */


details = [
    { name: "Giri", age: 25 },
    { name: 'Harsha', age: 92 },
    { name: 'Praveen', age: 22 },
    { name: 'Venkatesh', age: 26 }
];

function sortAccordingToAge(a) {
    /* var minAge = [];
    a.forEach((detail) => {
        minAge.push(detail.age);
    })
    console.log(minAge)
    return Math.min.apply(null, minAge) */;
    a.sort(function(x,y){ return x.age - y.age })
    return a;

}
console.log(details);
console.log(sortAccordingToAge(details));


/* for (var i = 0; i < 5; i++) {
    x.push(i * i);
} */

/* y = x.pop();
y = x.shift(); */

/* x = [1, 45, 68, 90, 24, 76];
var max = x[0];
var min = x[0];
function findMax(a) {
    return Math.min.apply(null, a);
}
console.log(x); */
/* for (var i = 1; i < x.length; i++) {
    console.log(max, x[i]);
    if (max < x[i]) {
        max = x[i];
    }
    if (min > x[i]) {
        min = x[i]
    }
}
console.log(max, min);


console.log(findMax(x)); */

/* z = x + " " + y;
z = 2 * Math.PI * 4;
z = Math.PI * Math.pow(4, 2);
console.log(Math.random());


console.log(conditional(4, "4")); */

/*  Conditional Operators

    == , ===
    > , <
    >= , <=
    != 
 */