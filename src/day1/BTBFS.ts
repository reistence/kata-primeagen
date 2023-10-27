// Breath First Search

import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue();
    q.enqueue(head);

    while (q.length) {
        let curr = q.deque() as BinaryNode<number>;
        // search
        if (curr.value === needle) {
            return true;
        }
        if (curr.left) {
            q.enqueue(curr.left);
        }
        if (curr.right) {
            q.enqueue(curr.right);
        }
    }

    return false;
}
