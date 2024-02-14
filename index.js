var prompt = require('prompt-sync')();
// // console.log(10+20);
// // let x=prompt("enter your age");
// // function sum(num)
// // {
// //  let x=num.toString();
// //  let sum=0;
// //  for(let digit of x){
// //     sum+=parseInt(digit);
// //  }
// //  return sum;
// // }
// // console.log(sum(12345));

// // const product ={
// //    name:"bag",
// //    price:"$45",
// //    quality:"A+"
// // }

// // console.log(product);
// // let arr=[12,13,14];

// // const arr1=arr.filter((val)=>{
// //    return val>12;
// // })
// // console.log(arr1);
// // let x;
// // // x=12;
// // console.log(sum(4,5));
// // function sum(a,b){
// //    return a+b;
// // }

// // var a=12;

// // {
// //    var a=23;
// //    console.log(a);
// // }
// // console.log(a);
// // let i=0;
// // for(;i<3;)
// // {
// //    i++;
// //    if(i==1)
// //    {
// //       continue;
// //    }
// //    else{
// //       console.log(i);
// //    }
// // }

// // let a=prompt("Enter your value :");

// // let reverse = a =>{
// //   let new_num=0;
// //   while(a>0)
// //   {
// //     let rem=a%10;
// //     new_num=new_num*10+rem;
// //     a=Math.floor(a/10);
// //   }
// //   return new_num;
// // }

// // let reverse_num=reverse(a);
// // console.log(reverse_num);
// // "use strict";

// // let str = "Hello";
// // str.test=5;
// // alert(str);
// // console.log(str.test);
// //assignment -01
// // let size=20;
// // for(let i=1;i<=size;i++)
// // {
// //    if(i%3==0 && i%5==0)
// //    {
// //       console.log(i+" HailIndia");
// //    }
// //    else if(i%3==0)
// //    {
// //       console.log(i+ " Hail");
// //    }
// //    else if(i%5==0)
// //    {
// //       console.log(i+ " India");
// //    }
// // }
// // //assignment :02
// // //method-1
// // const arr=[-2,-13,89,34,-14,32,73];
// // // let sum=0;
// // // for(let i=0;i<arr.length;i++)
// // // {
// // //    if(arr[i]>=0)
// // //    {
// // //       sum=sum+arr[i];
// // //    }
// // // }
// // // console.log(sum);

// // // output : 228

// // // method-2

// // let sum=arr.reduce((accumulator,current)=>{
// //    if(current>0)
// //    {
// //       return accumulator+current;
// //    }
// //    return accumulator;
// // },0);

// // console.log(sum);

// // // output: 228
// function sumOfPositiveNumber(numbers) {
//    let sum = 0;
//    for (let i = 0; i < numbers.length; i++) {
//      if (numbers[i] > 0) {
//        sum -= numbers[i];
//      }
//    }
 
//    return sum;
//  }
 
//  const arr1 = [19, -2, 13, -14, 17, -4, 8];
//  const arr2 = [-12, -32, -38];
//  const arr3 = [0, 0, 0];
//  const arr4 = [];
//  const arr5 = [11, 21, 13, 2];
 
//  console.log("Sum of positive numbers (arr1):", sumOfPositiveNumber(arr1)); // Output: 24
//  console.log("Sum of positive numbers (arr2):", sumOfPositiveNumber(arr2)); // Output: 0
//  console.log("Sum of positive numbers (arr3):", sumOfPositiveNumber(arr3)); // Output: 0
//  console.log("Sum of positive numbers (arr4):", sumOfPositiveNumber(arr4)); // Output: 0
//  console.log("Sum of positive numbers (arr5):", sumOfPositiveNumber(arr5)); // Output: 10
 
// let os=require('os');
// let user=os.userInfo();
// console.log(user);
// let t=require('./note.js');
// console.log(t.age);
// console.log(t.addnum(t.age,10));

// let arr=[10,20];
// arr.push(30);
// console.log(arr);
// arr[100]=40;
// console.log(arr);
// let arr1=new Array();
// arr1.push("Aman");
// arr1.push("12");
// console.log(arr1);
// delete arr[1];
// console.log(arr);

//array is an object in js , it store different types of data in it i.e string, boolean ,number
// let arr=[12,13,"Am a boy",true];
// console.log(arr);
//operation on array to insert and remove
//1 push and pop
//2 shift and unshift

// arr.push(21);
//push element at end
// arr.pop();
//pop elemt from end
// arr.shift();
//shift : remove element from front but it is time consuming and have to shift every element in left by 1
// arr.unshift(54);
// console.log(arr);
//unshift insert element in front but it is time consuming and have to shift every element in right by 1

//dynamically create an array

// let arr1=new Array();
// arr[-9]=33;
// console.log(arr);
// arr.forEach((item)=>{
//    console.log(item);
// })

// for(let i of arr)
// {
//    console.log(i);
// }

// for(let i in arr)
// {
//    console.log(arr[i]);
// }

// let arr1=arr;
// arr1.push(12);
// if(0==[])
// {
//    console.log('a');
// }
// else{
//    console.log('b');
// }
// console.log(typeof(''));
// let styles=["jazz","blue","rock-n-roll"];
// let idx=Math.floor((styles.length-1)/2);
// styles[idx]="classic";
// console.log(styles);
// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// arr[2]();

// let arr=[12,14,112,123,6,7];
// arr.sort();

// arr=arr.filter()

// let result=arr.filter((item)=>{
//    return item%2==1;
// })
// console.log(result);
// let emp={};
// let sal=prompt("enter salary");
// emp[sal]=20000;
// console.log(emp);

// let name="border-left-width";

// let str=name.split('-');
// console.log(str);
// str.forEach((item)=>{
//     item=item.toUpperCase;
// })
// str=str.join('');
// console.log(str);
// let arr = [5, 3, 8, 1];
// arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr);
// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log( countries.sort((a, b) => a > b ? 1 : -1) ); 
// console.log( countries.sort((a, b) => a.localeCompare(b) ) ); 

// class BankAccount{
//    constructor(accountHolder,Balance)
//    {
//      this.accountHolder=accountHolder;
//      this.Balance=Balance;
//    }
//    Deposit(amount)
//    {
//     this.Balance+=amount;
//    }
//    Withdraw(amount)
//    {
//       if(this.Balance<amount)
//       {
//         console.log("insufficient Balance");
//       }
//       else{
//           this.Balance-=amount;
//       }
//    }
// };

// let Accounts=[];

// const account=new BankAccount("Aman",2000);
// console.log(Accounts)
// Accounts.push(account);
// account.Deposit(4000);
// console.log(Accounts)
// account.Withdraw(7000);
// console.log(Accounts)
// account.Withdraw(5000);
// console.log(Accounts)

// try{
  // let x=add(a+b);
  // console.log(x);
// }
// catch(e){
//   console.log({e});
// }

// try {
//   let result = add(10, 20);
//   console.log(result);
// } catch (e) {
//   console.log({ name: e.name, message: e.message });
// }
// console.log('Bye');


// function isValidJSON(str){
//   try {
//     JSON.parse(str);
//     return true;
//   } catch(e) {
//     console.log(e)
//     return false;
//   }
//   console.log('hji');
// };

// let valid = isValidJSON(`{"language":"JavaScript"}`);
// console.log(valid);

// let data='{"age":20}';

// try{
//   let user=JSON.parse(data);
//   if(!user.age)
//   {
//     throw new SyntaxError("user name is not found");
//   }
//   console.log(user);
// }
// catch(e){
//  console.log("error "+ e.message);
// }

// console.log(typeof(NaN));

function getRandom(item:any[]):any{
  let random
}