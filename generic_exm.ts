type Person={
    name:string;
    age:number;
}

const person:Person[]=[
    {
        name:"rahul",
        age:22
    },
    {
        name:"Bhavna",
        age:23
    },
    {
        name:"aman",
        age:22
    },
];

const filterPeople=<T,U extends keyof T>(arr:T[],property:U,value:T[U]):T[]=>{
    return arr.filter(item=>item[property]===value);
}

console.log(filterPeople(person,"name","Bhavna"));


