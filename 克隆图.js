/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return;
    // 深度优先遍历
    const visited = new Map();
    const dfs = (n) => {
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        // 防止neighbors 为空
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                dfs(ne);
            }
            // push 新节点，且可以确保一定有该节点
            nCopy.neighbors.push(visited.get(ne));
        })
    };
    dfs(node);
    return visited.get(node);
};