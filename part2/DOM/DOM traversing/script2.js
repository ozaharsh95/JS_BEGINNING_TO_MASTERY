const rootNode=document.getRootNode();

console.log(rootNode);

const htmlElementNode=rootNode.childNodes[0];

console.log(htmlElementNode.childNodes);
 
const headElementNode=htmlElementNode.childNodes[0];
const textElementNode=htmlElementNode.childNodes[1];
const 
bodyElementNode=htmlElementNode.childNodes[2];

//parent
console.log(headElementNode.parentNode);

//sibling 
console.log(headElementNode.nextSibling);



//childNodes v/s children

const con=document.querySelector(".container");

console.log(con.childNodes);
console.log(con.children);