// Nodes -> element nodes, text nodes, comment nodes
// elements -> only element nodes

// In dom 
// root node    -> document
// root element -> html

//root
const root=document.getRootNode();
console.log(root);

//childrens of root node
console.log(root.childNodes);
console.log(root.children);


//html element node
const htmlElementNode=root.childNodes[0];
console.log(htmlElementNode.childNodes);

//childrens of html node
const headElementNode=htmlElementNode.childNodes[0];
const textElementNode=htmlElementNode.childNodes[1];
const 
bodyElementNode=htmlElementNode.childNodes[2];

// Traversing to parent
console.log(headElementNode.parentElement);
console.log(bodyElementNode.parentNode);


//Traversing to sibling next or previous

console.log(headElementNode.nextSibling);
console.log(headElementNode.nextElementSibling);
console.log(bodyElementNode.previousSibling);
console.log(bodyElementNode.previousElementSibling);



//childNodes v/s children

const con=document.querySelector(".container");

console.log(con.childNodes);
console.log(con.children);
