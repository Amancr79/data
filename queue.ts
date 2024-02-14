// A generic class to implement queue data structure?
interface queue<T>{
    dequeue():void;
    enqueue(item:T):void;
    peek():T;
    size():number;
}

class Queue<T> implements queue<T>{
    storage:T[]=[];
    front:number;
    rear:number;
    constructor(capacity:number)
    {
       this.front=-1;
       this.rear=-1;
    }
    enqueue(item: T): void {
        if(this.front==-1)
        {
            this.front++;
            this.rear++;
        }
        this.storage.push(item);
        this.rear++;
    }
    dequeue(): void {
        if(this.front!=-1)
        {
            this.front++;
        }
        this.storage.shift();
    }
     peek():T {
         if(front===-1)
         {
            return -1;
        }
        return this.storage[this.front];
     }
    size(): number {
        if(this.front==this.rear)
        {
            console.log("queue is empty");
        }
        return this.rear-this.front;
    }
     print(){
        this.storage.forEach(num=>console.log(num));
    }
};


const q=new Queue<number>(Infinity);
q.enqueue(40);
q.enqueue(50);
q.print();
console.log(q.size());
console.log(q.peek());
q.dequeue();
q.print();
console.log(q.size());
console.log(q.peek());
