const todoForm=document.querySelector(".form-todo");

const todoInput=document.querySelector(".form-todo input[type='text']");

const todoList=document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodotext=todoInput.value;
    const newLi=document.createElement("li");
    const newLiinnerHTML=`
        <span class="text">${newTodotext}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>
    `;
    newLi.innerHTML=newLiinnerHTML;
    todoList.append(newLi);
    todoInput.value="";
});


todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
});




// here in 1st way mastermind plan is selecting ul instead of perticular buttons

// as new li add ul get bigger

// in DOM ul actually get bigger

// so traverse on ul is significant rather than buttons



// alternative way
// i make livelist(HTMLCollection) of buttons
// here what i do whenever i add li 
// in same eventAction i add eventListener to new buttons as i maintain livelist for them

/**
 * 
const btn=document.querySelector('input[type="submit"]');

const ul=document.querySelector('.todo-list');

const doneButton=document.getElementsByClassName('done');
const removeButtton=document.getElementsByClassName('remove');

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const inputBar=document.querySelector('.form-todo input[type="text"]');
    
    const newLi=document.createElement('li');
    
    newLi.innerHTML=`
    <span class="text">${inputBar.value}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;

    
    ul.append(newLi);
    inputBar.value="";


for(let btnd of doneButton){
    btnd.addEventListener('click',(e)=>{
        e.target.parentNode.previousSibling.previousSibling.style.textDecoration="line-through";
        console.log('yes done');
    });
}

for(let btnr of removeButtton){
    btnr.addEventListener('click',(e)=>{
        e.target.parentNode.parentNode.remove();
        // console.log(e.target.parentNode);
    });
}
});



 * 
 * 
 */
