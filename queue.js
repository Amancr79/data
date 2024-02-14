var Queue = /** @class */ (function () {
    function Queue(capacity) {
        this.storage = [];
        this.front = -1;
        this.rear = -1;
    }
    Queue.prototype.enqueue = function (item) {
        if (this.front == -1) {
            this.front++;
            this.rear++;
        }
        this.storage.push(item);
        this.rear++;
    };
    Queue.prototype.dequeue = function () {
        if (this.front != -1) {
            this.front++;
        }
        this.storage.shift();
    };
    Queue.prototype.peek = function () {
        return this.storage[this.front];
    };
    Queue.prototype.size = function () {
        if (this.front == this.rear) {
            console.log("queue is empty");
        }
        return this.rear - this.front;
    };
    Queue.prototype.print = function () {
        this.storage.forEach(function (num) { return console.log(num); });
    };
    return Queue;
}());
;
var q = new Queue(Infinity);
q.enqueue(40);
q.enqueue(50);
q.print();
console.log(q.size());
console.log(q.peek());
q.dequeue();
q.print();
console.log(q.size());
console.log(q.peek());
