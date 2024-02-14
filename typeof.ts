interface Person{
    name:string;
    email:string;
    // [key:string]:string;
}

const person:Person={
    name:"aman",
    email:"ama@gmail.com"
}

// const getName=():string=>{
//     return person.name;
// }

const getEmail=():string=>{
    return person.email;
}

const getName=(key:keyof Person)=>{
    return person[key];
}


console.log(getName("email"));