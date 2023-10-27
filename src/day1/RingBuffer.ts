export default class RingBuffer<T> {
    public data: T[];
    private readIndex: number;
    private size: number;
    private writeIndex: number;
    public capacity: number;

    constructor(capacity: number) {
        this.data = [];
        this.readIndex = 0;
        this.size = 0;
        this.writeIndex = 0;
        this.capacity = capacity;
    }

    getSize(): number {
        return this.size;
    }
    isEmpty(): boolean {
        return this.getSize() === 0;
    }
    clear(): void {
        this.data = new Array(this.capacity);
        this.size = 0;
    }

    enqueue(element: T): void {
        this.data[this.writeIndex] = element;
        const elementIsOverWritten =
            this.size !== 0 && this.writeIndex === this.readIndex;
        if (elementIsOverWritten) {
            this.readIndex = (this.readIndex + 1) % this.capacity;
        }

        this.writeIndex = (this.writeIndex + 1) % this.capacity;

        this.size += 1;
    }

    dequeue(): T | null {
        if (this.isEmpty()) return null;

        const removedVal = this.data[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;

        this.size -= 1;

        return removedVal;
    }

    get(idx: number): T {
        return this.data[idx];
    }
}

let prova = new RingBuffer(10);
console.log("prova", prova);
// for (let i = 0; i < 25; i++) {
// let w = prova.enqueue(i);
//     // console.log(w);
// }
// let y = prova.pop();
// console.log("pop", y);
prova.enqueue(1);
prova.enqueue(2);
prova.enqueue(3);
prova.enqueue(4);
prova.enqueue(5);
prova.enqueue(6);
prova.enqueue(7);
prova.enqueue(8);
prova.enqueue(9);
prova.enqueue(10);
prova.enqueue(10);
console.log("prova", prova);

let o = prova.dequeue();
console.log("deq", o);
console.log("prova", prova);
console.log(prova.get(10));
