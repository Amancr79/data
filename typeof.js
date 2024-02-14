var person = {
    name: "aman",
    email: "ama@gmail.com"
};
// const getName=():string=>{
//     return person.name;
// }
var getEmail = function () {
    return person.email;
};
var getName = function (key) {
    return person[key];
};
console.log(getName("email"));
