// function getRandom(item:any[]):any{
//     let random=Math.floor(Math.random()*item.length);
//     return item[random];
//   }

//   console.log(getRandom(["As","df","yr"]));
// //   console.log(getRandom([1,3,4,5,5]));

// function getRandom<T>(item:T[]):T{
//     let random=Math.floor(Math.random()*item.length);
//     return item[random];
//   }
// let numbers=[1,2,3,4];
//   console.log(getRandom(numbers));
// //   console.log(getRandom([1,3,4,5,5]));

// function merge<U extends object,V extends object>(obj1:U,obj2:V)
// {
//     return{
//         ...obj1,
//         ...obj2
//     };
// }

// let person=merge(
//     {"name":"aman"},
//     56
// )

// console.log(person);

class Queue<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    enqueu(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The Queue is overflow!');
        }
        this.elements.push(element);

    }

    dequeue(): T | undefined {
        if (this.elements.length == 0) {
            throw new Error('The queue is empty!');
        } else {
       return this.elements.shift();
        } 
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers = new Queue<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Enqueu ${n} into the queue.`)
    numbers.enqueu(n);
}

while (!numbers.isEmpty()) {
    let n = numbers.dequeue();
    console.log(`Dequeue ${n} from the queue.`);
}
