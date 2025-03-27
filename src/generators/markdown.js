/**
 * Generates a Markdown representation of a hierarchical structure of nodes.
 * @param {Array<object>} nodes - An array of node objects to process. Each node should have the following properties:
 *   @param {string} nodes[].field - The field name of the node.
 *   @param {string} nodes[].key - The key associated with the node.
 *   @param {string} nodes[].type - The type of the node (e.g., 'message').
 *   @param {string} nodes[].value - The value of the node.
 *   @param {Array<object>} nodes[].children - An array of child nodes.
 * @param {number} [level] - The current indentation level for the Markdown output.
 * @returns {string} A string containing the generated Markdown representation of the nodes.
 */
export function generateMarkdown(nodes, level = 0) {
  let md = '';

  nodes.forEach((node, index) => {
    const codePart = `${node.field}${node.key}`;
    const val = node.type === 'message' ? `${node.value} blocks` : node.value;

    const indent = ' '.repeat(level * 4);

    md += `${indent}${index + 1}.  \`${codePart}\` - ${node.type} (${val})\n\n`;

    if (node.children.length > 0) {
      md += generateMarkdown(node.children, level + 1);
    }
  });

  return md;
}