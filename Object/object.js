const emp = {
    name: "Vijay",
    empId: 1001,
    address:"Jalandhar"
    
}


//--------------------------------------------------------------

const me = Object.create(emp);
console.log(emp);
console.log(me);

me.name = "nayan";
// console.log(emp.name);
// console.log(me.name);

//--------------------------------------------------------------


// const me = Object.assign({}, emp);
// console.log(emp);

console.log(Object.keys(emp)[1]);

for (let index in Object.values(emp))
{
    console.log(index);
}