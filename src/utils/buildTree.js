import { Protobuf } from "../classes/protobuf.js";

/**
 * Builds a hierarchical tree structure from an array of tokens.
 *
 * Each token is converted into a `Protobuf` node, and the tree is constructed
 * based on parent-child relationships defined by the `type` and `value` properties
 * of the nodes. Nodes of type `message` can have children, and the number of children
 * is determined by the `value` property of the node.
 * @param {Array<string>} tokens An array of token objects to be converted into a tree structure.
 * @returns {Array<Protobuf>} An array representing the root nodes of the constructed tree.
 */
export function buildTree(tokens) {
  const nodes = tokens.map(token => new Protobuf(token));

  if (nodes.length === 0) return [];

  const root = nodes[0];

  root.parent = null;
  const tree = [root];
  const stack = [root]; // Stack to track message nodes

  for (let i = 1; i < nodes.length; i++) {
    const curr = nodes[i];

    // Find the correct parent
    while (stack.length > 0) {
      const top = stack[stack.length - 1];

      // If top is a message and still has room for children, add curr as its child
      if (top.type === 'message' && top.children.length < parseInt(top.value)) {
        curr.parent = top;
        top.children.push(curr);
        break;
      }

      // Otherwise, pop the stack to go back up the hierarchy
      stack.pop();
    }

    // If stack is empty, this is a top-level node
    if (stack.length === 0) {
      tree.push(curr);
    }

    // If it's a message, push it onto the stack to track its children
    if (curr.type === 'message') {
      stack.push(curr);
    }
  }

  return tree;
}