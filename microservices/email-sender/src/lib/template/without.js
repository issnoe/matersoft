/**
 * @typedef {Object} Params
 * @property {Array<string>} to  - List matriculas
 * @property {string} message Encoded
 */

/**
 * @function
 * @param {Params} params
 */
export default function base({ message = '...' }) {
  return `<p style='white-space: pre-line;margin:0;word-wrap:break-word;color:#4c4c4c;word-break:break-word;font-weight:400;font-size:16px;line-height:1.5'>${decodeURIComponent(message)}</p>`
}

