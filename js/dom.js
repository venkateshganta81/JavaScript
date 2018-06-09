var x = document.getElementById("test");
console.log(x);

x.innerHTML = "<h5>Hello</h5>"

var y = document.getElementsByClassName("testclass");
console.log(y)
y[0].innerText ="Class manipulated text";


function login(){
    x = document.getElementById('email').value;
    y=document.getElementById('password').value;
    console.log(x,y) ;
    z={
        email : x,
        password : y
}
}
