export default class SinglyLinkedList<T> {
    public length: number;
    public head: null | Node<T> = null;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        let node = new Node(item);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            let nextNode = current.next;

            this.head = node;
            node.next = nextNode;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        var node = new Node(item);
        let current = this.head;
        let previousNode = null;
        let i = 0;
        if (idx < 0 || idx >= this.length) {
            return;
        }
        if (idx === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (i < idx) {
                if (current) {
                    previousNode = current;
                    current = current.next;
                }
                i++;
            }
            node.next = current;
            if (previousNode) {
                previousNode.next = node;
            }
        }
        this.length++;
    }

    append(item: T): void {
        let node = new Node(item);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            if (current != undefined) {
                while (current?.next) {
                    current = current.next;
                }
                current.next = node;
            }
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        let previousNode = null;

        if (current?.value === item) {
            this.head = current.next;
        } else {
            while (current) {
                if (current.next?.value === item) {
                    previousNode = current;
                    break;
                }
                current = current.next;
            }
            if (previousNode && previousNode.next) {
                const removedNode = previousNode.next;
                previousNode.next = removedNode?.next;
                return removedNode?.value;
            }
        }
        this.length--;
        return undefined;
    }

    get(idx: number): T | undefined {
        let i = 0;

        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;

        while (i < idx) {
            if (current) {
                current = current?.next;
            }
            i++;
        }
        if (current) {
            return current.value;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined; // Index out of bounds
        }

        if (idx === 0) {
            if (this.head) {
                const removedValue = this.head.value;
                this.head = this.head.next;
                this.length--;
                return removedValue;
            }
        } else {
            let current = this.head;
            let previousNode = null;

            let i = 0;
            while (i < idx && current) {
                previousNode = current;
                current = current.next;
                i++;
            }

            if (current) {
                const removedValue = current.value;
                if (previousNode) {
                    previousNode.next = current.next;
                }
                this.length--;
                return removedValue;
            }
        }

        return undefined; // Index not found
    }
}

class Node<T> {
    public value: T;
    public next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
