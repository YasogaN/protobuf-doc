#!/usr/bin/env node

import { generateMarkdown } from "./generators/markdown.js";
import { buildTree } from "./utils/buildTree.js";

/**
 *
 */
function main() {
  // eslint-disable-next-line no-undef
  if (process.argv.length !== 4 || process.argv[2].trim() === '' || process.argv[2].trim() === '""') {
    //eslint-disable-next-line no-console
    console.error("Usage: npx protobuf-doc \"<protobuf-string>\" <output-format>");
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
  // eslint-disable-next-line no-undef
  const input = process.argv[2];
  // eslint-disable-next-line no-undef
  const output = process.argv[3];

  // Split input by "!" and filter out empty tokens.
  const tokens = input.split('!').filter(t => t.trim() !== '');

  try {
    const tree = buildTree(tokens);

    switch (output) {
      case "md":
        //eslint-disable-next-line no-console
        console.log(generateMarkdown(tree));
        break
      default:
        //eslint-disable-next-line no-console
        console.error("Unknown output format:", output);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
  } catch (err) {
    //eslint-disable-next-line no-console
    console.error("Error parsing tokens:", err.message);
  }
}

main();
