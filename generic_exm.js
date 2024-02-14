var person = [
    {
        name: "rahul",
        age: 22
    },
    {
        name: "Bhavna",
        age: 23
    },
    {
        name: "aman",
        age: 22
    },
];
var filterPeople = function (arr, property, value) {
    return arr.filter(function (item) { return item[property] === value; });
};
console.log(filterPeople(person, "name", "Bhavna"));
