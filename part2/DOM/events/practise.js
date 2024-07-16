
// const btn=document.querySelector('input[type="submit"]');

// const ul=document.querySelector('.todo-list');

// const doneButton=document.getElementsByClassName('done');
// const removeButtton=document.getElementsByClassName('remove');

// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const inputBar=document.querySelector('.form-todo input[type="text"]');
    
//     const newLi=document.createElement('li');
    
//     newLi.innerHTML=`
//     <span class="text">${inputBar.value}</span>
//     <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`;

    
//     ul.append(newLi);
//     inputBar.value="";


// for(let btnd of doneButton){
//     btnd.addEventListener('click',(e)=>{
//         e.target.parentNode.previousSibling.previousSibling.style.textDecoration="line-through";
//         console.log('yes done');
//     });
// }

// for(let btnr of removeButtton){
//     btnr.addEventListener('click',(e)=>{
//         e.target.parentNode.parentNode.remove();
//         // console.log(e.target.parentNode);
//     });
// }
// });


/*

14 oct approach

const form = document.querySelector(".form-todo");

const input = document.querySelector('input[type="text"]');
console.log(input);
const ul = document.querySelector(".todo-list");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newli = document.createElement("li");
    newli.innerHTML = `
   
    <span class="text">${input.value}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>

    `;
    ul.append(newli);


    let liveList = ul.getElementsByTagName("li");
    console.log(liveList);
    
    liveList = [...liveList]
    
    input.value = "";


    const removebtn = newli.querySelector(".remove");
    const done = newli.querySelector(".done");
    removebtn.addEventListener("click", function(){
        this.parentNode.parentNode.remove();
    });
    done.addEventListener("click", function(){
        console.log(this.parentNode);
        this.parentNode.previousElementSibling.style.textDecoration = "line-through";
    })


});


*/

const submitBtn = document.querySelector('.form-todo').querySelector('input[type="submit"]')
const inputText = document.querySelector('.form-todo').querySelector('input[type="text"]')
const ul = document.querySelector('.todo-list')

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputTextFromElement = inputText.value 
    if(!inputTextFromElement||inputTextFromElement.length===0){
        return
    }
    const newLi = document.createElement('li')
    newLi.innerHTML += `
          <span class="text">${inputTextFromElement}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
          `;
    ul.append(newLi)

    const allLi = ul.querySelectorAll('li')
    allLi.forEach((btn)=>{
        const doneBtn = btn.querySelector('.done')
        const removeBtn = btn.querySelector('.remove')
        const text = btn.querySelector('.text')
        
        doneBtn.addEventListener('click',(e)=>{
            text.style.textDecoration = 'line-through'
        })
        removeBtn.addEventListener('click',(e)=>{
            btn.remove()
        })
    })

    inputText.value = ''
})
