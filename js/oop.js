/* var employee = {
    name : "jhdsfhj",
    age : 45,
    gender : "M",
    salary : function(){
       return getSalary();
    }
};
var employee = {};
var employee = new Object();
employee.name = "Venkatesh";
employee.age = 'kjwer';
console.log(employee.name);


function getSalary(){
    return 50;
}


console.log(employee['name']);
if( employee.hasOwnProperty('DOJ')){
    console.log("Date of joining is present")
}else{
    console.log("NP")
}

function showHide(e){
    console.log(e);
}

employee ={
    name : '',
    age :'',
    gender:'',
    degree:''
} */

/* for , while , do while ,forEach */

function employee(name,age,gender,degree){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.degree = degree;
}
employee.prototype.getDetails = function(){
    console.log("My name is "+ this.name +" and age is " + this.age )
    return 1;
};
var employee1 = new employee("Venkatesh",26,"M","B.Tech");
var employee2 = new employee("Praveen",29,"M","B.Tech");
var employee3 = new employee("Harsha",92,"M","B.Tech");



console.log(employee1.getDetails());
console.log(employee2.getDetails());
console.log(employee3.getDetails());

var employees = [employee1,employee2,employee3]


for( employee in employees ){
    console.log(employees[employee])
}

var keys = Object.keys(employee1);
console.log(keys);

console.log(employee1[keys[1]]);

delete employee1[keys[3]];
console.log(employee1)

/* Pass by reference */
employee4 = employee1;
employee4.age = 100;
console.log(employee4);
console.log(employee1);