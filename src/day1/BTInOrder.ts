// Deep Search

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    //recursion
    //pre
    // no post ops since is in order
    //recurse
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    //post
    // no post ops since is in order
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
