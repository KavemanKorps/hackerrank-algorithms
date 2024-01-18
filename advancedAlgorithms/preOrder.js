class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// THIS IS PREORDER (NLR)
function preorderTraversal(node, resultArray) {
    if (node !== null) {
        // Process the current node
        if (node.value < 5) {
        resultArray.push(node.value);
        }

        // Recursively traverse the left subtree
        preorderTraversal(node.left, resultArray);

        // Recursively traverse the right subtree
        preorderTraversal(node.right, resultArray);
    }
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);

//        3
//       / \
//      2   4
//     / \
//    1   5

const result = [];
preorderTraversal(root, result);

console.log(result);  // Output: [3, 2, 1, 4]

// preorder(3, [])...preorderTraversal(node.left, [3]);
//   preorder(2, [3])...preorderTraversal(node.left, [3, 2]);
//     preorder(1, [3, 2])...preorderTraversal(node.left, [3, 2, 1]);...NO NODE.LEFT (NULL)...return 
//                        ...preorderTraversal(node.right, [3, 2, 1]);...NO NODE.RIGHT (NULL)...return 
//                        FROM HERE, WE BACK THE FUCK UP
//   preorder(2, [3, 2, 1])...preorderTraversal(node.right, [3, 2, 1]);
//     preorder(5, [3, 2, 1])...preorderTraversal(node.left, [3, 2, 1]);...NO NODE.LEFT (NULL)...return
//                           ...preorderTraversal(node.right, [3, 2, 1]);...NO NODE.RIGHT (NULL)...return 
// preorder(3, [3, 2, 1])...preorderTraversal(node.right, [3, 2, 1]);
//   preorder(4, [3, 2, 1])...preorderTraversal(node.left, [3, 2, 1, 4]);...NO NODE.LEFT (NULL)...return
//                         ...preorderTraversal(node.right, [3, 2, 1, 4]);...NO NODE.RIGHT (NULL)...return
// preorder(3, [3, 2, 1, 4])...LEFT AND RIGHT VISITED. Return [3, 2, 1, 4].


// THIS FUNCTION HAS NO "RETURN RESULTARRAY" ANYWHERE. This function is designed to modify the 
// "resultArray" in-place rather than return a new array. The shit you see in the console is 
// the result of "console.log(result);"