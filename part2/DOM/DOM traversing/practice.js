const root = document.getRootNode()
console.log(root);

const htmlElementNode = root.childNodes[0]

console.log(htmlElementNode.childNodes);
console.log(htmlElementNode.children);

const headElementNode = htmlElementNode.childNodes[0]
const textElementNode = htmlElementNode.childNodes[1]
const bodyElementNode = htmlElementNode.childNodes[2]


// back to parent

console.log(headElementNode.nextSibling);
console.log(headElementNode.nextElementSibling);