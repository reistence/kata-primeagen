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
            this.head = node;
        } else {
            let nextNode = this.head;
            node.next = nextNode;
            nextNode.prev = node;
            this.head = node;
        }
        this.length++;
        return;
    }

    append(item: T): void {
        let node = new Node(item);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            if (current != null) {
                while (current?.next) {
                    current = current.next;
                }

                current.next = node;
                node.prev = current;
            }
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        let previousNode = null;
        if (current?.value === item) {
            this.head = current.next;
            this.length--;
            return current.value;
        } else {
            while (current) {
                if (current.value === item) {
                    if (current.prev) {
                        current.prev.next = current.next;
                    }
                    if (current.next) {
                        current.next.prev = current.prev;
                    }
                    this.length--;
                    return current.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        let i = 0;
        let current = this.head;
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        while (i < idx) {
            if (current) {
                current = current.next;
            }
            i++;
        }
        if (current) {
            return current.value;
        }
        return undefined;
    }

    insertAt(item: T, idx: number): void {
        let i = 0;
        let current = this.head;
        let node = new Node(item);
        let previousNode = null;

        if (idx < 0 || idx >= this.length) {
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        } else {
            while (i < idx) {
                if (current) {
                    previousNode = current;
                    current = current.next;
                }
                i++;
            }
            node.next = current;
            if (current) {
                current.prev = node;
            }
            if (previousNode) {
                previousNode.next = node;
                node.prev = previousNode;
            }
            this.length++;
            return;
        }
    }

    removeAt(idx: number): T | undefined {
        let i = 0;
        let current = this.head;
        let previousNode = null;
        if (idx < 0 || idx >= this.length) {
            return;
        }
        if (idx === 0) {
            if (current) {
                const removed = current.value;
                this.head = current.next;
                if (this.head) {
                    this.head.prev = null; // Update the prev reference of the new head
                }
                this.length--;
                return removed;
            }
        } else {
            while (i < idx && current) {
                previousNode = current;
                current = current.next;
                i++;
            }
            if (current) {
                const removed = current.value;
                if (previousNode) {
                    previousNode.next = current.next;
                    current.prev = previousNode;
                }
                this.length--;
                return removed;
            }
        }

        return undefined;
    }
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
