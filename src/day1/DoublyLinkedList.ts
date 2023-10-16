export default class DoublyLinkedList<T> {
    public length: number;
    public head: null | Node<T> = null;
    // public tail: null | Node<T> = null;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        let node = new Node(item);

        if (this.head === null) {
        }
    }

    append(item: T): void {}

    remove(item: T): T | undefined {}

    get(idx: number): T | undefined {}

    insertAt(item: T, idx: number): void {}

    removeAt(idx: number): T | undefined {}
}

class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
