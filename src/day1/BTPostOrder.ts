function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    //recursion
    //pre
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    //post
    path.push(curr.value);
    // no post ops since is preorder
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
