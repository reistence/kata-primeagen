export default class DoublyLinkedList<T> {
    public length: number;
    public head: null | Node<T> = null;
    public tail: null | Node<T> = null;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {}

    insertAt(item: T, idx: number): void {}

    append(item: T): void {}

    remove(item: T): T | undefined {}

    get(idx: number): T | undefined {}

    removeAt(idx: number): T | undefined {}
}

class Node<T> {
    public value: T;
    public next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
