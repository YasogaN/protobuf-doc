/**
 * Represents a Protobuf token with its parsed components.
 */
export class Protobuf {
  /**
   * The raw token string.
   * @type {string}
   */
  raw;

  /**
   * The field number extracted from the token.
   * @type {string}
   */
  field;

  /**
   * The key representing the type of the token.
   * @type {string}
   */
  key;

  /**
   * The human-readable type of the token, derived from the key.
   * @type {string}
   */
  type;

  /**
   * The value part of the token, or 'null' if not present.
   * @type {string}
   */
  value;

  /**
   * The child tokens of this Protobuf token.
   * @type {Protobuf[]}
   */
  children;

  /**
   * The parent token of this Protobuf token, or null if it has no parent.
   * @type {Protobuf|null}
   */
  parent;

  /**
   * Creates an instance of Protobuf.
   * Parses the raw token string and initializes the properties.
   * @param {string} raw - The raw token string to parse.
   * @throws {Error} If the token does not match the expected pattern.
   * @throws {Error} If the token contains an unknown type key.
   */
  constructor(raw) {
    this.raw = raw;
    const match = raw.match(/^(\d+)(\w)(.*)$/);

    if (!match) {
      throw new Error(`Token '${raw}' does not match expected pattern`);
    }
    this.field = match[1];
    const typeMap = {
      'B': 'bytes',
      'b': 'boolean',
      'd': 'double',
      'e': 'enum',
      'f': 'float',
      'g': '32-bit signed fix-sized integer',
      'h': '64-bit signed fix-sized integer',
      'i': '32-bit signed variant integer',
      'j': '64-bit signed variant integer',
      'm': 'message',
      'n': '32-bit signed zigzag variant integer',
      'o': '64-bit signed zigzag variant integer',
      's': 'string',
      'u': '32-bit unsigned variant integer',
      'v': '64-bit unsigned variant integer',
      'x': '32-bit unsigned fix-sized integer',
      'y': '64-bit unsigned fix-sized integer',
      'z': 'base64'
    };

    this.key = match[2];
    this.type = typeMap[this.key];
    if (!this.type) {
      throw new Error(`Unknown type '${this.key}' in token '${raw}'`);
    }
    this.value = match[3] || 'null';
    this.children = [];
    this.parent = null;
  }
}